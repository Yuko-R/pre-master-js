//文字列セブ島と留学を連結した結果をconsoleに表示してください。

console. log('セブ島' + '留学');


//① 5 たす 8
//② 4 ひく 2
//③ 8 かける 2
//④ 6 わる 3
//⑤ 9 わる 2の余り

console.log('① 5 たす 8' + String(5 + 8));
console.log(5 + 8);
console.log(4 - 2);
console.log(8 * 2);
console.log(6 / 3);
console.log(9 % 2);


//変数countryを作成して、文字列Japanを代入してください。
//変数countryをconsoleに表示してください。
//1で作成した変数countryに文字列Philippinesを代入してください。
//変数countryをconsoleに表示してください。

let country = 'japan';
console.log(country);
country = 'Philippines';
console.log(country);


let schoolName = 'NexSeed';
console.log('私の所属先は、' + schoolName + 'です');
//上記でも正しいのですが、テンプレートレテラルを使用すると以下のように完結に書くことができます。

console.log(`私の所属先は、${schoolName}です`);


//変数jobを作成して、文字列engineerを代入してください。
//テンプレートリテラルを使用して、私の仕事は、engineerですとconsoleに表示してください。

let job = 'engineer';
console.log(`私の仕事は、${job}です`);

//変数applicationsを作成して、配列['LINE', 'Facebook', 'Twitter']を代入してください。
//変数applicationsをconsoleに表示してください。
//変数applicationsにInstagramを追加してください。
//変数applicationsの中のInstagramをconsoleに表示してください。

let applications = ['LINE', 'Facebook', 'Twitter'];
console.log(applications);
applications.push('Instagram');
// console.log(applications);
console.log(applications[3]);


//変数capitalCitiesを作成して、連想配列{ Japan: 'Tokyo', Philippines: 'Manila' }を代入してください。
//変数capitalCitiesをconsoleに表示してください。
//変数capitalCitiesにAmerica: Washingtonを追加してください。
//変数capitalCitiesの中のWashingtonをconsoleに表示してください。

let capitalCities = { Japan: 'Tokyo', Philippines: 'Manila' };
console.log(capitalCities);
capitalCities.America = 'Washington';
console.log(capitalCities);

// 宿題
//　クラスのみんなの名簿を２次元配列で作ってきましょう。
// 配列の中に、連想配列のかたちです。
// リストの０番目の人の名前をconsoleで表示しましょう。
// リストの３番目の人の出身地をconsoleで表示しましょう。
// リストの４番目の人の趣味をconsoleで表示しましょう。

let studentlist = [
  {name:"Seedくん",from:"セブ島",hobby:"サーフィン"},
  {name:"ErikoIchinohe",from:"青森",hobby:"旅"},
  {name:"あいちゃん",from:"沖縄",hobby:"旅"},
  {name:"ゆたか",from:"千葉",hobby:"田舎廻り"},
  {name:"ルイス",from:"ペルー",hobby:"下ネタ"},
  {name:"えりぴょん",from:"和歌山",hobby:"動画撮影"},
  {name:"このみんさん",from:"千葉",hobby:"ディズニー"},
  {name:"めぐちゃん",from:"東京",hobby:"旅"},
  {name:"もえぴ",from:"山形",hobby:"韓国ドラマ"},
  {name:"しょうさん",from:"岩手",hobby:"スノーボード"},
  {name:"ゆうだい",from:"大阪",hobby:"えいこうちゃん"},
  {name:"しんや",from:"沖縄",hobby:"じーまーみ豆腐作り"},
  {name:"えりぴょん",from:"和歌山",hobby:"動画撮影"},
  {name:"よっしー",from:"京都",hobby:"デリバリー"},
  {name:"ゆうこ",from:"沖縄",hobby:"英語"}
];
console.log(studentlist);
console.log(studentlist[0].name);
console.log(studentlist[3].from);
console.log(studentlist[4].hobby);

