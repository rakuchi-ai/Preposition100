const questionsData = [
  {
    "id": 1,
    "question": "The computer must be handled with (　　) because it is very delicate.",
    "choices": [
      "①caring",
      "②careful",
      "③care",
      "④carefully"
    ],
    "answer": "③care",
    "explanation": "with care で「注意して、慎重に」という副詞句を作ります。careは不可算名詞です。"
  },
  {
    "id": 2,
    "question": "I went to my sister's wedding today. She looked so beautiful (　{0}　) her white wedding dress.",
    "choices": [
      "①in",
      "②on",
      "③at",
      "④upon"
    ],
    "answer": "①in",
    "explanation": "「（服などを）着て、身につけて」を表す前置詞は in です（例: in white, in a dress）。"
  },
  {
    "id": 3,
    "question": "I found this book in the library by chance, and I think it is worth (　　).",
    "choices": [
      "①to read",
      "②reading",
      "③read",
      "④of reading"
    ],
    "answer": "②reading",
    "explanation": "be worth -ing で「〜する価値がある」という表現です。worth は動名詞を補語・目的語にとります。"
  },
  {
    "id": 4,
    "question": "When you are hired as a part-time worker, you'll be paid by (　{0}　).",
    "choices": [
      "①the hour",
      "②hour",
      "③an hour",
      "④hours"
    ],
    "answer": "①the hour",
    "explanation": "「〜単位で」を表す by the + 単位名詞 の表現です。「時間給で（1時間単位で）」は by the hour となります。"
  },
  {
    "id": 5,
    "question": "Your homework must be finished (　　).",
    "choices": [
      "①in tomorrow",
      "②by tomorrow",
      "③on tomorrow",
      "④at tomorrow"
    ],
    "answer": "②by tomorrow",
    "explanation": "期限「〜までに（完了）」を表す前置詞は by です。tomorrow の前には in/on/at などの前置詞はつけません。"
  },
  {
    "id": 6,
    "question": "He thought of the situation at home (　　) a serious problem.",
    "choices": [
      "①of",
      "②as",
      "③at",
      "④from"
    ],
    "answer": "②as",
    "explanation": "think of A as B で「AをBとみなす・考える」という意味になります。"
  },
  {
    "id": 7,
    "question": "Unfortunately, it rained day after day (　　) our trip.",
    "choices": [
      "①while",
      "②when",
      "③for",
      "④during"
    ],
    "answer": "④during",
    "explanation": "特定期間を表す名詞（our trip）の前には during を用います。while の後ろは節（S+V）が続きます。"
  },
  {
    "id": 8,
    "question": "Beth caught the girl by (　　) arm.",
    "choices": [
      "①an",
      "②her",
      "③his",
      "④the"
    ],
    "answer": "④the",
    "explanation": "「＜動詞＞ + 人 + 前置詞 + the + 身体の一部」の構文です。catch the girl by the arm で「少女の腕を掴む」となります。"
  },
  {
    "id": 9,
    "question": "The girl was looking at the baseball player (　　) her mouth wide open.",
    "choices": [
      "①by",
      "②for",
      "③from",
      "④with"
    ],
    "answer": "④with",
    "explanation": "④with"
  },
  {
    "id": 10,
    "question": "Mary decided to keep the news secret (　　) later.",
    "choices": [
      "①in",
      "②to",
      "③until",
      "④up"
    ],
    "answer": "③until",
    "explanation": "「後になるまで（ずっと秘密にしておく）」という継続を表すので until が適切です。"
  },
  {
    "id": 11,
    "question": "The sunset was very beautiful. It was (　　) description.",
    "choices": [
      "①above",
      "②beyond",
      "③outside",
      "④over"
    ],
    "answer": "②beyond",
    "explanation": "beyond description で「言葉では表現できないほど（描写を超えている）」という慣用表現です。"
  },
  {
    "id": 12,
    "question": "(　　) English as a second language, we have to study English literature and Japanese history.",
    "choices": [
      "①Besides",
      "②As for",
      "③In addition",
      "④Also"
    ],
    "answer": "①Besides",
    "explanation": "Besides A で「Aに加えて、Aのほかに」という意味の加える前置詞です。In addition は副詞（In addition to なら前置詞句）。"
  },
  {
    "id": 13,
    "question": "The outdoor concert will be held (　　) the end of this month.",
    "choices": [
      "①in",
      "②on",
      "③at",
      "④under"
    ],
    "answer": "③at",
    "explanation": "at the end of ... で「〜の終わりに、〜の末に」という特定の時点を表す前置詞句です。"
  },
  {
    "id": 14,
    "question": "The president gave a long speech. He spoke (　　) two hours.",
    "choices": [
      "①for",
      "②while",
      "③by",
      "④until"
    ],
    "answer": "①for",
    "explanation": "「2時間の間」という具体的な数字を伴う時間の長さを表すには for を用います。"
  },
  {
    "id": 15,
    "question": "The girl is very mature (　　) her age.",
    "choices": [
      "①against",
      "②for",
      "③to",
      "④with"
    ],
    "answer": "②for",
    "explanation": "for one's age で「年齢の割には」という不均衡・比例を表す for です。"
  },
  {
    "id": 16,
    "question": "The policeman caught the thief (　　) the arm.",
    "choices": [
      "①by",
      "②of",
      "③to",
      "④for"
    ],
    "answer": "①by",
    "explanation": "「掴む」系の動詞（catch, hold など）＋人＋ by the 身体の部位 で「人の〜を掴む」となります。"
  },
  {
    "id": 17,
    "question": "It was difficult to solve the dispute because disagreement was evident (　　) the workers.",
    "choices": [
      "①among",
      "②beyond",
      "③inside",
      "④within"
    ],
    "answer": "①among",
    "explanation": "3者以上の「〜の間で」を表す前置詞は among です（workers は複数）。"
  },
  {
    "id": 18,
    "question": "The art museum in this town is worth (　　). There are some very famous paintings there.",
    "choices": [
      "①having visited",
      "②to visit",
      "③visited",
      "④visiting"
    ],
    "answer": "④visiting",
    "explanation": "be worth -ing で「〜する価値がある」。動名詞 visiting が続きます。"
  },
  {
    "id": 19,
    "question": "Our father always found time for us, (　　) his busy schedule.",
    "choices": [
      "①despite",
      "②instead",
      "③moreover",
      "④nevertheless"
    ],
    "answer": "①despite",
    "explanation": "「〜にもかかわらず」を表す前置詞は despite です（＝in spite of）。instead, moreover, nevertheless は副詞/接続詞的。"
  },
  {
    "id": 20,
    "question": "The summer session at the university begins (　　) July 20.",
    "choices": [
      "①at",
      "②of",
      "③in",
      "④on"
    ],
    "answer": "④on",
    "explanation": "特定の日付（7月20日）の前には on を用います。"
  },
  {
    "id": 21,
    "question": "(　　) most insects, bees have three pairs of legs and four wings.",
    "choices": [
      "①Alike",
      "②Like",
      "③Likely",
      "④Likewise"
    ],
    "answer": "②Like",
    "explanation": "「〜と同様に、〜のように」という類似を表す前置詞は Like です。Alike は形容詞/副詞。"
  },
  {
    "id": 22,
    "question": "It's not healthy to sleep (　　) the air conditioning on all night.",
    "choices": [
      "①with",
      "②for",
      "③while",
      "④during"
    ],
    "answer": "①with",
    "explanation": "付帯状況の with「with + 名詞 + on(副詞)」で「エアコンをつけたまま（で）」を表します。"
  },
  {
    "id": 23,
    "question": "I will go to the department store (　　) bus.",
    "choices": [
      "①with",
      "②because",
      "③by",
      "④according to"
    ],
    "answer": "③by",
    "explanation": "手段・交通手段を表す by bus「バスで」（冠詞なし）です。"
  },
  {
    "id": 24,
    "question": "(　　) her great disappointment, it rained on the day of the picnic.",
    "choices": [
      "①At",
      "②For",
      "③To",
      "④With"
    ],
    "answer": "③To",
    "explanation": "To one's + 感情を表す名詞 で「人が〜したことには」という意味になります（To her disappointment ＝ 彼女が落胆したことには）。"
  },
  {
    "id": 25,
    "question": "Ben was born in Toronto (　　) August 20, 1990.",
    "choices": [
      "①at",
      "②by",
      "③in",
      "④on"
    ],
    "answer": "④on",
    "explanation": "年月日など特定の「日」を表す前置詞は on です。"
  },
  {
    "id": 26,
    "question": "The image is so clear that it's difficult to believe this picture was taken (　　) a 50-year-old camera.",
    "choices": [
      "①by",
      "②of",
      "③from",
      "④with"
    ],
    "answer": "④with",
    "explanation": "道具や手段を表す「〜を使って、〜で」の前置詞は with です。"
  },
  {
    "id": 27,
    "question": "The housing regulations in this area are (　{0}{1}　) extreme importance.",
    "choices": [
      "①at",
      "②in",
      "③of",
      "④to"
    ],
    "answer": "③of",
    "explanation": "「of + 抽象名詞 = 形容詞」の用法で、of extreme importance ＝ extremely important（極めて重要である）となります。"
  },
  {
    "id": 28,
    "question": "I usually find out about the latest news (　　).",
    "choices": [
      "①from Internet",
      "②on the Internet",
      "③with Internet",
      "④at the Internet"
    ],
    "answer": "②on the Internet",
    "explanation": "「インターネットで」は媒介を表す on を用いて on the Internet と表現します。"
  },
  {
    "id": 29,
    "question": "The argument went on (　　) because neither side would give in.",
    "choices": [
      "①for hours",
      "②in hours",
      "③within hours",
      "④as long as hours"
    ],
    "answer": "①for hours",
    "explanation": "for hours で「何時間も（の間）」という継続を表します。"
  },
  {
    "id": 30,
    "question": "I will see you (　　) Monday morning.",
    "choices": [
      "①at",
      "②in",
      "③of",
      "④on"
    ],
    "answer": "④on",
    "explanation": "特定の日やその朝・晩には on を用います（on Monday morning）。"
  },
  {
    "id": 31,
    "question": "In winter, the sun rises ({0}　) the southeast.",
    "choices": [
      "①on",
      "②below",
      "③at",
      "④in"
    ],
    "answer": "④in",
    "explanation": "方角を表す前置詞は in を用います（in the southeast ＝ 南東に/から）。"
  },
  {
    "id": 32,
    "question": "I live (　　) Main Street, near the big movie theater.",
    "choices": [
      "①from",
      "②on",
      "③at",
      "④next"
    ],
    "answer": "②on",
    "explanation": "通り・ストリートに面している場所を表す前置詞は on です（例: on Main Street）。住所の番地まで指定する場合は at。"
  },
  {
    "id": 33,
    "question": "It is (　　) the law to smoke under the age of twenty.",
    "choices": [
      "①against",
      "②at",
      "③below",
      "④for"
    ],
    "answer": "①against",
    "explanation": "against the law で「法律に反して、違法で」という意味になります。"
  },
  {
    "id": 34,
    "question": "Mr. Sakamoto (　　) the phone right now.",
    "choices": [
      "①is at",
      "②is on",
      "③is talking with",
      "④talked for"
    ],
    "answer": "②is on",
    "explanation": "be on the phone で「電話中である」という状態を表します。"
  },
  {
    "id": 35,
    "question": "This symphony is a real masterpiece. I think it's worth (　　) over and over again.",
    "choices": [
      "①be listened to",
      "②listening to",
      "③to be listened to",
      "④to listening to"
    ],
    "answer": "②listening to",
    "explanation": "be worth -ing で「〜する価値がある」。listen to の to を忘れずに動名詞 listening to を選びます。"
  },
  {
    "id": 36,
    "question": "He was born (　　) 1986.",
    "choices": [
      "①on",
      "②by",
      "③in",
      "④at"
    ],
    "answer": "③in",
    "explanation": "年・月などの長い期間を表す前置詞は in です。"
  },
  {
    "id": 37,
    "question": "Please finish this assignment (　　) tomorrow.",
    "choices": [
      "①on",
      "②by",
      "③till",
      "④at"
    ],
    "answer": "②by",
    "explanation": "「〜までに（完了）」という期限を表すのは by です。"
  },
  {
    "id": 38,
    "question": "(　　) the popularity of hair coloring, students in Japan who dye their hair may still sometimes be frowned upon.",
    "choices": [
      "①Although",
      "②Even though",
      "③Spite of",
      "④Despite"
    ],
    "answer": "④Despite",
    "explanation": "後ろに名詞句 (the popularity...) が続いているため、譲歩を表す前置詞 Despite「〜にもかかわらず」が入ります。Although/Even thoughは接続詞。"
  },
  {
    "id": 39,
    "question": "\"Do you have something I can use to (　　)?\" \"Yes, I do. You can use my pen.\"",
    "choices": [
      "①write",
      "②write with",
      "③write on",
      "④write for"
    ],
    "answer": "②write with",
    "explanation": "「ペンを使って書く」ので write with a pen となります。関係代名詞の目的語に当たる前置詞 with が残ります。"
  },
  {
    "id": 40,
    "question": "We danced (　　) the music for hours.",
    "choices": [
      "①for",
      "②by",
      "③to",
      "④of"
    ],
    "answer": "③to",
    "explanation": "dance to the music で「音楽に合わせて踊る」という意味になります。適合・一致を表す to です。"
  },
  {
    "id": 41,
    "question": "Could I send this book (　　) to London?",
    "choices": [
      "①with the airmail",
      "②with airmail",
      "③by the airmail",
      "④by airmail"
    ],
    "answer": "④by airmail",
    "explanation": "通信・手段を表す by + 無冠詞名詞 で by airmail「航空便で」となります。"
  },
  {
    "id": 42,
    "question": "The sun was bright in the blue sky (　　) him.",
    "choices": [
      "①on",
      "②above",
      "③of",
      "④for"
    ],
    "answer": "②above",
    "explanation": "「（頭上）高くに、〜の上方に」を表す位置の前置詞は above です。"
  },
  {
    "id": 43,
    "question": "They went fishing (　　) the river.",
    "choices": [
      "①over",
      "②under",
      "③in",
      "④to"
    ],
    "answer": "③in",
    "explanation": "川で釣りをする場合、水域の中や川のエリアを指して in the river と表現します。"
  },
  {
    "id": 44,
    "question": "We will make a decision concerning your job application (　{0}　) one week.",
    "choices": [
      "①for",
      "②within",
      "③by",
      "④about"
    ],
    "answer": "②within",
    "explanation": "「1週間以内に」という期間の枠内を表す前置詞は within です。"
  },
  {
    "id": 45,
    "question": "A: Where's Jane? B: (　　) Canada, with her family.",
    "choices": [
      "①In",
      "②At",
      "③On",
      "④From"
    ],
    "answer": "①In",
    "explanation": "国名など広い場所を表す前置詞は In です。"
  },
  {
    "id": 46,
    "question": "(　　) many other students, John always falls asleep during the class.",
    "choices": [
      "①Different to",
      "②Unlike",
      "③In spite",
      "④Nevertheless"
    ],
    "answer": "②Unlike",
    "explanation": "「〜と違って、〜とは異なり」を表す前置詞は Unlike です。"
  },
  {
    "id": 47,
    "question": "His speech (　　) global warming was interesting.",
    "choices": [
      "①of",
      "②on",
      "③in",
      "④at"
    ],
    "answer": "②on",
    "explanation": "「〜に関する（専門的・テーマ）」を表す前置詞は on です（a speech on ... ＝ 〜に関する演説）。"
  },
  {
    "id": 48,
    "question": "Average temperatures may increase ({0}　) 2.5 degrees over the next two decades.",
    "choices": [
      "①by",
      "②in",
      "③per",
      "④toward"
    ],
    "answer": "①by",
    "explanation": "差額・増減の度合い「〜だけ（変化した）」を表す前置詞は by です（increase by 2.5 degrees ＝ 2.5度上昇する）。"
  },
  {
    "id": 49,
    "question": "It is worth (　　) that story.",
    "choices": [
      "①recall",
      "②to recall",
      "③recalled",
      "④recalling"
    ],
    "answer": "④recalling",
    "explanation": "be worth -ing で「〜する価値がある」。動名詞 recalling をとります。"
  },
  {
    "id": 50,
    "question": "A: Mom, when is Aunt Emily coming? B: (　　) about two hours, Billy. Go and get your things done before she comes.",
    "choices": [
      "①By",
      "②For",
      "③In",
      "④Over"
    ],
    "answer": "③In",
    "explanation": "「今から〜時間後に、〜経ったら」という未来の経過時間を表す前置詞は In です。"
  },
  {
    "id": 51,
    "question": "The man asked everyone except me. (ほぼ同義)",
    "choices": [
      "①by",
      "②with",
      "③near",
      "④but"
    ],
    "answer": "④but",
    "explanation": "except は「〜を除いて」を意味し、前置詞の but（〜以外に）とほぼ同義です。"
  },
  {
    "id": 52,
    "question": "(a) He goes to the gym on weekdays, and plays football on Saturdays. (b) (　　) going to the gym on weekdays, he plays football on Saturdays.",
    "choices": [
      "①besides",
      "②considering",
      "③taken",
      "④without"
    ],
    "answer": "①besides",
    "explanation": "besides -ing で「〜することに加えて（〜もする）」となり、and による追加の並列関係と同義になります。"
  },
  {
    "id": 53,
    "question": "Much to our surprise, the plan was carried out (　　) any major difficulty.",
    "choices": [
      "①without",
      "②under",
      "③with",
      "④in"
    ],
    "answer": "①without",
    "explanation": "without any difficultyで「何ら困難もなく、スムーズに」という意味になります。"
  },
  {
    "id": 54,
    "question": "The manager is (　　) the impression that the project has already been completed.",
    "choices": [
      "①under",
      "②in",
      "③on",
      "④with"
    ],
    "answer": "①under",
    "explanation": "be under the impression that... で「〜という印象（思い込み）を持っている」という重要表現です。"
  },
  {
    "id": 55,
    "question": "The new safety regulations will come into effect (　　) April 1st.",
    "choices": [
      "①as of",
      "②as to",
      "③as for",
      "④as with"
    ],
    "answer": "①as of",
    "explanation": "as of + 日付 で「〜日付で、〜現在で」という意味を表します。"
  },
  {
    "id": 56,
    "question": "He managed to finish the marathon in less than three hours (　　) all odds.",
    "choices": [
      "①against",
      "②for",
      "③with",
      "④over"
    ],
    "answer": "①against",
    "explanation": "against all odds（すべての困難を乗り越えて、万難を排して）という成句表現です。"
  },
  {
    "id": 57,
    "question": "I am writing this email (　　) of the entire marketing department.",
    "choices": [
      "①on behalf",
      "②in terms",
      "③by means",
      "④with respect"
    ],
    "answer": "①on behalf",
    "explanation": "on behalf of ... で「〜を代表して、〜に代わって」という意味の前置詞群です。"
  },
  {
    "id": 58,
    "question": "The suspects were arrested (　　) connection with the bank robbery.",
    "choices": [
      "①in",
      "②at",
      "③on",
      "④by"
    ],
    "answer": "①in",
    "explanation": "in connection with ... で「〜に関連して、〜の容疑で」という意味になります。"
  },
  {
    "id": 59,
    "question": "You must refrain (　　) taking photos inside the museum.",
    "choices": [
      "①from",
      "②to",
      "③of",
      "④with"
    ],
    "answer": "①from",
    "explanation": "refrain from -ing で「〜するのを控える、遠慮する」という自動詞+前置詞のパターンです。"
  },
  {
    "id": 60,
    "question": "The price of oil has risen by 10% (　　) comparison with last month.",
    "choices": [
      "①in",
      "②by",
      "③to",
      "④at"
    ],
    "answer": "①in",
    "explanation": "in comparison with ... で「〜と比較して」という意味になります。"
  },
  {
    "id": 61,
    "question": "She is second to (　　) when it comes to solving complex mathematical problems.",
    "choices": [
      "①none",
      "②no",
      "③nothing",
      "④nobody"
    ],
    "answer": "①none",
    "explanation": "second to none で「誰にも負けない、右に出る者はいない」という慣用句です。"
  },
  {
    "id": 62,
    "question": "The negotiations broke down because both sides were (　　) odds with each other over the price.",
    "choices": [
      "①at",
      "②in",
      "③on",
      "④with"
    ],
    "answer": "①at",
    "explanation": "be at odds with ... で「〜と不和である、対立している」という意味の慣用表現です。"
  },
  {
    "id": 63,
    "question": "Contrary (　　) popular belief, tomatoes are actually fruits, not vegetables.",
    "choices": [
      "①to",
      "②with",
      "③from",
      "④for"
    ],
    "answer": "①to",
    "explanation": "contrary to ... で「〜に反して、〜とは逆に」を表します。"
  },
  {
    "id": 64,
    "question": "The research team conducted the experiment (　　) the assumption that the temperature would remain constant.",
    "choices": [
      "①on",
      "②under",
      "③with",
      "④in"
    ],
    "answer": "①on",
    "explanation": "on the assumption that... で「〜という仮定（前提）のもとで」という意味になります。"
  },
  {
    "id": 65,
    "question": "His dedicated efforts eventually resulted (　　) the success of the mission.",
    "choices": [
      "①in",
      "②from",
      "③to",
      "④with"
    ],
    "answer": "①in",
    "explanation": "result in + 結果 で「結果として〜になる・〜をもたらす」となります（result from + 原因）。"
  },
  {
    "id": 66,
    "question": "The factory was closed down (　　) account of severe financial difficulties.",
    "choices": [
      "①on",
      "②in",
      "③by",
      "④for"
    ],
    "answer": "①on",
    "explanation": "on account of ... で「〜のために、〜という理由で（＝because of）」を表します。"
  },
  {
    "id": 67,
    "question": "In order to stay healthy, you should deprive yourself (　　) nothing nutritious.",
    "choices": [
      "①of",
      "②from",
      "③with",
      "④for"
    ],
    "answer": "①of",
    "explanation": "deprive A of B で「AからBを奪う、与えない」という意味です。"
  },
  {
    "id": 68,
    "question": "He was caught red-handed and charged (　　) theft.",
    "choices": [
      "①with",
      "②for",
      "③of",
      "④by"
    ],
    "answer": "①with",
    "explanation": "charge A with B で「AをB（罪名など）で告訴する・告発する」となります。"
  },
  {
    "id": 69,
    "question": "The old traditional building was in danger of falling (　　) ruin.",
    "choices": [
      "①into",
      "②to",
      "③in",
      "④under"
    ],
    "answer": "①into",
    "explanation": "fall into ruin で「荒廃する、台無しになる」という状態の変化を表す into です。"
  },
  {
    "id": 70,
    "question": "I’m not familiar with the detailed rules, but (　　) general, players must remain within the boundary.",
    "choices": [
      "①in",
      "②by",
      "③on",
      "④at"
    ],
    "answer": "①in",
    "explanation": "in general で「一般的に（＝generally）」という副詞句を作ります。"
  },
  {
    "id": 71,
    "question": "She persuaded her parents (　　) letting her study abroad in London.",
    "choices": [
      "①into",
      "②to",
      "③for",
      "④with"
    ],
    "answer": "①into",
    "explanation": "persuade A into -ing で「Aを説得して〜させる」という結果を表す into です。"
  },
  {
    "id": 72,
    "question": "The company provided all the employees (　　) brand-new laptops.",
    "choices": [
      "①with",
      "②to",
      "③for",
      "④of"
    ],
    "answer": "①with",
    "explanation": "provide A with B で「A（人）にB（物）を供給する・与える」となります。"
  },
  {
    "id": 73,
    "question": "What you said just now is completely beside the (　　).",
    "choices": [
      "①point",
      "②fact",
      "③truth",
      "④target"
    ],
    "answer": "①point",
    "explanation": "beside the point で「要点を外れて、無関係で」という意味の重要成句です。"
  },
  {
    "id": 74,
    "question": "The scientist attributed his groundbreaking discovery (　　) pure luck.",
    "choices": [
      "①to",
      "②from",
      "③with",
      "④by"
    ],
    "answer": "①to",
    "explanation": "attribute A to B で「AをBのせいにする・帰する」を表します。"
  },
  {
    "id": 75,
    "question": "You should take advantage (　　) this rare opportunity to improve your speaking skills.",
    "choices": [
      "①of",
      "②on",
      "③with",
      "④in"
    ],
    "answer": "①of",
    "explanation": "take advantage of ... で「〜を利用する、に乗じる」という意味の熟語です。"
  },
  {
    "id": 76,
    "question": "The prisoner was released from jail (　　) parole.",
    "choices": [
      "①on",
      "②in",
      "③under",
      "④with"
    ],
    "answer": "①on",
    "explanation": "on parole で「仮釈放中で（の）」という意味の表現です。"
  },
  {
    "id": 77,
    "question": "The output of the solar panel varies (　　) direct proportion to the intensity of sunlight.",
    "choices": [
      "①in",
      "②by",
      "③with",
      "④at"
    ],
    "answer": "①in",
    "explanation": "in proportion to ... で「〜に比例して」という意味になります。"
  },
  {
    "id": 78,
    "question": "A good leader should be capable (　　) making quick decisions in a crisis.",
    "choices": [
      "①of",
      "②to",
      "③in",
      "④for"
    ],
    "answer": "①of",
    "explanation": "be capable of -ing で「〜する能力がある、〜できる」となります。"
  },
  {
    "id": 79,
    "question": "He was completely absorbed (　　) reading the detective novel.",
    "choices": [
      "①in",
      "②with",
      "③at",
      "④on"
    ],
    "answer": "①in",
    "explanation": "be absorbed in ... で「〜に熱中している、没頭している」を表します。"
  },
  {
    "id": 80,
    "question": "This new electronic gadget leaves nothing to be (　　).",
    "choices": [
      "①desired",
      "②desire",
      "③desiring",
      "④desires"
    ],
    "answer": "①desired",
    "explanation": "leave nothing to be desired で「申し分ない、完全に完璧である」という定番フレーズです。"
  },
  {
    "id": 81,
    "question": "The suspect was exempted (　　) paying the penalty due to a lack of evidence.",
    "choices": [
      "①from",
      "②of",
      "③to",
      "④with"
    ],
    "answer": "①from",
    "explanation": "exempt A from B で「AをB（義務や損害など）から免除する」という意味になります。"
  },
  {
    "id": 82,
    "question": "We have to substitute this broken component (　　) a new one immediately.",
    "choices": [
      "①with",
      "②for",
      "③to",
      "④by"
    ],
    "answer": "①with",
    "explanation": "substitute A with B（または substitute B for A）で「AをBで代用する・置き換える」となります。選択肢①withが適合。"
  },
  {
    "id": 83,
    "question": "She felt at (　　) during the interview because the interviewer was very friendly.",
    "choices": [
      "①ease",
      "②rest",
      "③peace",
      "④home"
    ],
    "answer": "①ease",
    "explanation": "at ease で「くつろいで、安心感を持って」という意味になります。"
  },
  {
    "id": 84,
    "question": "The newly released software is fully compatible (　　) the latest operating system.",
    "choices": [
      "①with",
      "②to",
      "③for",
      "④in"
    ],
    "answer": "①with",
    "explanation": "be compatible with ... で「〜と互換性がある、〜と適合する」という意味です。"
  },
  {
    "id": 85,
    "question": "He did not hesitate to exchange his old car (　　) a hybrid model.",
    "choices": [
      "①for",
      "②with",
      "③to",
      "④by"
    ],
    "answer": "①for",
    "explanation": "exchange A for B で「AをBと交換する」を表します。"
  },
  {
    "id": 86,
    "question": "The patient’s condition has been steadily improving (　　) degrees.",
    "choices": [
      "①by",
      "②in",
      "③to",
      "④with"
    ],
    "answer": "①by",
    "explanation": "by degrees で「徐々に、次第に（＝gradually）」という重要熟語です。"
  },
  {
    "id": 87,
    "question": "I can’t distinguish this fake masterpiece (　　) the original painting.",
    "choices": [
      "①from",
      "②with",
      "③to",
      "④by"
    ],
    "answer": "①from",
    "explanation": "distinguish A from B で「AとBを区別する、識別する」となります。"
  },
  {
    "id": 88,
    "question": "They reached an agreement (　　) regard to the restructuring plan.",
    "choices": [
      "①with",
      "②in",
      "③on",
      "④at"
    ],
    "answer": "①with",
    "explanation": "with regard to ...（または in regard to ...）で「〜に関して」という意味の前置詞群です。選択肢①withが適合。"
  },
  {
    "id": 89,
    "question": "The student was severely scolded (　　) breaking the laboratory equipment.",
    "choices": [
      "①for",
      "②with",
      "③of",
      "④by"
    ],
    "answer": "①for",
    "explanation": "scold A for B で「Bの理由でAを叱る」という理由の for です。"
  },
  {
    "id": 90,
    "question": "He made a crucial mistake (　　) ignorance of the company's compliance policy.",
    "choices": [
      "①out of",
      "②in of",
      "③from of",
      "④by of"
    ],
    "answer": "①out of",
    "explanation": "out of ignorance / out of curiosity など「（動機・感情）〜から、〜のために」を表す out of です。"
  },
  {
    "id": 91,
    "question": "The two companies competed (　　) each other for the dominant position in the market.",
    "choices": [
      "①with",
      "②at",
      "③to",
      "④on"
    ],
    "answer": "①with",
    "explanation": "compete with [against] ... で「〜と競争する、競う」となります。"
  },
  {
    "id": 92,
    "question": "The police warned the public (　　) opening suspicious email attachments.",
    "choices": [
      "①against",
      "②from",
      "③to",
      "④with"
    ],
    "answer": "①against",
    "explanation": "warn A against -ing で「Aに〜しないよう警告する」となります。"
  },
  {
    "id": 93,
    "question": "The village is completely cut (　　) from the outside world during the heavy winter snowfalls.",
    "choices": [
      "①off",
      "②down",
      "③out",
      "④away"
    ],
    "answer": "①off",
    "explanation": "cut off ... で「〜を遮断する、孤立させる」という意味になります。"
  },
  {
    "id": 94,
    "question": "He paid the bill in cash (　　) advance to receive a discount.",
    "choices": [
      "①in",
      "②at",
      "③by",
      "④on"
    ],
    "answer": "①in",
    "explanation": "in advance で「あらかじめ、前もって」という時間の前置詞句です。"
  },
  {
    "id": 95,
    "question": "Her success in the audition was (　　) a large extent due to her relentless practice.",
    "choices": [
      "①to",
      "②in",
      "③at",
      "④by"
    ],
    "answer": "①to",
    "explanation": "to a large extent で「大いに、かなりの程度まで」という度合いを表す to です。"
  },
  {
    "id": 96,
    "question": "The committee consists (　　) ten highly experienced legal specialists.",
    "choices": [
      "①of",
      "②in",
      "③with",
      "④from"
    ],
    "answer": "①of",
    "explanation": "consist of ... で「〜から構成されている（＝be composed of）」を表します。"
  },
  {
    "id": 97,
    "question": "The host welcomed the international guests (　　) open arms.",
    "choices": [
      "①with",
      "②by",
      "③in",
      "④on"
    ],
    "answer": "①with",
    "explanation": "with open arms で「（両手を広げて）温かく、心から」という意味のイディオムです。"
  },
  {
    "id": 98,
    "question": "He was disqualified from the competition (　　) virtue of failing the drug test.",
    "choices": [
      "①by",
      "②in",
      "③on",
      "④with"
    ],
    "answer": "①by",
    "explanation": "by virtue of ... で「〜のおかげで、〜によって」という意味の硬い表現です。"
  },
  {
    "id": 99,
    "question": "The old tradition has been handed (　　) from generation to generation.",
    "choices": [
      "①down",
      "②on",
      "③over",
      "④out"
    ],
    "answer": "①down",
    "explanation": "hand down ... で「（後世・次世代へ）〜を伝える、継承する」となります。"
  },
  {
    "id": 100,
    "question": "She was (　　) the verge of collapsing when the rescue team finally arrived.",
    "choices": [
      "①on",
      "②at",
      "③in",
      "④by"
    ],
    "answer": "①on",
    "explanation": "on the verge of -ing で「〜する寸前で、〜の間際で」という重要熟語です。"
  }
];