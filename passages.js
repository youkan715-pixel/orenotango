// 長文データ（リスニング・速読用）。1本 = 100〜130語、設問3問。
// page: どのページの語か（words / idioms / nouns）
// group: そのページのグループ名（イディオムは先頭の動詞）
// words: [本文に出てくる形, カードのID] … 答え合わせのあと色を付け、タップで意味を出す
// qs: 設問。o = 選択肢4つ、a = 正解の番号（0〜3）、why = 解説
const PASSAGES = [
{
  id: 'w-0001', page: 'words', group: '1〜200', kind: '社内アナウンス',
  text: "Attention, all staff. As you know, we have a serious backlog of customer orders this month. To deal with it, management has decided to overhaul our entire shipping system. Starting Monday, new scanners will be installed in the warehouse, and the old conveyor belts, which are showing heavy wear and tear, will be replaced. During the work, some areas of the premises will be closed, so please check the notice board each morning. We know the past few weeks have been stressful, and we cannot sustain this pace forever. For that reason, the company will hold a barbecue on Friday evening so that everyone can unwind. Thank you for your hard work, and please see your supervisor if you have any questions.",
  ja: "従業員の皆さんにお知らせします。ご存じの通り、今月はお客様からの注文が大量にたまっています。これに対処するため、経営陣は出荷システム全体を全面的に見直すことを決めました。月曜日から倉庫に新しいスキャナーが設置され、摩耗がひどくなっている古いコンベヤーベルトは交換されます。作業中は敷地内の一部が閉鎖されますので、毎朝掲示板を確認してください。この数週間が大変だったことは承知しており、このペースをいつまでも続けることはできません。そこで、皆さんにくつろいでもらえるよう、金曜日の夕方に会社でバーベキューを開きます。日頃の努力に感謝します。質問がある場合は上司に聞いてください。",
  words: [["backlog", "words:backlog"], ["overhaul", "words:overhaul"], ["wear and tear", "words:wear and tear"], ["premises", "words:premises"], ["sustain", "words:sustain"], ["unwind", "words:unwind"]],
  qs: [
    {q: "What problem does the speaker mention?", o: ["A shortage of warehouse staff", "A drop in monthly sales", "A large number of unfilled orders", "A late delivery of new scanners"], a: 2, why: "冒頭の a serious backlog of customer orders（注文が大量にたまっている）が問題。backlog を unfilled orders と言い換えている。"},
    {q: "What will happen on Monday?", o: ["New equipment will be installed.", "A company barbecue will be held.", "The warehouse will be closed all day.", "A new supervisor will start work."], a: 0, why: "Starting Monday, new scanners will be installed とある。scanners を equipment と言い換えている。バーベキューは金曜日。"},
    {q: "What are the listeners asked to do each morning?", o: ["Report to their supervisor", "Clean the conveyor belts", "Sign in at the front desk", "Look at the notice board"], a: 3, why: "please check the notice board each morning とある。check を look at と言い換えている。"}
  ]
},
{
  id: 'w-0002', page: 'words', group: '201〜400', kind: 'ニュース',
  text: "Good evening. This is the business report. After several volatile months, the local economy is showing signs of a resurgence. According to preliminary figures released today, freight traffic through the city's port rose by twelve percent last quarter. Officials say the new rail link has removed a major bottleneck and will facilitate trade with neighboring regions. Small businesses near the port are beginning to prosper, and ridership on the new line is higher than expected. However, the project has not been welcomed by everyone. A plan to raise parking fees downtown has caused a backlash from local shop owners. The city council will discuss the issue at a public meeting next Tuesday. We will have more on that story after the weather.",
  ja: "こんばんは。ビジネスニュースの時間です。不安定な数か月が続いたあと、地域経済に回復の兆しが見えています。本日発表された暫定の数字によると、市の港を通る貨物の輸送量は前の四半期に12パーセント増えました。当局によれば、新しい鉄道路線が大きな障害を取り除き、近隣地域との取引を促進するとのことです。港の近くの小さな商店は繁盛し始めており、新路線の利用者数も予想を上回っています。しかし、この事業を誰もが歓迎しているわけではありません。中心部の駐車料金を引き上げる計画が、地元の商店主から反発を招いています。市議会は来週火曜日の公開の会合でこの問題を話し合います。この件については、天気予報のあとに詳しくお伝えします。",
  words: [["volatile", "words:volatile"], ["resurgence", "words:resurgence"], ["preliminary", "words:preliminary"], ["freight", "words:freight"], ["bottleneck", "words:bottleneck"], ["facilitate", "words:facilitate"], ["prosper", "words:prosper"], ["ridership", "words:ridership"], ["backlash", "words:backlash"]],
  qs: [
    {q: "What is the report mainly about?", o: ["A delay in a construction project", "Signs of recovery in the local economy", "A change in the weather forecast", "The closing of the city's port"], a: 1, why: "the local economy is showing signs of a resurgence が主題。resurgence（復活）を recovery と言い換えている。"},
    {q: "According to the speaker, what has the new rail link done?", o: ["It has raised parking fees.", "It has reduced the number of passengers.", "It has made trade easier.", "It has replaced the port."], a: 2, why: "has removed a major bottleneck and will facilitate trade とある。facilitate（容易にする）を made easier と言い換えている。"},
    {q: "What will the listeners most likely hear next?", o: ["A weather report", "A traffic update", "An interview with a shop owner", "A sports report"], a: 0, why: "最後の We will have more on that story after the weather から、次は天気予報だと分かる。"}
  ]
},
{
  id: 'i-0001', page: 'idioms', group: 'take', kind: '留守番電話',
  text: "Hi, Maria. This is David from the sales department. I'm calling because I'm taking next week off, and I need someone to take over the Henderson account while I'm away. I know you have already taken on a lot of extra work this month, so I don't want this to take up too much of your time. There is only one meeting, on Wednesday at ten. Please take down the client's requests carefully, because we have to take their budget into account before we send a new price quote. I've left all the files on your desk. If anything is unclear, call my mobile before Friday. Thanks so much, and I'll see you when I get back.",
  ja: "もしもし、マリアさん。営業部のデイビッドです。来週休みを取るので、不在の間ヘンダーソン社の担当を誰かに引き継いでもらう必要があり、お電話しました。今月すでにたくさんの追加の仕事を引き受けてもらっているのは分かっているので、あまり時間を取らせたくはありません。会議は水曜日の10時に1回あるだけです。新しい見積もりを送る前に先方の予算を考慮に入れなければならないので、お客様の要望を注意深く書き留めてください。資料はすべてあなたの机に置いてあります。不明な点があれば、金曜日までに私の携帯に電話してください。本当にありがとう。戻ったらまた会いましょう。",
  words: [["taking next week off", "idioms:2:take off"], ["take over", "idioms:2:take over"], ["taken on", "idioms:2:take on"], ["take up", "idioms:2:take up"], ["take down", "idioms:2:take down"], ["take their budget into account", "idioms:5:take A into B"]],
  qs: [
    {q: "Why is the speaker calling?", o: ["To cancel a meeting with a client", "To ask for a new price quote", "To ask a coworker to handle an account", "To request some time off"], a: 2, why: "I need someone to take over the Henderson account（担当を引き継いでほしい）が用件。take over を handle と言い換えている。休みを「願い出て」いるわけではない。"},
    {q: "What is scheduled for Wednesday?", o: ["A sales training session", "A meeting with a client", "A department lunch", "A phone call with David"], a: 1, why: "There is only one meeting, on Wednesday at ten とあり、続けて the client's requests を書き留めるよう頼んでいるので、顧客との会議。"},
    {q: "What does the speaker say he has done?", o: ["Sent an email to the client", "Updated the price list", "Called Maria's mobile phone", "Left some files on Maria's desk"], a: 3, why: "I've left all the files on your desk とある。"}
  ]
},
{
  id: 'i-0002', page: 'idioms', group: 'come', kind: '会議での発言',
  text: "Thanks for coming, everyone. Let me start with the new product. The design is coming along well, and it should come out in early spring. However, a problem has come up. Last week, our engineers came up against a safety regulation that we had not expected. While reading the report, I also came across a note saying the testing may cost more than we planned. In the end, it all comes down to time and money. So, here is what I'd like you to do. Please work in small groups this afternoon and come up with at least two ways to reduce the cost. We will meet again at four o'clock to share your ideas. Any questions before we begin?",
  ja: "皆さん、お集まりいただきありがとうございます。まず新製品の話から始めます。設計は順調に進んでおり、春の早い時期には発売できるはずです。ただ、問題が1つ持ち上がりました。先週、技術者たちが、想定していなかった安全規制にぶつかりました。報告書を読んでいて、試験の費用が計画より高くなるかもしれないという注記も偶然見つけました。結局のところ、すべては時間とお金の問題に行き着きます。そこで、皆さんにお願いがあります。今日の午後は小さなグループに分かれて、費用を減らす方法を少なくとも2つ考え出してください。4時にもう一度集まって、案を共有します。始める前に質問はありますか。",
  words: [["coming along", "idioms:1:come along"], ["come out", "idioms:1:come out"], ["came up against", "idioms:4:come up against"], ["came across", "idioms:3:come across"], ["comes down to", "idioms:4:come down to"], ["come up with", "idioms:4:come up with"], ["has come up", "idioms:1:come up"]],
  qs: [
    {q: "When is the new product expected to be released?", o: ["In early spring", "Next week", "At four o'clock", "At the end of the year"], a: 0, why: "it should come out in early spring とある。come out（世に出る）を be released と言い換えている。"},
    {q: "What problem does the speaker mention?", o: ["The design is behind schedule.", "An engineer has left the company.", "The product failed a safety test.", "A regulation was not expected."], a: 3, why: "came up against a safety regulation that we had not expected（想定外の安全規制にぶつかった）とある。設計は順調（coming along well）で、試験に落ちたとは言っていない。"},
    {q: "What are the listeners asked to do this afternoon?", o: ["Read a report about testing", "Think of ways to cut costs", "Meet with the engineers", "Prepare a new design"], a: 1, why: "come up with at least two ways to reduce the cost とある。come up with を think of、reduce を cut と言い換えている。"}
  ]
},
{
  id: 'n-0001', page: 'nouns', group: '人事・採用', kind: '説明会の案内',
  text: "Welcome to the Riverside job fair. My name is Karen, and I work in human resources at Bright Foods. We currently have five job openings in our sales and delivery teams. If you are interested, please pick up an application form at our booth and return it today with your resume. A cover letter is not required. Our hiring manager will be here until three o'clock, and he can hold a short job interview on the spot. Successful applicants will join a two-week training program next month. We also offer a generous benefits package, including paid vacation from your first year. Our booth is number twelve, next to the main entrance. We look forward to meeting you.",
  ja: "リバーサイド就職説明会へようこそ。私はカレンと申しまして、ブライト・フーズの人事部で働いています。当社では現在、営業チームと配送チームで5件の求人があります。興味のある方は、当社のブースで応募用紙を受け取り、本日中に履歴書と一緒に提出してください。添え状は必要ありません。採用担当責任者が3時までこちらにおり、その場で短い面接を行うこともできます。採用された方は、来月2週間の研修プログラムに参加していただきます。また、1年目からの有給休暇を含む、充実した福利厚生もご用意しています。当社のブースは12番で、正面入口の隣です。皆さまにお会いできるのを楽しみにしています。",
  words: [["job fair", "nouns:job fair"], ["human resources", "nouns:human resources"], ["job openings", "nouns:job opening"], ["application form", "nouns:application form"], ["cover letter", "nouns:cover letter"], ["hiring manager", "nouns:hiring manager"], ["job interview", "nouns:job interview"], ["training program", "nouns:training program"], ["benefits package", "nouns:benefits package"], ["paid vacation", "nouns:paid vacation"]],
  qs: [
    {q: "Where is the talk most likely taking place?", o: ["At a company training session", "At a food factory", "At a job fair", "At a sales meeting"], a: 2, why: "冒頭の Welcome to the Riverside job fair から、就職説明会の会場だと分かる。"},
    {q: "According to the speaker, what is NOT required?", o: ["A resume", "A cover letter", "An application form", "An interview"], a: 1, why: "A cover letter is not required とある。応募用紙と履歴書は提出するよう求めている。"},
    {q: "What will successful applicants do next month?", o: ["Take part in a training program", "Take a paid vacation", "Visit booth number twelve", "Meet the hiring manager"], a: 0, why: "Successful applicants will join a two-week training program next month とある。join を take part in と言い換えている。"}
  ]
},
{
  id: 'n-0002', page: 'nouns', group: '旅行・交通', kind: '空港アナウンス',
  text: "Attention, passengers on Sky Air flight 204 to Chicago. Because of a mechanical check, the departure time has been changed to four fifteen. In addition, the boarding gate has been moved from gate nine to gate twenty-two. Please have your boarding pass and passport ready. As this is a full flight, each passenger may bring only one piece of carry-on luggage. If you have a connecting flight in Chicago, please speak to a flight attendant after boarding, and we will do our best to help you. Passengers who would like to wait in the lounge can take the free shuttle bus from the main hall. We apologize for the delay and thank you for your patience.",
  ja: "スカイエア204便シカゴ行きをご利用のお客様にご案内します。機体の点検のため、出発時刻が4時15分に変更になりました。あわせて、搭乗口が9番ゲートから22番ゲートに変更されています。搭乗券とパスポートをご用意ください。本便は満席のため、機内持ち込み手荷物はお一人様1個までとさせていただきます。シカゴで乗り継ぎ便をご利用のお客様は、ご搭乗後に客室乗務員にお声がけください。できる限りお手伝いいたします。ラウンジでお待ちになりたいお客様は、メインホールから無料の送迎バスをご利用いただけます。遅れが生じましたことをお詫びするとともに、ご理解に感謝いたします。",
  words: [["departure time", "nouns:departure time"], ["boarding gate", "nouns:boarding gate"], ["boarding pass", "nouns:boarding pass"], ["carry-on luggage", "nouns:carry-on luggage"], ["connecting flight", "nouns:connecting flight"], ["flight attendant", "nouns:flight attendant"], ["shuttle bus", "nouns:shuttle bus"]],
  qs: [
    {q: "What has caused the delay?", o: ["Bad weather", "A late connecting flight", "A crowded lounge", "A mechanical check"], a: 3, why: "Because of a mechanical check, the departure time has been changed とある。"},
    {q: "What are the passengers reminded about?", o: ["A limit on carry-on luggage", "A change in ticket prices", "A new passport rule", "A meal service on board"], a: 0, why: "each passenger may bring only one piece of carry-on luggage（持ち込みは1個まで）と伝えている。"},
    {q: "Who should speak to a flight attendant?", o: ["Passengers who want to use the lounge", "Passengers with a connecting flight", "Passengers without a boarding pass", "Passengers traveling with children"], a: 1, why: "If you have a connecting flight in Chicago, please speak to a flight attendant とある。"}
  ]
}
];
