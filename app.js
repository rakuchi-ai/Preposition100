// Application State
let currentSessionQuestions = [];
let currentIndex = 0;
let score = 0;
let stockList = JSON.parse(localStorage.getItem('prep_preposition_stock')) || [];

// DOM Elements
const menuScreen = document.getElementById('menu-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const homeBtn = document.getElementById('home-btn');
const stockModeBtn = document.getElementById('stock-mode-btn');
const stockCountSpan = document.getElementById('stock-count');
const rangeButtons = document.querySelectorAll('.range-btn');

const progressBar = document.getElementById('progress-bar');
const questionCounter = document.getElementById('question-counter');
const interruptBtn = document.getElementById('interrupt-btn');

const qIdTag = document.getElementById('q-id-tag');
const questionText = document.getElementById('question-text');
const choicesContainer = document.getElementById('choices-container');

const explanationBox = document.getElementById('explanation-box');
const resultBadge = document.getElementById('result-badge');
const correctAnswerText = document.getElementById('correct-answer-text');
const explanationText = document.getElementById('explanation-text');
const actionButtonsContainer = document.getElementById('action-buttons-container');

const scoreText = document.getElementById('score-text');
const resultDetail = document.getElementById('result-detail');
const resultMenuBtn = document.getElementById('result-menu-btn');

// Initialize Menu Screen
function initMenu() {
    updateStockUI();
    setupRangeButtons();
}

function updateStockUI() {
    if (stockCountSpan) stockCountSpan.textContent = stockList.length;
    if (stockModeBtn) stockModeBtn.disabled = stockList.length === 0;
}

function setupRangeButtons() {
    rangeButtons.forEach(btn => {
        btn.onclick = () => {
            const mode = btn.getAttribute('data-mode');
            const start = parseInt(btn.getAttribute('data-start'), 10);
            const end = parseInt(btn.getAttribute('data-end'), 10);
            
            let selected = [];
            
            if (mode === 'all') {
                selected = [...questionsData];
            } else if (start && end) {
                selected = questionsData.filter(q => q.id >= start && q.id <= end);
            }
            
            startSession(selected);
        };
    });
}

// Start Learning Session
function startSession(questions) {
    currentSessionQuestions = questions;
    currentIndex = 0;
    score = 0;
    
    menuScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    homeBtn.classList.remove('hidden');
    
    showQuestion();
}

// Show Question
function showQuestion() {
    if (currentIndex >= currentSessionQuestions.length) {
        finishSession();
        return;
    }

    const q = currentSessionQuestions[currentIndex];
    
    explanationBox.classList.add('hidden');
    choicesContainer.innerHTML = '';
    actionButtonsContainer.innerHTML = '';
    
    qIdTag.textContent = `No.${q.id}`;
    questionText.textContent = q.question;
    
    const total = currentSessionQuestions.length;
    questionCounter.textContent = `No.${q.id} (問 ${currentIndex + 1} / ${total})`;
    progressBar.style.width = `${(currentIndex / total) * 100}%`;

    q.choices.forEach((choice) => {
        const choiceBtn = document.createElement('button');
        choiceBtn.className = 'choice-btn';
        choiceBtn.textContent = choice;
        choiceBtn.addEventListener('click', () => handleAnswer(choice, q, choiceBtn));
        choicesContainer.appendChild(choiceBtn);
    });
}

// Handle Answer Selection (配列形式の複数正解にも対応)
function handleAnswer(selectedChoice, question, clickedBtn) {
    const allBtns = choicesContainer.querySelectorAll('.choice-btn');
    allBtns.forEach(b => b.disabled = true);

    // 正解判定チェック
    let isCorrect = false;
    let correctAnswers = Array.isArray(question.answer) ? question.answer : [question.answer];
    
    isCorrect = correctAnswers.some(ans => selectedChoice.startsWith(ans) || selectedChoice.includes(ans));

    actionButtonsContainer.innerHTML = '';

    if (isCorrect) {
        score++;
        clickedBtn.classList.add('correct');
        resultBadge.textContent = "⭕ 正解！";
        resultBadge.className = "result-badge correct-text";
        
        const dualGrid = document.createElement('div');
        dualGrid.className = 'btn-dual-grid';

        const stockAndNextBtn = document.createElement('button');
        stockAndNextBtn.className = 'btn btn-warning';
        stockAndNextBtn.textContent = '⭐ ストックして次の問題へ';
        stockAndNextBtn.onclick = () => {
            addToStock(question);
            nextQuestion();
        };

        const nextOnlyBtn = document.createElement('button');
        nextOnlyBtn.className = 'btn btn-success';
        nextOnlyBtn.textContent = '➔ ストックせずに次の問題へ';
        nextOnlyBtn.onclick = () => {
            removeFromStock(question.id);
            nextQuestion();
        };

        dualGrid.appendChild(stockAndNextBtn);
        dualGrid.appendChild(nextOnlyBtn);
        actionButtonsContainer.appendChild(dualGrid);

    } else {
        clickedBtn.classList.add('incorrect');
        resultBadge.textContent = "❌ 不正解...";
        resultBadge.className = "result-badge incorrect-text";
        
        // 正解ボタンをハイライト表示
        allBtns.forEach(b => {
            if (correctAnswers.some(ans => b.textContent.startsWith(ans) || b.textContent.includes(ans))) {
                b.classList.add('correct');
            }
        });
        
        addToStock(question);

        const nextBtn = document.createElement('button');
        nextBtn.className = 'btn btn-primary btn-next';
        nextBtn.style.width = '100%';
        nextBtn.textContent = '次の問題へ ➔';
        nextBtn.onclick = () => {
            nextQuestion();
        };
        actionButtonsContainer.appendChild(nextBtn);
    }

    correctAnswerText.textContent = correctAnswers.join(' / ');
    explanationText.textContent = question.explanation;
    explanationBox.classList.remove('hidden');
}

function nextQuestion() {
    currentIndex++;
    showQuestion();
}

function addToStock(q) {
    if (!stockList.some(item => item.id === q.id)) {
        stockList.push(q);
        saveStock();
    }
}

function removeFromStock(qId) {
    stockList = stockList.filter(item => item.id !== qId);
    saveStock();
}

function saveStock() {
    localStorage.setItem('prep_preposition_stock', JSON.stringify(stockList));
    updateStockUI();
}

if (interruptBtn) interruptBtn.onclick = returnToMenu;
if (homeBtn) homeBtn.onclick = returnToMenu;

function returnToMenu() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    menuScreen.classList.remove('hidden');
    if (homeBtn) homeBtn.classList.add('hidden');
    updateStockUI();
}

function finishSession() {
    progressBar.style.width = '100%';
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    
    const total = currentSessionQuestions.length;
    scoreText.textContent = `${score} / ${total}`;
    resultDetail.textContent = `正答率: ${Math.round((score / total) * 100)}% | 現在ストックされている苦手問題: ${stockList.length}問`;
}

if (resultMenuBtn) resultMenuBtn.onclick = returnToMenu;

if (stockModeBtn) {
    stockModeBtn.onclick = () => {
        if (stockList.length > 0) {
            const sortedStock = [...stockList].sort((a, b) => a.id - b.id);
            startSession(sortedStock);
        }
    };
}

initMenu();
