// コロケーションのデータ。_tools/colls.js が書き出すので、このファイルは直接書き換えない。元は _tools/colls/*.txt。
const COLLS = `
# 会議・話し合い
schedule a meeting|会議の予定を入れる|v
call a meeting|会議を招集する|v
attend a meeting|会議に出席する|v
postpone a meeting|会議を延期する|v
set an agenda|議題を決める|v
book a conference room|会議室を予約する|v
confirm attendance|出席を確認する|v
prior engagement|先約|a
on short notice|急な知らせで、直前に|r
tentatively scheduled|仮に予定されている|d
raise an issue|問題を提起する|v
address a concern|懸念に対処する|v
express an opinion|意見を述べる|v
make a suggestion|提案をする|v
exchange ideas|意見を交換する|v
take notes|メモを取る|v
elaborate on a point|要点を詳しく述べる|p
strongly disagree|強く反対する|d
heated discussion|白熱した議論|a
in detail|詳しく|r
make a decision|決定を下す|v
reach a consensus|意見の一致に達する|v
come to a conclusion|結論に達する|p
take a vote|採決を取る|v
approve a proposal|提案を承認する|v
weigh the options|選択肢を比べて検討する|v
unanimous decision|全員一致の決定|a
final approval|最終承認|a
in favor of|〜に賛成して|r
unanimously approved|全員一致で承認された|d
give a presentation|発表をする|v
deliver a speech|演説をする|v
distribute handouts|資料を配る|v
take questions|質問を受ける|v
introduce a speaker|講演者を紹介する|v
draw attention to|〜に注意を向けさせる|p
brief overview|簡単な概要|a
opening remarks|開会のあいさつ|a
visual aids|視覚資料|a
on behalf of|〜を代表して|r
take minutes|議事録を取る|v
circulate the minutes|議事録を回覧する|v
assign a task|仕事を割り当てる|v
set a deadline|締め切りを決める|v
take action|行動を起こす|v
adjourn a meeting|会議を終える、休会する|v
report on progress|進み具合を報告する|p
unresolved issue|未解決の問題|a
briefly summarize|手短にまとめる|d
by the end of the day|今日中に|r
# 契約・交渉
enter into negotiations|交渉に入る|p
make an offer|申し出をする、金額を提示する|v
accept an offer|申し出を受け入れる|v
decline an offer|申し出を断る|v
make a counteroffer|対案を出す|v
make a concession|譲歩する|v
reach an agreement|合意に達する|v
strike a deal|取引をまとめる|v
favorable terms|有利な条件|a
mutually beneficial|双方に利益のある|d
draw up a contract|契約書を作成する|v
sign a contract|契約書に署名する|v
review a contract|契約書を見直す|v
renew a contract|契約を更新する|v
terminate a contract|契約を打ち切る|v
breach a contract|契約に違反する|v
binding agreement|拘束力のある合意|a
legal advice|法的な助言|a
written consent|書面による同意|a
under the terms of|〜の条件のもとで|r
meet the requirements|要件を満たす|v
honor a commitment|約束を守る|v
fulfill an obligation|義務を果たす|v
impose a penalty|罰則を科す|v
comply with regulations|規則に従う|p
adhere to the terms|条件を厳守する|p
confidential information|機密情報|a
disclose information|情報を開示する|v
in accordance with|〜に従って|r
strictly prohibited|固く禁じられている|d
form a partnership|提携を結ぶ|v
acquire a company|会社を買収する|v
announce a merger|合併を発表する|v
merge with a rival|競合相手と合併する|p
expand operations|事業を拡大する|v
build a relationship|関係を築く|v
close ties|緊密な関係|a
strategic alliance|戦略的な提携|a
majority stake|過半数の株式|a
in the long run|長い目で見れば|r
submit a bid|入札する|v
bid on a project|事業に入札する|p
win a contract|契約を勝ち取る|v
award a contract|契約を発注する、与える|v
lowest bidder|最も安い金額を出した入札者|a
settle a dispute|紛争を解決する|v
file a lawsuit|訴訟を起こす|v
take legal action|法的措置を取る|v
seek compensation|補償を求める|v
out of court|法廷の外で、示談で|r
# 注文・配送
place an order|注文する|v
process an order|注文を処理する|v
cancel an order|注文を取り消す|v
confirm an order|注文を確認する|v
complete a form|用紙に記入する|v
request a quote|見積もりを依頼する|v
large order|大量の注文|a
in bulk|大量に、まとめて|r
upon request|要望があれば|r
currently unavailable|現在は手に入らない|d
in stock|在庫があって|r
out of stock|在庫切れで|r
check availability|在庫や空きを確認する|v
restock the shelves|棚に商品を補充する|v
run low on supplies|備品が残り少なくなる|p
take inventory|在庫を調べる、棚卸しをする|v
limited supply|限られた供給量|a
sufficient stock|十分な在庫|a
readily available|すぐ手に入る|d
on back order|入荷待ちで|r
ship an order|注文品を発送する|v
track a shipment|荷物を追跡する|v
deliver a package|荷物を配達する|v
expedite a shipment|発送を早める|v
sign for a package|荷物の受け取りに署名する|p
next-day delivery|翌日配達|a
free shipping|送料無料|a
fragile items|壊れやすい品物|a
in transit|輸送中で|r
at no extra charge|追加料金なしで|r
receive a shipment|荷物を受け取る|v
return an item|商品を返品する|v
exchange an item|商品を交換する|v
issue a refund|返金する|v
inspect the contents|中身を点検する|v
damaged goods|破損した商品|a
defective product|欠陥品|a
original packaging|元の包装|a
full refund|全額返金|a
in good condition|よい状態で|r
load a truck|トラックに荷を積む|v
unload cargo|貨物を降ろす|v
stack boxes|箱を積み重ねる|v
meet demand|需要を満たす|v
switch suppliers|仕入れ先を替える|v
cause a delay|遅れを引き起こす|v
reliable supplier|信頼できる仕入れ先|a
incoming shipment|これから届く荷物|a
promptly delivered|速やかに配達された|d
behind schedule|予定より遅れて|r
# 支払い・経理
make a payment|支払いをする|v
pay a bill|請求書の支払いをする|v
issue an invoice|請求書を発行する|v
charge a fee|料金を請求する|v
waive a fee|料金を免除する|v
settle an account|勘定を清算する|v
outstanding balance|未払いの残高|a
overdue payment|期限を過ぎた支払い|a
in advance|前もって|r
in full|全額で|r
cut costs|経費を削る|v
cover the cost|費用をまかなう|v
allocate funds|資金を割り当てる|v
exceed the budget|予算を超える|v
reduce expenses|支出を減らす|v
estimate the cost|費用を見積もる|v
tight budget|厳しい予算|a
unexpected expenses|予想外の出費|a
within budget|予算内で|r
over budget|予算を超えて|r
submit receipts|領収書を提出する|v
claim expenses|経費を請求する|v
reimburse employees|従業員に払い戻す|v
keep a record|記録をつける|v
deposit a check|小切手を入金する|v
withdraw cash|現金を引き出す|v
transfer money|送金する、お金を振り込む|v
monthly statement|月ごとの明細書|a
on a monthly basis|月単位で|r
automatically deducted|自動的に差し引かれる|d
make a profit|利益を上げる|v
suffer a loss|損失を出す|v
generate revenue|収益を生む|v
report earnings|決算を発表する|v
steady growth|着実な成長|a
sharp decline|急激な減少|a
record profits|記録的な利益|a
rise sharply|急に上がる|d
fall slightly|わずかに下がる|d
in the red|赤字で|r
take out a loan|ローンを組む|v
repay a loan|ローンを返済する|v
make an investment|投資する|v
raise funds|資金を集める|v
open an account|口座を開く|v
conduct an audit|監査を行う|v
balance the books|帳簿の帳尻を合わせる|v
financial difficulties|財政難|a
sound investment|堅実な投資|a
invest in equipment|設備に投資する|p
# 人事・採用
apply for a position|職に応募する|p
submit a resume|履歴書を提出する|v
fill a vacancy|欠員を埋める|v
conduct an interview|面接を行う|v
recruit new staff|新しい職員を募集する|v
relevant experience|関連する経験|a
qualified candidate|適任の候補者|a
successful applicant|採用された応募者|a
full-time position|常勤の職|a
highly qualified|非常に適任な、資格や能力が十分な|d
accept a position|職を引き受ける|v
join a company|入社する|v
undergo training|研修を受ける|v
acquire skills|技能を身につける|v
gain experience|経験を積む|v
provide guidance|指導する、助言を与える|v
new hire|新入社員、新しく雇われた人|a
hands-on training|実地研修|a
on the job|仕事をしながら、勤務中に|r
report to a supervisor|上司に報告する、上司の下で働く|p
earn a promotion|昇進を勝ち取る|v
receive a raise|昇給を受ける|v
evaluate performance|業績を評価する|v
set a goal|目標を立てる|v
exceed expectations|期待を上回る|v
assume responsibility|責任を負う、引き受ける|v
outstanding performance|すばらしい業績、成績|a
annual bonus|年に一度の賞与|a
constructive feedback|建設的な意見|a
highly motivated|意欲の高い|d
work overtime|残業する|v
take a day off|1日休みを取る|v
request leave|休暇を申請する|v
cover a shift|勤務を代わる|v
work remotely|会社から離れた場所で働く|d
flexible hours|柔軟な勤務時間|a
heavy workload|多い仕事量|a
paid leave|有給休暇|a
on duty|勤務中で|r
on leave|休暇中で|r
submit a resignation|辞表を出す|v
take early retirement|早期退職する|v
cut jobs|人員を削減する|v
appoint a successor|後任を任命する|v
step down as president|社長を退く|p
transfer to a branch|支店に異動する|p
immediate supervisor|直属の上司|a
farewell party|送別会|a
in charge of|〜を担当して|r
newly appointed|新しく任命された|d
# 営業・マーケティング
launch a product|製品を発売する|v
conduct a survey|調査を行う|v
attract customers|客を引きつける|v
meet customer needs|顧客の要望に応える|v
enter a market|市場に参入する|v
potential customer|見込み客|a
competitive edge|競争上の強み|a
growing demand|高まる需要|a
on the market|市場に出て、売りに出て|r
widely used|広く使われている|d
run an advertisement|広告を出す|v
promote a product|製品を宣伝する|v
raise awareness|認知度を高める、関心を高める|v
build a reputation|評判を築く|v
reach an audience|視聴者や読者に届く|v
distribute flyers|ちらしを配る|v
by word of mouth|口コミで|r
eye-catching design|人目を引くデザイン|a
loyal customers|常連客|a
heavily advertised|大々的に宣伝された|d
offer a discount|割引をする|v
hold a sale|セールを開く|v
lower prices|値下げする|v
raise prices|値上げする|v
redeem a coupon|クーポンを使う|v
special offer|特別提供、特価|a
competitive prices|他社に負けない価格|a
on sale|特売で、売り出されて|r
at half price|半額で|r
for a limited time|期間限定で|r
meet a target|目標を達成する|v
boost sales|売上を伸ばす|v
close a deal|取引を成立させる|v
visit a client|顧客を訪問する|v
give a demonstration|実演をする|v
make a sales pitch|売り込みをする|v
secure an order|注文を取りつける|v
existing customers|既存の顧客|a
prospective client|見込みのある顧客|a
sell well|よく売れる|d
dominate the market|市場を支配する|v
face competition|競争に直面する|v
analyze the data|データを分析する|v
identify a trend|傾向を見つける|v
open a branch|支店を開く|v
stay ahead of the competition|競争相手の先を行く|p
fierce competition|激しい競争|a
leading brand|最大手のブランド、一流ブランド|a
overseas market|海外市場|a
rapidly growing|急成長している|d
# 顧客対応
make an inquiry|問い合わせをする|v
answer the phone|電話に出る|v
leave a message|伝言を残す|v
return a call|折り返し電話する|v
take a message|伝言を受ける|v
transfer a call|電話を転送する|v
respond to an inquiry|問い合わせに答える|p
on hold|保留で、待たされて|r
on the line|電話に出て、電話がつながって|r
further information|さらに詳しい情報|a
make a complaint|苦情を言う|v
handle a complaint|苦情に対応する|v
offer an apology|おわびする|v
resolve a problem|問題を解決する|v
cause inconvenience|不便をかける|v
accept responsibility|責任を認める|v
sincere apology|心からのおわび|a
dissatisfied customer|不満を持つ客|a
apologize for the delay|遅れをわびる|p
deeply regret|深く遺憾に思う|d
under warranty|保証期間中で|r
request a repair|修理を依頼する|v
replace a part|部品を交換する|v
schedule an appointment|予約を入れる|v
send a technician|技術者を派遣する|v
diagnose a problem|問題の原因を突き止める|v
faulty part|不良部品|a
free of charge|無料で|r
out of order|故障して|r
properly installed|正しく取り付けられた|d
provide a service|サービスを提供する|v
meet expectations|期待に応える|v
improve the quality|質を高める|v
complete a survey|アンケートに答える|v
leave a review|レビューを書く|v
welcome feedback|意見を歓迎する|v
excellent service|すばらしいサービス|a
valued customer|大切なお客様|a
highly recommend|強く勧める|d
greatly appreciate|大いに感謝する|d
create an account|アカウントを作る|v
renew a membership|会員資格を更新する|v
cancel a subscription|定期購読や定期利用を解約する|v
update personal information|個人情報を更新する|v
show identification|身分証を見せる|v
enter a password|パスワードを入力する|v
receive a notification|通知を受け取る|v
sign up for a newsletter|メールマガジンに登録する|p
subscribe to a service|サービスに加入する|p
at any time|いつでも|r
# 出張・移動
make a reservation|予約する|v
book a flight|飛行機を予約する|v
confirm a reservation|予約を確認する|v
cancel a reservation|予約を取り消す|v
reserve a seat|席を予約する|v
arrange transportation|交通手段を手配する|v
rent a car|車を借りる|v
direct flight|直行便|a
peak season|繁忙期、最も混む時期|a
fully booked|予約でいっぱいの|d
board a plane|飛行機に乗る|v
check a bag|かばんを預ける|v
miss a flight|飛行機に乗り遅れる|v
catch a flight|飛行機に乗る、間に合う|v
go through security|保安検査を通る|p
fasten a seat belt|シートベルトを締める|v
present a passport|パスポートを提示する|v
delayed flight|遅れている便|a
overhead compartment|頭上の荷物入れ|a
on board|機内・車内・船内に|r
take a taxi|タクシーに乗る|v
catch a train|電車に乗る、間に合う|v
give directions|道を教える|v
avoid traffic|渋滞を避ける|v
take a detour|回り道をする|v
heavy traffic|ひどい渋滞、多い交通量|a
alternate route|別の道|a
express train|急行列車|a
on time|時間どおりに|r
within walking distance|歩いて行ける距離に|r
check into a hotel|ホテルにチェックインする|p
extend a stay|滞在を延ばす|v
request a wake-up call|モーニングコールを頼む|v
store luggage|荷物を預ける、保管する|v
upgrade a room|部屋を上の等級に変える|v
vacant room|空室|a
complimentary breakfast|無料の朝食|a
scenic view|よい眺め|a
spacious room|広い部屋|a
conveniently located|便利な場所にある|d
attend a conference|会議・大会に出席する|v
register for a workshop|講習会に申し込む|p
tour a facility|施設を見学する|v
exchange business cards|名刺を交換する|v
host an event|催しを主催する|v
plan an itinerary|旅程を立てる|v
exchange money|両替する|v
tight schedule|詰まった予定|a
on business|仕事で、出張で|r
ahead of schedule|予定より早く|r
# 生産・品質・設備
increase production|生産を増やす|v
halt production|生産を止める|v
operate machinery|機械を操作する|v
assemble parts|部品を組み立てる|v
meet a deadline|締め切りに間に合わせる|v
streamline a process|工程を効率化する|v
mass production|大量生産|a
at full capacity|フル稼働で|r
in operation|稼働中で|r
fully automated|完全に自動化された|d
inspect a product|製品を検査する|v
meet a standard|基準を満たす|v
detect a defect|欠陥を見つける|v
recall a product|製品を回収する|v
conduct a test|試験を行う|v
maintain quality|品質を保つ|v
high standards|高い基準|a
minor flaw|小さな欠点|a
thorough inspection|徹底した検査|a
thoroughly tested|徹底的に試験された|d
follow safety procedures|安全手順に従う|v
prevent an accident|事故を防ぐ|v
report an injury|けがを報告する|v
take precautions|予防措置を取る|v
protective gear|保護具|a
hazardous materials|危険物|a
emergency exit|非常口|a
in case of emergency|緊急の場合には|r
at all times|常に|r
clearly marked|はっきり表示された|d
perform maintenance|保守作業を行う|v
install equipment|設備を取り付ける|v
fix a leak|水漏れを直す|v
restore power|電力を復旧させる|v
save energy|エネルギーを節約する|v
routine maintenance|定期的な保守|a
technical problem|技術的な問題|a
outdated equipment|古くなった設備|a
out of service|運転休止で、使用できない|r
temporarily closed|一時的に閉鎖されて|d
renovate a building|建物を改装する|v
obtain a permit|許可を得る|v
complete construction|工事を完了する|v
reduce waste|ごみを減らす|v
recycle materials|資材を再利用する|v
protect the environment|環境を守る|v
environmentally friendly|環境にやさしい|d
renewable energy|再生可能エネルギー|a
under construction|建設中で|r
on schedule|予定どおりに|r
# 日常業務・連絡
send an e-mail|メールを送る|v
attach a file|ファイルを添付する|v
forward a message|伝言やメールを転送する|v
proofread a document|書類を校正する|v
make a copy|コピーを取る|v
revise a draft|下書きを修正する|v
file a report|報告書を提出する|v
for future reference|今後の参考のために|r
in person|直接会って、本人が|r
by mistake|間違って|r
make an appointment|予約する、面会の約束をする|v
keep an appointment|約束を守る、予約どおりに行く|v
reschedule an appointment|予約を変更する|v
set a date|日取りを決める|v
make arrangements|手配する|v
save time|時間を節約する|v
busy schedule|忙しい予定|a
top priority|最優先事項|a
at the last minute|間際になって|r
at your earliest convenience|ご都合がつき次第|r
work closely|緊密に協力して働く|d
share information|情報を共有する|v
make progress|進歩する、前進する|v
make an effort|努力する|v
play a role|役割を果たす|v
ask a favor|頼み事をする|v
lend a hand|手を貸す|v
take a break|休憩する|v
collaborate with colleagues|同僚と協力する|p
joint effort|共同の取り組み|a
come to an agreement|合意に達する|p
enter into an agreement|契約を結ぶ|p
take effect|効力を生じる、実施される|v
go into effect|実施される、発効する|p
earn a reputation|評判を得る|v
introduce a policy|方針を導入する|v
enforce a rule|規則を守らせる|v
make an exception|例外を認める|v
make an announcement|発表する、知らせる|v
until further notice|追って知らせがあるまで|r
reap the rewards|成果を得る、報われる|v
drum up support|支持を集める|v
achieve a goal|目標を達成する|v
win an award|賞を取る|v
celebrate an anniversary|記念日を祝う|v
make a contribution|貢献する|v
express gratitude|感謝を表す|v
organize an event|催しを企画する|v
great success|大成功|a
in recognition of|〜をたたえて、〜を認めて|r
`;
Object.assign(EXAMPLES, {"colls:schedule a meeting":"Let's schedule a meeting with the design team for next Tuesday.",
"colls:call a meeting":"The manager will call a meeting to discuss the delay.",
"colls:attend a meeting":"All department heads must attend a meeting on Friday morning.",
"colls:postpone a meeting":"We had to postpone a meeting because the client was sick.",
"colls:set an agenda":"Please set an agenda and send it to everyone by noon.",
"colls:book a conference room":"I will book a conference room on the fifth floor.",
"colls:confirm attendance":"Please confirm attendance by replying to this e-mail.",
"colls:prior engagement":"Ms. Sato cannot join us because of a prior engagement.",
"colls:on short notice":"Thank you for coming on short notice.",
"colls:tentatively scheduled":"The workshop is tentatively scheduled for March 3.",
"colls:raise an issue":"Mr. Chen wants to raise an issue about overtime pay.",
"colls:address a concern":"The director promised to address a concern about safety.",
"colls:express an opinion":"Everyone should feel free to express an opinion.",
"colls:make a suggestion":"May I make a suggestion about the new schedule?",
"colls:exchange ideas":"The two teams meet every month to exchange ideas.",
"colls:take notes":"Please take notes during the training session.",
"colls:elaborate on a point":"Could you elaborate on a point you made earlier?",
"colls:strongly disagree":"Some members strongly disagree with the plan to close the branch.",
"colls:heated discussion":"There was a heated discussion about the budget cut.",
"colls:in detail":"We will explain the new policy in detail tomorrow.",
"colls:make a decision":"The board will make a decision by the end of the month.",
"colls:reach a consensus":"After two hours, the committee could finally reach a consensus.",
"colls:come to a conclusion":"We need more data before we come to a conclusion.",
"colls:take a vote":"Let's take a vote on the two designs.",
"colls:approve a proposal":"The city council is expected to approve a proposal for a new park.",
"colls:weigh the options":"We should weigh the options carefully before we sign.",
"colls:unanimous decision":"Hiring Ms. Park was a unanimous decision.",
"colls:final approval":"The plan is waiting for final approval from the president.",
"colls:in favor of":"Most employees are in favor of the flexible hours.",
"colls:unanimously approved":"The merger was unanimously approved by the board.",
"colls:give a presentation":"Ms. Lopez will give a presentation on the sales results.",
"colls:deliver a speech":"The mayor will deliver a speech at the opening ceremony.",
"colls:distribute handouts":"Please distribute handouts before the seminar begins.",
"colls:take questions":"The speaker will take questions at the end.",
"colls:introduce a speaker":"It is my pleasure to introduce a speaker from Kyoto University.",
"colls:draw attention to":"I would like to draw attention to the chart on page two.",
"colls:brief overview":"Let me begin with a brief overview of the project.",
"colls:opening remarks":"The chairman will make opening remarks at nine o'clock.",
"colls:visual aids":"Good visual aids make a talk easier to follow.",
"colls:on behalf of":"I would like to thank you on behalf of the entire staff.",
"colls:take minutes":"Could you take minutes at today's meeting?",
"colls:circulate the minutes":"I will circulate the minutes to all members tomorrow.",
"colls:assign a task":"The leader will assign a task to each member.",
"colls:set a deadline":"We need to set a deadline for the first draft.",
"colls:take action":"We must take action before sales fall further.",
"colls:adjourn a meeting":"The chair decided to adjourn a meeting until Monday.",
"colls:report on progress":"Each team will report on progress every Friday.",
"colls:unresolved issue":"The parking fee is still an unresolved issue.",
"colls:briefly summarize":"Let me briefly summarize what we agreed on today.",
"colls:by the end of the day":"Please send me the figures by the end of the day.",
"colls:enter into negotiations":"The two firms will enter into negotiations next month.",
"colls:make an offer":"We decided to make an offer for the building.",
"colls:accept an offer":"She was happy to accept an offer from a larger company.",
"colls:decline an offer":"He had to decline an offer because of the low salary.",
"colls:make a counteroffer":"The seller may make a counteroffer with a higher price.",
"colls:make a concession":"Both sides had to make a concession to finish the talks.",
"colls:reach an agreement":"The union and the company hope to reach an agreement soon.",
"colls:strike a deal":"The airline managed to strike a deal with the fuel supplier.",
"colls:favorable terms":"The bank offered favorable terms on the loan.",
"colls:mutually beneficial":"We are looking for a mutually beneficial arrangement.",
"colls:draw up a contract":"Our lawyer will draw up a contract this week.",
"colls:sign a contract":"Please read every page before you sign a contract.",
"colls:review a contract":"The legal team needs two days to review a contract.",
"colls:renew a contract":"The client decided to renew a contract for another year.",
"colls:terminate a contract":"Either side may terminate a contract with thirty days' notice.",
"colls:breach a contract":"A company that fails to deliver may breach a contract.",
"colls:binding agreement":"An e-mail can sometimes be a binding agreement.",
"colls:legal advice":"You should get legal advice before buying land.",
"colls:written consent":"Photos cannot be used without written consent.",
"colls:under the terms of":"Under the terms of the lease, pets are not allowed.",
"colls:meet the requirements":"All products must meet the requirements for safety.",
"colls:honor a commitment":"The firm will honor a commitment to keep prices low.",
"colls:fulfill an obligation":"Tenants must fulfill an obligation to keep the room clean.",
"colls:impose a penalty":"The city will impose a penalty for late payment.",
"colls:comply with regulations":"Factories must comply with regulations on waste.",
"colls:adhere to the terms":"Both parties must adhere to the terms of the contract.",
"colls:confidential information":"Do not leave confidential information on your desk.",
"colls:disclose information":"Staff must not disclose information about clients.",
"colls:in accordance with":"The work was done in accordance with the safety rules.",
"colls:strictly prohibited":"Smoking is strictly prohibited in this building.",
"colls:form a partnership":"The two universities will form a partnership for research.",
"colls:acquire a company":"The group plans to acquire a company in Vietnam.",
"colls:announce a merger":"The banks will announce a merger on Monday.",
"colls:merge with a rival":"The store chain may merge with a rival next year.",
"colls:expand operations":"We plan to expand operations in South America.",
"colls:build a relationship":"It takes time to build a relationship with a new client.",
"colls:close ties":"The city has close ties with its sister city in Canada.",
"colls:strategic alliance":"The two airlines formed a strategic alliance.",
"colls:majority stake":"The investor bought a majority stake in the hotel.",
"colls:in the long run":"Good training saves money in the long run.",
"colls:submit a bid":"Companies must submit a bid by the end of June.",
"colls:bid on a project":"Four builders will bid on a project to repair the station.",
"colls:win a contract":"The firm hopes to win a contract with the government.",
"colls:award a contract":"The city will award a contract to the best company.",
"colls:lowest bidder":"The job does not always go to the lowest bidder.",
"colls:settle a dispute":"A judge helped the neighbors settle a dispute.",
"colls:file a lawsuit":"The customers plan to file a lawsuit against the maker.",
"colls:take legal action":"We will take legal action if the bill is not paid.",
"colls:seek compensation":"Passengers can seek compensation for lost bags.",
"colls:out of court":"The two companies settled the matter out of court.",
"colls:place an order":"You can place an order online or by phone.",
"colls:process an order":"It takes one day to process an order.",
"colls:cancel an order":"You may cancel an order before it is shipped.",
"colls:confirm an order":"We will confirm an order by e-mail within an hour.",
"colls:complete a form":"Please complete a form at the front desk.",
"colls:request a quote":"Call us to request a quote for your office move.",
"colls:large order":"We offer a discount on any large order.",
"colls:in bulk":"Restaurants buy rice in bulk to save money.",
"colls:upon request":"A printed catalog is available upon request.",
"colls:currently unavailable":"That color is currently unavailable.",
"colls:in stock":"Do you have this jacket in stock?",
"colls:out of stock":"The new phone is out of stock at every store.",
"colls:check availability":"Let me check availability for that date.",
"colls:restock the shelves":"Staff restock the shelves every morning.",
"colls:run low on supplies":"We often run low on supplies at the end of the month.",
"colls:take inventory":"The store closes early to take inventory.",
"colls:limited supply":"Tickets are in limited supply, so buy early.",
"colls:sufficient stock":"We have sufficient stock for the holiday season.",
"colls:readily available":"Parts for this model are readily available.",
"colls:on back order":"The desk you want is on back order until May.",
"colls:ship an order":"We ship an order within two days of payment.",
"colls:track a shipment":"Use this number to track a shipment online.",
"colls:deliver a package":"The driver tried to deliver a package this morning.",
"colls:expedite a shipment":"We can expedite a shipment for an extra fee.",
"colls:sign for a package":"An adult must sign for a package.",
"colls:next-day delivery":"Next-day delivery costs fifteen dollars.",
"colls:free shipping":"Orders over fifty dollars get free shipping.",
"colls:fragile items":"Wrap fragile items in thick paper.",
"colls:in transit":"Your order is in transit and will arrive tomorrow.",
"colls:at no extra charge":"We will gift-wrap it at no extra charge.",
"colls:receive a shipment":"We will receive a shipment of tea on Monday.",
"colls:return an item":"You can return an item within thirty days.",
"colls:exchange an item":"I would like to exchange an item for a larger size.",
"colls:issue a refund":"We will issue a refund to your credit card.",
"colls:inspect the contents":"Please inspect the contents before the driver leaves.",
"colls:damaged goods":"We replace damaged goods at once.",
"colls:defective product":"The maker recalled a defective product last week.",
"colls:original packaging":"Keep the original packaging in case of a return.",
"colls:full refund":"You will receive a full refund if the event is canceled.",
"colls:in good condition":"The used car is in good condition.",
"colls:load a truck":"It takes an hour to load a truck.",
"colls:unload cargo":"Workers unload cargo from the ship at night.",
"colls:stack boxes":"Do not stack boxes higher than two meters.",
"colls:meet demand":"The bakery hired staff to meet demand.",
"colls:switch suppliers":"We decided to switch suppliers to cut costs.",
"colls:cause a delay":"Heavy snow may cause a delay in delivery.",
"colls:reliable supplier":"We need a reliable supplier of fresh fish.",
"colls:incoming shipment":"Please clear a space for the incoming shipment.",
"colls:promptly delivered":"The flowers were promptly delivered on the same day.",
"colls:behind schedule":"The construction is two weeks behind schedule.",
"colls:make a payment":"You can make a payment at any convenience store.",
"colls:pay a bill":"I forgot to pay a bill for electricity last month.",
"colls:issue an invoice":"We issue an invoice at the end of each month.",
"colls:charge a fee":"Some banks charge a fee for paper statements.",
"colls:waive a fee":"The gym will waive a fee for new members this week.",
"colls:settle an account":"Please settle an account before you check out.",
"colls:outstanding balance":"You have an outstanding balance of forty dollars.",
"colls:overdue payment":"We sent a reminder about the overdue payment.",
"colls:in advance":"Rent must be paid one month in advance.",
"colls:in full":"The loan was paid back in full last year.",
"colls:cut costs":"The firm closed two offices to cut costs.",
"colls:cover the cost":"The company will cover the cost of your training.",
"colls:allocate funds":"The city will allocate funds for road repairs.",
"colls:exceed the budget":"The film is likely to exceed the budget.",
"colls:reduce expenses":"Online meetings help us reduce expenses.",
"colls:estimate the cost":"A builder came to estimate the cost of the repairs.",
"colls:tight budget":"We planned the party on a tight budget.",
"colls:unexpected expenses":"Save some money for unexpected expenses.",
"colls:within budget":"The project was finished on time and within budget.",
"colls:over budget":"The new stadium is ten million dollars over budget.",
"colls:submit receipts":"Please submit receipts to the accounting office.",
"colls:claim expenses":"You can claim expenses for travel to the conference.",
"colls:reimburse employees":"We reimburse employees for the cost of work shoes.",
"colls:keep a record":"Drivers must keep a record of the distance they travel.",
"colls:deposit a check":"I need to deposit a check at the bank.",
"colls:withdraw cash":"You can withdraw cash from this machine at any time.",
"colls:transfer money":"I will transfer money to your account today.",
"colls:monthly statement":"Check your monthly statement for mistakes.",
"colls:on a monthly basis":"Staff are paid on a monthly basis.",
"colls:automatically deducted":"The membership fee is automatically deducted from your account.",
"colls:make a profit":"The café began to make a profit in its second year.",
"colls:suffer a loss":"Many airlines suffer a loss in winter.",
"colls:generate revenue":"Ads generate revenue for the website.",
"colls:report earnings":"The bank will report earnings next Tuesday.",
"colls:steady growth":"The town has seen steady growth in tourism.",
"colls:sharp decline":"There was a sharp decline in car sales.",
"colls:record profits":"The game maker announced record profits.",
"colls:rise sharply":"Fuel prices rise sharply before the holidays.",
"colls:fall slightly":"Rents may fall slightly next year.",
"colls:in the red":"The theater has been in the red for three years.",
"colls:take out a loan":"They decided to take out a loan to buy a van.",
"colls:repay a loan":"It took her five years to repay a loan.",
"colls:make an investment":"Think carefully before you make an investment.",
"colls:raise funds":"The school held a concert to raise funds.",
"colls:open an account":"You need an ID card to open an account.",
"colls:conduct an audit":"An outside firm will conduct an audit in March.",
"colls:balance the books":"The owner works late to balance the books.",
"colls:financial difficulties":"The airline is in financial difficulties.",
"colls:sound investment":"A house near the station is a sound investment.",
"colls:invest in equipment":"The clinic will invest in equipment for eye tests.",
"colls:apply for a position":"More than fifty people chose to apply for a position at the museum.",
"colls:submit a resume":"Please submit a resume and a photo by Friday.",
"colls:fill a vacancy":"We need to fill a vacancy in the sales team.",
"colls:conduct an interview":"Two managers will conduct an interview with each person.",
"colls:recruit new staff":"The hotel must recruit new staff before summer.",
"colls:relevant experience":"Do you have any relevant experience in teaching?",
"colls:qualified candidate":"We could not find a qualified candidate this time.",
"colls:successful applicant":"The successful applicant will work in our Paris office.",
"colls:full-time position":"He is looking for a full-time position near his home.",
"colls:highly qualified":"She is a highly qualified engineer.",
"colls:accept a position":"He decided to accept a position at a bank.",
"colls:join a company":"Most students join a company in April.",
"colls:undergo training":"Pilots undergo training every year.",
"colls:acquire skills":"The course helps you acquire skills for office work.",
"colls:gain experience":"Volunteering is a good way to gain experience.",
"colls:provide guidance":"Senior staff provide guidance to younger workers.",
"colls:new hire":"Each new hire receives a laptop on the first day.",
"colls:hands-on training":"The school offers hands-on training in a real kitchen.",
"colls:on the job":"Most of what I know, I learned on the job.",
"colls:report to a supervisor":"You will report to a supervisor in the Tokyo office.",
"colls:earn a promotion":"She worked hard to earn a promotion.",
"colls:receive a raise":"All staff will receive a raise in April.",
"colls:evaluate performance":"Managers evaluate performance twice a year.",
"colls:set a goal":"It helps to set a goal for each week.",
"colls:exceed expectations":"The new model continues to exceed expectations.",
"colls:assume responsibility":"Mr. Hall will assume responsibility for the project.",
"colls:outstanding performance":"She won a prize for outstanding performance.",
"colls:annual bonus":"The annual bonus is paid in December.",
"colls:constructive feedback":"Good teachers give constructive feedback.",
"colls:highly motivated":"We are looking for highly motivated people.",
"colls:work overtime":"I had to work overtime three days this week.",
"colls:take a day off":"Why don't you take a day off tomorrow?",
"colls:request leave":"You should request leave at least a week before.",
"colls:cover a shift":"Can you cover a shift for me on Sunday?",
"colls:work remotely":"Half of our staff work remotely.",
"colls:flexible hours":"Parents like the flexible hours at this firm.",
"colls:heavy workload":"Nurses often have a heavy workload.",
"colls:paid leave":"You get twenty days of paid leave a year.",
"colls:on duty":"There is always a guard on duty at night.",
"colls:on leave":"Ms. Mori is on leave until next Wednesday.",
"colls:submit a resignation":"He plans to submit a resignation next month.",
"colls:take early retirement":"My father chose to take early retirement at fifty-five.",
"colls:cut jobs":"The carmaker will cut jobs at two plants.",
"colls:appoint a successor":"The board must appoint a successor soon.",
"colls:step down as president":"She will step down as president in June.",
"colls:transfer to a branch":"He asked to transfer to a branch near his parents.",
"colls:immediate supervisor":"Talk to your immediate supervisor first.",
"colls:farewell party":"We held a farewell party for Ms. Green.",
"colls:in charge of":"Who is in charge of ordering supplies?",
"colls:newly appointed":"The newly appointed director will speak first.",
"colls:launch a product":"The firm will launch a product for pet owners in May.",
"colls:conduct a survey":"We conduct a survey of our guests every year.",
"colls:attract customers":"Free parking helps to attract customers.",
"colls:meet customer needs":"We changed our opening hours to meet customer needs.",
"colls:enter a market":"The brand hopes to enter a market in Europe.",
"colls:potential customer":"Every visitor to the fair is a potential customer.",
"colls:competitive edge":"Fast delivery gives us a competitive edge.",
"colls:growing demand":"There is a growing demand for electric bikes.",
"colls:on the market":"This is the lightest laptop on the market.",
"colls:widely used":"This software is widely used in hospitals.",
"colls:run an advertisement":"We will run an advertisement in the local paper.",
"colls:promote a product":"Singers are often paid to promote a product.",
"colls:raise awareness":"The event will raise awareness of the new brand.",
"colls:build a reputation":"The shop has managed to build a reputation for fresh bread.",
"colls:reach an audience":"Online videos can reach an audience around the world.",
"colls:distribute flyers":"Students distribute flyers in front of the station.",
"colls:by word of mouth":"The restaurant became famous by word of mouth.",
"colls:eye-catching design":"The bottle has an eye-catching design.",
"colls:loyal customers":"We send a small gift to loyal customers every year.",
"colls:heavily advertised":"The film was heavily advertised on television.",
"colls:offer a discount":"We offer a discount to students and seniors.",
"colls:hold a sale":"The bookstore will hold a sale next week.",
"colls:lower prices":"Supermarkets lower prices in the evening.",
"colls:raise prices":"The café had to raise prices because milk costs more.",
"colls:redeem a coupon":"You can redeem a coupon at any of our stores.",
"colls:special offer":"This special offer ends on Sunday.",
"colls:competitive prices":"We sell quality tools at competitive prices.",
"colls:on sale":"Summer shoes are on sale this week.",
"colls:at half price":"I bought this bag at half price.",
"colls:for a limited time":"The seasonal menu is available for a limited time.",
"colls:meet a target":"The team worked late to meet a target.",
"colls:boost sales":"A new website helped to boost sales.",
"colls:close a deal":"She flew to Dubai to close a deal.",
"colls:visit a client":"I will visit a client in Nagoya tomorrow.",
"colls:give a demonstration":"A chef will give a demonstration of the new oven.",
"colls:make a sales pitch":"You have five minutes to make a sales pitch.",
"colls:secure an order":"He managed to secure an order from a large hotel.",
"colls:existing customers":"We sent the news to existing customers first.",
"colls:prospective client":"I am having lunch with a prospective client.",
"colls:sell well":"Umbrellas sell well in June.",
"colls:dominate the market":"Two firms dominate the market for tires.",
"colls:face competition":"Small shops face competition from online stores.",
"colls:analyze the data":"It will take a week to analyze the data.",
"colls:identify a trend":"The report tries to identify a trend in travel.",
"colls:open a branch":"The bank will open a branch near the airport.",
"colls:stay ahead of the competition":"We must keep learning to stay ahead of the competition.",
"colls:fierce competition":"There is fierce competition among phone makers.",
"colls:leading brand":"It is the leading brand of running shoes.",
"colls:overseas market":"The sake maker is looking at the overseas market.",
"colls:rapidly growing":"Online learning is a rapidly growing business.",
"colls:make an inquiry":"I am calling to make an inquiry about your tours.",
"colls:answer the phone":"Nobody was there to answer the phone.",
"colls:leave a message":"Please leave a message after the tone.",
"colls:return a call":"I will return a call from the bank after lunch.",
"colls:take a message":"She is out now. May I take a message?",
"colls:transfer a call":"Press this button to transfer a call.",
"colls:respond to an inquiry":"We try to respond to an inquiry within a day.",
"colls:on hold":"I was on hold for twenty minutes.",
"colls:on the line":"Mr. Lee is on the line. Can you talk now?",
"colls:further information":"For further information, visit our website.",
"colls:make a complaint":"He went to the front desk to make a complaint.",
"colls:handle a complaint":"New staff learn how to handle a complaint.",
"colls:offer an apology":"The airline had to offer an apology to its passengers.",
"colls:resolve a problem":"We will resolve a problem like this within a day.",
"colls:cause inconvenience":"The road work may cause inconvenience to drivers.",
"colls:accept responsibility":"The company must accept responsibility for the error.",
"colls:sincere apology":"Please accept our sincere apology.",
"colls:dissatisfied customer":"A dissatisfied customer may never come back.",
"colls:apologize for the delay":"We apologize for the delay in answering your letter.",
"colls:deeply regret":"We deeply regret the mistake in your bill.",
"colls:under warranty":"The camera is still under warranty.",
"colls:request a repair":"You can request a repair on our website.",
"colls:replace a part":"It takes ten minutes to replace a part like this.",
"colls:schedule an appointment":"Call us to schedule an appointment.",
"colls:send a technician":"We will send a technician tomorrow morning.",
"colls:diagnose a problem":"The mechanic needs an hour to diagnose a problem.",
"colls:faulty part":"The fire was caused by a faulty part.",
"colls:free of charge":"We deliver large items free of charge.",
"colls:out of order":"The elevator is out of order again.",
"colls:properly installed":"Make sure the seat is properly installed.",
"colls:provide a service":"We provide a service for busy parents.",
"colls:meet expectations":"The hotel did not meet expectations.",
"colls:improve the quality":"We are working to improve the quality of our meals.",
"colls:complete a survey":"Please complete a survey before you leave.",
"colls:leave a review":"Many guests leave a review after their stay.",
"colls:welcome feedback":"We welcome feedback from all our readers.",
"colls:excellent service":"The restaurant is known for its excellent service.",
"colls:valued customer":"As a valued customer, you will receive a gift.",
"colls:highly recommend":"I highly recommend this dentist.",
"colls:greatly appreciate":"We greatly appreciate your patience.",
"colls:create an account":"It is free to create an account.",
"colls:renew a membership":"You can renew a membership at the front desk.",
"colls:cancel a subscription":"I want to cancel a subscription to this magazine.",
"colls:update personal information":"Please update personal information when you move.",
"colls:show identification":"Visitors must show identification at the gate.",
"colls:enter a password":"You need to enter a password to see the file.",
"colls:receive a notification":"You will receive a notification when your order ships.",
"colls:sign up for a newsletter":"Sign up for a newsletter to get our latest news.",
"colls:subscribe to a service":"Many people subscribe to a service for music.",
"colls:at any time":"You can change your plan at any time.",
"colls:make a reservation":"I would like to make a reservation for two nights.",
"colls:book a flight":"You should book a flight at least a month before.",
"colls:confirm a reservation":"Please call the hotel to confirm a reservation.",
"colls:cancel a reservation":"You can cancel a reservation up to the day before.",
"colls:reserve a seat":"It costs five dollars to reserve a seat on this train.",
"colls:arrange transportation":"The hotel can arrange transportation to the airport.",
"colls:rent a car":"We decided to rent a car for the weekend.",
"colls:direct flight":"There is no direct flight from here to Rome.",
"colls:peak season":"Hotel prices double in peak season.",
"colls:fully booked":"The restaurant is fully booked on Saturday.",
"colls:board a plane":"Passengers will board a plane at gate six.",
"colls:check a bag":"It costs thirty dollars to check a bag.",
"colls:miss a flight":"Leave early, or you will miss a flight.",
"colls:catch a flight":"I have to catch a flight at six tomorrow morning.",
"colls:go through security":"It took an hour to go through security.",
"colls:fasten a seat belt":"Please fasten a seat belt before the car starts.",
"colls:present a passport":"You must present a passport at the counter.",
"colls:delayed flight":"We waited three hours because of a delayed flight.",
"colls:overhead compartment":"Put your coat in the overhead compartment.",
"colls:on board":"There were two hundred people on board.",
"colls:take a taxi":"It is raining, so let's take a taxi.",
"colls:catch a train":"If we hurry, we can catch a train at nine.",
"colls:give directions":"A kind woman stopped to give directions.",
"colls:avoid traffic":"I leave home at six to avoid traffic.",
"colls:take a detour":"We had to take a detour because of road work.",
"colls:heavy traffic":"There is always heavy traffic on Friday evening.",
"colls:alternate route":"The sign shows an alternate route to the stadium.",
"colls:express train":"The express train does not stop at this station.",
"colls:on time":"The bus arrived exactly on time.",
"colls:within walking distance":"The beach is within walking distance of the hotel.",
"colls:check into a hotel":"We can check into a hotel after three o'clock.",
"colls:extend a stay":"She decided to extend a stay by two days.",
"colls:request a wake-up call":"I will request a wake-up call for five thirty.",
"colls:store luggage":"You can store luggage at the station.",
"colls:upgrade a room":"The clerk offered to upgrade a room for free.",
"colls:vacant room":"There was not a single vacant room in town.",
"colls:complimentary breakfast":"The price includes a complimentary breakfast.",
"colls:scenic view":"The café has a scenic view of the lake.",
"colls:spacious room":"We stayed in a spacious room with two beds.",
"colls:conveniently located":"The office is conveniently located near the subway.",
"colls:attend a conference":"I will attend a conference in Berlin next week.",
"colls:register for a workshop":"You can register for a workshop online.",
"colls:tour a facility":"The guests will tour a facility in the afternoon.",
"colls:exchange business cards":"We exchange business cards at the first meeting.",
"colls:host an event":"The museum will host an event for children.",
"colls:plan an itinerary":"A guidebook helps you plan an itinerary.",
"colls:exchange money":"You can exchange money at the airport.",
"colls:tight schedule":"We are on a tight schedule, so lunch will be short.",
"colls:on business":"He is in London on business.",
"colls:ahead of schedule":"The bridge was finished ahead of schedule.",
"colls:increase production":"We will increase production before the holidays.",
"colls:halt production":"The plant had to halt production after the fire.",
"colls:operate machinery":"Do not operate machinery when you are tired.",
"colls:assemble parts":"Robots assemble parts faster than people.",
"colls:meet a deadline":"We worked all weekend to meet a deadline.",
"colls:streamline a process":"New software helped us streamline a process.",
"colls:mass production":"Mass production of the new car begins in May.",
"colls:at full capacity":"The factory is running at full capacity.",
"colls:in operation":"The machine has been in operation for ten years.",
"colls:fully automated":"The warehouse is fully automated.",
"colls:inspect a product":"Two people inspect a product before it is packed.",
"colls:meet a standard":"Toys must meet a standard for safety.",
"colls:detect a defect":"The camera can detect a defect in one second.",
"colls:recall a product":"The maker had to recall a product last year.",
"colls:conduct a test":"Engineers conduct a test on every engine.",
"colls:maintain quality":"It is hard to maintain quality when you grow fast.",
"colls:high standards":"The school is known for its high standards.",
"colls:minor flaw":"The table is cheap because it has a minor flaw.",
"colls:thorough inspection":"The plane passed a thorough inspection.",
"colls:thoroughly tested":"Each helmet is thoroughly tested.",
"colls:follow safety procedures":"All workers must follow safety procedures.",
"colls:prevent an accident":"Good lighting helps to prevent an accident.",
"colls:report an injury":"Please report an injury to the office at once.",
"colls:take precautions":"Take precautions when you use this chemical.",
"colls:protective gear":"Visitors must wear protective gear.",
"colls:hazardous materials":"This truck carries hazardous materials.",
"colls:emergency exit":"Do not put boxes in front of the emergency exit.",
"colls:in case of emergency":"In case of emergency, call this number.",
"colls:at all times":"Keep your badge with you at all times.",
"colls:clearly marked":"The exits are clearly marked.",
"colls:perform maintenance":"We perform maintenance on the trains at night.",
"colls:install equipment":"A team came to install equipment in the lab.",
"colls:fix a leak":"A plumber came to fix a leak in the roof.",
"colls:restore power":"Workers hope to restore power by evening.",
"colls:save energy":"Turn off the lights to save energy.",
"colls:routine maintenance":"The pool is closed for routine maintenance.",
"colls:technical problem":"The show started late because of a technical problem.",
"colls:outdated equipment":"The hospital replaced its outdated equipment.",
"colls:out of service":"This bus is out of service.",
"colls:temporarily closed":"The bridge is temporarily closed for repairs.",
"colls:renovate a building":"It costs a lot to renovate a building this old.",
"colls:obtain a permit":"You must obtain a permit to sell food here.",
"colls:complete construction":"The firm will complete construction in two years.",
"colls:reduce waste":"We use glass cups to reduce waste.",
"colls:recycle materials":"The plant can recycle materials such as steel.",
"colls:protect the environment":"Small changes can help to protect the environment.",
"colls:environmentally friendly":"This soap is environmentally friendly.",
"colls:renewable energy":"The town gets half its power from renewable energy.",
"colls:under construction":"A new station is under construction.",
"colls:on schedule":"The work is going on schedule.",
"colls:send an e-mail":"I will send an e-mail to confirm the time.",
"colls:attach a file":"Do not forget to attach a file to your message.",
"colls:forward a message":"Could you forward a message to the sales team?",
"colls:proofread a document":"Always proofread a document before you print it.",
"colls:make a copy":"Please make a copy of your passport.",
"colls:revise a draft":"The writer had to revise a draft three times.",
"colls:file a report":"Police officers file a report after every accident.",
"colls:for future reference":"Keep this letter for future reference.",
"colls:in person":"You must sign the form in person.",
"colls:by mistake":"I took your umbrella by mistake.",
"colls:make an appointment":"I need to make an appointment with the dentist.",
"colls:keep an appointment":"He was too busy to keep an appointment.",
"colls:reschedule an appointment":"I called the clinic to reschedule an appointment.",
"colls:set a date":"Have you managed to set a date for the wedding?",
"colls:make arrangements":"We will make arrangements for your visit.",
"colls:save time":"Shopping online can save time.",
"colls:busy schedule":"Thank you for seeing me in spite of your busy schedule.",
"colls:top priority":"Safety is our top priority.",
"colls:at the last minute":"The concert was canceled at the last minute.",
"colls:at your earliest convenience":"Please reply at your earliest convenience.",
"colls:work closely":"Nurses work closely with doctors.",
"colls:share information":"The two offices share information every day.",
"colls:make progress":"We began to make progress after the second meeting.",
"colls:make an effort":"Please make an effort to arrive early.",
"colls:play a role":"Parents play a role in the school festival.",
"colls:ask a favor":"May I ask a favor of you?",
"colls:lend a hand":"Could you lend a hand with these boxes?",
"colls:take a break":"Let's take a break for ten minutes.",
"colls:collaborate with colleagues":"This tool makes it easy to collaborate with colleagues.",
"colls:joint effort":"The festival was a joint effort by three schools.",
"colls:come to an agreement":"The two sides finally managed to come to an agreement.",
"colls:enter into an agreement":"The city will enter into an agreement with a bus company.",
"colls:take effect":"The new law will take effect in April.",
"colls:go into effect":"The price change will go into effect next month.",
"colls:earn a reputation":"The firm hopes to earn a reputation for honest work.",
"colls:introduce a policy":"The school will introduce a policy on phones.",
"colls:enforce a rule":"It is hard to enforce a rule that nobody likes.",
"colls:make an exception":"We cannot make an exception for one person.",
"colls:make an announcement":"The president will make an announcement at noon.",
"colls:until further notice":"The pool is closed until further notice.",
"colls:reap the rewards":"After years of study, she began to reap the rewards.",
"colls:drum up support":"He visited every office to drum up support for his plan.",
"colls:achieve a goal":"It took two years to achieve a goal of ten stores.",
"colls:win an award":"The young designer hopes to win an award.",
"colls:celebrate an anniversary":"We will celebrate an anniversary with a dinner.",
"colls:make a contribution":"Every member can make a contribution to the team.",
"colls:express gratitude":"I would like to express gratitude to all our volunteers.",
"colls:organize an event":"Students organize an event for new members.",
"colls:great success":"The charity concert was a great success.",
"colls:in recognition of":"She received a medal in recognition of her service."});
