// js/data.js
// fishing.html 2단계 분리 파일
// 주의: 기존 fishing.html 안의 데이터 상수만 이 파일로 이동했습니다.
// 로직 함수는 아직 fishing.html 안에 그대로 둡니다.

var FISHES = {
  "flounder":{name:"넙치",price:10,rarity:"common",rate:32,speed:1.1,img:"./assets/fish/fish01.png",locations:["pond"],description:"납작한 몸으로 바닥에 숨어 지내는 초보 연못의 단골 손님입니다."},
  "octopus":{name:"문어",price:95,rarity:"epic",rate:5,speed:4.2,img:"./assets/fish/fish02.png",locations:["deep"],description:"똑똑하고 빠르게 움직이는 영웅급 바다 생물입니다."},
  "sunfish":{name:"개복치",price:180,rarity:"legend",rate:1.5,speed:5.2,img:"./assets/fish/fish03.png",locations:["lava", "deep"],description:"거대한 몸집을 가진 전설급 물고기입니다."},
  "tuna":{name:"참치",price:85,rarity:"rare",rate:6,speed:3.8,img:"./assets/fish/fish04.png",locations:["lake", "deep"],description:"강한 힘으로 도망치는 희귀 어종입니다."},
  "bass":{name:"배스",price:35,rarity:"uncommon",rate:14,speed:2.5,img:"./assets/fish/fish05.png",locations:["river", "lake"],description:"초보자를 벗어나면 자주 만나게 되는 힘 좋은 물고기입니다."},
  "perch":{name:"농어",price:22,rarity:"common",rate:20,speed:1.9,img:"./assets/fish/fish06.png",locations:["pond", "river"],description:"잔잔한 물가에서 자주 보이는 기본 어종입니다."},
  "lavaEel":{name:"용암장어",price:260,rarity:"legend",rate:0.8,speed:6.2,img:"./assets/fish/fish07.png",locations:["lava"],description:"용암 속에서도 살아남는 전설의 장어입니다."},
  "trout":{name:"송어",price:28,rarity:"uncommon",rate:16,speed:2.3,img:"./assets/fish/fish08.png",locations:["river"],description:"맑은 강물에서 잘 잡히는 민첩한 물고기입니다."},
  "carp":{name:"잉어",price:15,rarity:"common",rate:26,speed:1.5,img:"./assets/fish/fish09.png",locations:["pond", "river"],description:"연못과 강에 널리 사는 친숙한 물고기입니다."},
  "crucian":{name:"붕어",price:12,rarity:"common",rate:28,speed:1.35,img:"./assets/fish/fish10.png",locations:["pond"],description:"작지만 꾸준히 골드를 벌어주는 기본 물고기입니다."},
  "goldenCarp":{name:"황금붕어",price:120,rarity:"rare",rate:3.5,speed:3.7,img:"./assets/fish/fish11.png",locations:["lake", "lava"],description:"황금빛 비늘을 가진 희귀한 잉어입니다."},
  "ghostFish":{name:"유령고기",price:150,rarity:"epic",rate:1.8,speed:4.8,img:"./assets/fish/fish12.png",locations:["lava", "deep"],description:"밤과 어둠 속에서 모습을 드러내는 신비한 물고기입니다."},
  "grayMullet":{name:"숭어",price:26,rarity:"uncommon",rate:15,speed:2.1,img:"./assets/fish/fish13.png",locations:["river"],description:"강과 호수를 오가는 은빛 물고기입니다."},
  "rainbowTrout":{name:"무지개송어",price:45,rarity:"uncommon",rate:10,speed:2.8,img:"./assets/fish/fish14.png",locations:["river", "lake"],description:"무지갯빛 비늘이 반짝이는 아름다운 송어입니다."},
  "puffer":{name:"복어",price:90,rarity:"epic",rate:5.5,speed:4.0,img:"./assets/fish/fish15.png",locations:["lake", "lava"],description:"위협을 받으면 부풀어 오르는 영웅급 물고기입니다."},
  "pike":{name:"강꼬치고기",price:60,rarity:"rare",rate:7,speed:3.4,img:"./assets/fish/fish16.png",locations:["river"],description:"날카로운 움직임으로 먹잇감을 노리는 희귀 어종입니다."},
  "sardine":{name:"정어리",price:9,rarity:"common",rate:30,speed:1.25,img:"./assets/fish/fish17.png",locations:["pond"],description:"작고 빠르지만 초보 낚시터에서 자주 만날 수 있습니다."},
  "tropicalFish":{name:"열대어",price:70,rarity:"rare",rate:6.5,speed:3.6,img:"./assets/fish/fish18.png",locations:["lake", "deep"],description:"화려한 색감을 가진 희귀 물고기입니다."},
  "sturgeon":{name:"철갑상어",price:110,rarity:"rare",rate:4,speed:3.9,img:"./assets/fish/fish19.png",locations:["lake", "deep"],description:"오래 사는 묵직한 희귀 어종입니다."},
  "mackerel":{name:"고등어",price:20,rarity:"common",rate:22,speed:1.8,img:"./assets/fish/fish20.png",locations:["pond", "lake"],description:"빠르게 떼 지어 다니는 기본 어종입니다."},
  "fish21":{name:"점박이망둑",price:8,rarity:"common",rate:34.0,speed:1.05,img:"./assets/fish/fish21.png",locations:["pond"],description:"점박이망둑은 얕고 잔잔한 물가에서 자주 보이는 친숙한 물고기입니다."},
  "fish22":{name:"푸른피라미",price:11,rarity:"common",rate:32.3,speed:1.17,img:"./assets/fish/fish22.png",locations:["pond"],description:"푸른피라미은 얕고 잔잔한 물가에서 자주 보이는 친숙한 물고기입니다."},
  "fish23":{name:"은빛몰개",price:14,rarity:"common",rate:30.6,speed:1.29,img:"./assets/fish/fish23.png",locations:["pond"],description:"은빛몰개은 얕고 잔잔한 물가에서 자주 보이는 친숙한 물고기입니다."},
  "fish24":{name:"작은가시고기",price:17,rarity:"common",rate:28.9,speed:1.41,img:"./assets/fish/fish24.png",locations:["pond"],description:"작은가시고기은 얕고 잔잔한 물가에서 자주 보이는 친숙한 물고기입니다."},
  "fish25":{name:"초록송사리",price:20,rarity:"common",rate:27.2,speed:1.53,img:"./assets/fish/fish25.png",locations:["pond"],description:"초록송사리은 얕고 잔잔한 물가에서 자주 보이는 친숙한 물고기입니다."},
  "fish26":{name:"노란줄망둑",price:23,rarity:"common",rate:25.5,speed:1.65,img:"./assets/fish/fish26.png",locations:["pond"],description:"노란줄망둑은 얕고 잔잔한 물가에서 자주 보이는 친숙한 물고기입니다."},
  "fish27":{name:"갈색미꾸리",price:26,rarity:"common",rate:23.8,speed:1.77,img:"./assets/fish/fish27.png",locations:["pond"],description:"갈색미꾸리은 얕고 잔잔한 물가에서 자주 보이는 친숙한 물고기입니다."},
  "fish28":{name:"둥근납자루",price:10,rarity:"common",rate:22.1,speed:1.89,img:"./assets/fish/fish28.png",locations:["pond"],description:"둥근납자루은 얕고 잔잔한 물가에서 자주 보이는 친숙한 물고기입니다."},
  "fish29":{name:"흰지느러미피라미",price:13,rarity:"common",rate:34.0,speed:2.01,img:"./assets/fish/fish29.png",locations:["pond"],description:"흰지느러미피라미은 얕고 잔잔한 물가에서 자주 보이는 친숙한 물고기입니다."},
  "fish30":{name:"잔물참붕어",price:16,rarity:"common",rate:32.3,speed:1.05,img:"./assets/fish/fish30.png",locations:["pond"],description:"잔물참붕어은 얕고 잔잔한 물가에서 자주 보이는 친숙한 물고기입니다."},
  "fish31":{name:"모래무지",price:19,rarity:"common",rate:30.6,speed:1.17,img:"./assets/fish/fish31.png",locations:["pond"],description:"모래무지은 얕고 잔잔한 물가에서 자주 보이는 친숙한 물고기입니다."},
  "fish32":{name:"흰눈동자어",price:22,rarity:"common",rate:28.9,speed:1.29,img:"./assets/fish/fish32.png",locations:["pond"],description:"흰눈동자어은 얕고 잔잔한 물가에서 자주 보이는 친숙한 물고기입니다."},
  "fish33":{name:"검은줄버들치",price:25,rarity:"common",rate:27.2,speed:1.41,img:"./assets/fish/fish33.png",locations:["pond"],description:"검은줄버들치은 얕고 잔잔한 물가에서 자주 보이는 친숙한 물고기입니다."},
  "fish34":{name:"연못방울어",price:28,rarity:"common",rate:25.5,speed:1.53,img:"./assets/fish/fish34.png",locations:["pond", "river"],description:"연못방울어은 얕고 잔잔한 물가에서 자주 보이는 친숙한 물고기입니다."},
  "fish35":{name:"풀잎송사리",price:12,rarity:"common",rate:23.8,speed:1.65,img:"./assets/fish/fish35.png",locations:["pond", "river"],description:"풀잎송사리은 얕고 잔잔한 물가에서 자주 보이는 친숙한 물고기입니다."},
  "fish36":{name:"은꼬리멸치",price:15,rarity:"common",rate:22.1,speed:1.77,img:"./assets/fish/fish36.png",locations:["pond", "river"],description:"은꼬리멸치은 얕고 잔잔한 물가에서 자주 보이는 친숙한 물고기입니다."},
  "fish37":{name:"잔줄농어",price:18,rarity:"common",rate:34.0,speed:1.89,img:"./assets/fish/fish37.png",locations:["pond", "river"],description:"잔줄농어은 얕고 잔잔한 물가에서 자주 보이는 친숙한 물고기입니다."},
  "fish38":{name:"홍점망둑",price:21,rarity:"common",rate:32.3,speed:2.01,img:"./assets/fish/fish38.png",locations:["pond", "river"],description:"홍점망둑은 얕고 잔잔한 물가에서 자주 보이는 친숙한 물고기입니다."},
  "fish39":{name:"물풀잉어",price:24,rarity:"common",rate:30.6,speed:1.05,img:"./assets/fish/fish39.png",locations:["pond", "river"],description:"물풀잉어은 얕고 잔잔한 물가에서 자주 보이는 친숙한 물고기입니다."},
  "fish40":{name:"얕은물도미",price:27,rarity:"common",rate:28.9,speed:1.17,img:"./assets/fish/fish40.png",locations:["pond", "river"],description:"얕은물도미은 얕고 잔잔한 물가에서 자주 보이는 친숙한 물고기입니다."},
  "fish41":{name:"푸른줄빙어",price:30,rarity:"common",rate:27.2,speed:1.29,img:"./assets/fish/fish41.png",locations:["pond", "river"],description:"푸른줄빙어은 얕고 잔잔한 물가에서 자주 보이는 친숙한 물고기입니다."},
  "fish42":{name:"노을참붕어",price:14,rarity:"common",rate:25.5,speed:1.41,img:"./assets/fish/fish42.png",locations:["river"],description:"노을참붕어은 얕고 잔잔한 물가에서 자주 보이는 친숙한 물고기입니다."},
  "fish43":{name:"꽃잎금붕어",price:17,rarity:"common",rate:23.8,speed:1.53,img:"./assets/fish/fish43.png",locations:["river"],description:"꽃잎금붕어은 얕고 잔잔한 물가에서 자주 보이는 친숙한 물고기입니다."},
  "fish44":{name:"반점피라미",price:20,rarity:"common",rate:22.1,speed:1.65,img:"./assets/fish/fish44.png",locations:["river"],description:"반점피라미은 얕고 잔잔한 물가에서 자주 보이는 친숙한 물고기입니다."},
  "fish45":{name:"맑은물송사리",price:23,rarity:"common",rate:34.0,speed:1.77,img:"./assets/fish/fish45.png",locations:["river"],description:"맑은물송사리은 얕고 잔잔한 물가에서 자주 보이는 친숙한 물고기입니다."},
  "fish46":{name:"비단잉어",price:32,rarity:"uncommon",rate:17.0,speed:2.0,img:"./assets/fish/fish46.png",locations:["river"],description:"비단잉어은 선명한 색과 빠른 움직임이 특징인 고급 어종입니다."},
  "fish47":{name:"청비늘송어",price:37,rarity:"uncommon",rate:15.9,speed:2.16,img:"./assets/fish/fish47.png",locations:["river"],description:"청비늘송어은 선명한 색과 빠른 움직임이 특징인 고급 어종입니다."},
  "fish48":{name:"붉은지느러미농어",price:42,rarity:"uncommon",rate:14.8,speed:2.32,img:"./assets/fish/fish48.png",locations:["river"],description:"붉은지느러미농어은 선명한 색과 빠른 움직임이 특징인 고급 어종입니다."},
  "fish49":{name:"구름메기",price:47,rarity:"uncommon",rate:13.7,speed:2.48,img:"./assets/fish/fish49.png",locations:["river"],description:"구름메기은 선명한 색과 빠른 움직임이 특징인 고급 어종입니다."},
  "fish50":{name:"보라줄돔",price:52,rarity:"uncommon",rate:12.6,speed:2.64,img:"./assets/fish/fish50.png",locations:["river"],description:"보라줄돔은 선명한 색과 빠른 움직임이 특징인 고급 어종입니다."},
  "fish51":{name:"은하숭어",price:57,rarity:"uncommon",rate:11.5,speed:2.8,img:"./assets/fish/fish51.png",locations:["river"],description:"은하숭어은 선명한 색과 빠른 움직임이 특징인 고급 어종입니다."},
  "fish52":{name:"초승달빙어",price:62,rarity:"uncommon",rate:10.4,speed:2.96,img:"./assets/fish/fish52.png",locations:["river"],description:"초승달빙어은 선명한 색과 빠른 움직임이 특징인 고급 어종입니다."},
  "fish53":{name:"녹색뱀장어",price:67,rarity:"uncommon",rate:17.0,speed:3.12,img:"./assets/fish/fish53.png",locations:["river"],description:"녹색뱀장어은 선명한 색과 빠른 움직임이 특징인 고급 어종입니다."},
  "fish54":{name:"하늘줄피라냐",price:36,rarity:"uncommon",rate:15.9,speed:3.28,img:"./assets/fish/fish54.png",locations:["river"],description:"하늘줄피라냐은 선명한 색과 빠른 움직임이 특징인 고급 어종입니다."},
  "fish55":{name:"파도방어",price:41,rarity:"uncommon",rate:14.8,speed:3.44,img:"./assets/fish/fish55.png",locations:["river"],description:"파도방어은 선명한 색과 빠른 움직임이 특징인 고급 어종입니다."},
  "fish56":{name:"노랑가시복",price:46,rarity:"uncommon",rate:13.7,speed:2.0,img:"./assets/fish/fish56.png",locations:["river", "lake"],description:"노랑가시복은 선명한 색과 빠른 움직임이 특징인 고급 어종입니다."},
  "fish57":{name:"비취가오리",price:51,rarity:"uncommon",rate:12.6,speed:2.16,img:"./assets/fish/fish57.png",locations:["river", "lake"],description:"비취가오리은 선명한 색과 빠른 움직임이 특징인 고급 어종입니다."},
  "fish58":{name:"수정송어",price:56,rarity:"uncommon",rate:11.5,speed:2.32,img:"./assets/fish/fish58.png",locations:["river", "lake"],description:"수정송어은 선명한 색과 빠른 움직임이 특징인 고급 어종입니다."},
  "fish59":{name:"검은등배스",price:61,rarity:"uncommon",rate:10.4,speed:2.48,img:"./assets/fish/fish59.png",locations:["river", "lake"],description:"검은등배스은 선명한 색과 빠른 움직임이 특징인 고급 어종입니다."},
  "fish60":{name:"오렌지도미",price:66,rarity:"uncommon",rate:17.0,speed:2.64,img:"./assets/fish/fish60.png",locations:["river", "lake"],description:"오렌지도미은 선명한 색과 빠른 움직임이 특징인 고급 어종입니다."},
  "fish61":{name:"청록해마어",price:71,rarity:"uncommon",rate:15.9,speed:2.8,img:"./assets/fish/fish61.png",locations:["river", "lake"],description:"청록해마어은 선명한 색과 빠른 움직임이 특징인 고급 어종입니다."},
  "fish62":{name:"은비늘참치",price:40,rarity:"uncommon",rate:14.8,speed:2.96,img:"./assets/fish/fish62.png",locations:["river", "lake"],description:"은비늘참치은 선명한 색과 빠른 움직임이 특징인 고급 어종입니다."},
  "fish63":{name:"달빛연어",price:45,rarity:"uncommon",rate:13.7,speed:3.12,img:"./assets/fish/fish63.png",locations:["river", "lake"],description:"달빛연어은 선명한 색과 빠른 움직임이 특징인 고급 어종입니다."},
  "fish64":{name:"산호나비어",price:50,rarity:"uncommon",rate:12.6,speed:3.28,img:"./assets/fish/fish64.png",locations:["lake"],description:"산호나비어은 선명한 색과 빠른 움직임이 특징인 고급 어종입니다."},
  "fish65":{name:"가을무늬잉어",price:55,rarity:"uncommon",rate:11.5,speed:3.44,img:"./assets/fish/fish65.png",locations:["lake"],description:"가을무늬잉어은 선명한 색과 빠른 움직임이 특징인 고급 어종입니다."},
  "fish66":{name:"푸른가시쏨뱅이",price:60,rarity:"uncommon",rate:10.4,speed:2.0,img:"./assets/fish/fish66.png",locations:["lake"],description:"푸른가시쏨뱅이은 선명한 색과 빠른 움직임이 특징인 고급 어종입니다."},
  "fish67":{name:"보석눈고기",price:65,rarity:"uncommon",rate:17.0,speed:2.16,img:"./assets/fish/fish67.png",locations:["lake"],description:"보석눈고기은 선명한 색과 빠른 움직임이 특징인 고급 어종입니다."},
  "fish68":{name:"바람꼬리농어",price:70,rarity:"uncommon",rate:15.9,speed:2.32,img:"./assets/fish/fish68.png",locations:["lake"],description:"바람꼬리농어은 선명한 색과 빠른 움직임이 특징인 고급 어종입니다."},
  "fish69":{name:"연분홍돔",price:75,rarity:"uncommon",rate:14.8,speed:2.48,img:"./assets/fish/fish69.png",locations:["lake"],description:"연분홍돔은 선명한 색과 빠른 움직임이 특징인 고급 어종입니다."},
  "fish70":{name:"밤안개미꾸리",price:44,rarity:"uncommon",rate:13.7,speed:2.64,img:"./assets/fish/fish70.png",locations:["lake"],description:"밤안개미꾸리은 선명한 색과 빠른 움직임이 특징인 고급 어종입니다."},
  "fish71":{name:"황금비늘잉어",price:82,rarity:"rare",rate:7.8,speed:3.1,img:"./assets/fish/fish71.png",locations:["lake"],description:"황금비늘잉어은 빛나는 비늘과 민첩한 움직임으로 유명한 희귀 어종입니다."},
  "fish72":{name:"사파이어참치",price:92,rarity:"rare",rate:7.18,speed:3.28,img:"./assets/fish/fish72.png",locations:["lake"],description:"사파이어참치은 빛나는 비늘과 민첩한 움직임으로 유명한 희귀 어종입니다."},
  "fish73":{name:"루비복어",price:102,rarity:"rare",rate:6.56,speed:3.46,img:"./assets/fish/fish73.png",locations:["lake"],description:"루비복어은 빛나는 비늘과 민첩한 움직임으로 유명한 희귀 어종입니다."},
  "fish74":{name:"자수정송어",price:112,rarity:"rare",rate:5.94,speed:3.64,img:"./assets/fish/fish74.png",locations:["lake"],description:"자수정송어은 빛나는 비늘과 민첩한 움직임으로 유명한 희귀 어종입니다."},
  "fish75":{name:"청룡꼬치고기",price:122,rarity:"rare",rate:5.32,speed:3.82,img:"./assets/fish/fish75.png",locations:["lake"],description:"청룡꼬치고기은 빛나는 비늘과 민첩한 움직임으로 유명한 희귀 어종입니다."},
  "fish76":{name:"백은철갑상어",price:132,rarity:"rare",rate:4.7,speed:4.0,img:"./assets/fish/fish76.png",locations:["lake"],description:"백은철갑상어은 빛나는 비늘과 민첩한 움직임으로 유명한 희귀 어종입니다."},
  "fish77":{name:"무지개비단어",price:142,rarity:"rare",rate:7.8,speed:4.18,img:"./assets/fish/fish77.png",locations:["lake"],description:"무지개비단어은 빛나는 비늘과 민첩한 움직임으로 유명한 희귀 어종입니다."},
  "fish78":{name:"번개피라냐",price:90,rarity:"rare",rate:7.18,speed:4.36,img:"./assets/fish/fish78.png",locations:["lake"],description:"번개피라냐은 빛나는 비늘과 민첩한 움직임으로 유명한 희귀 어종입니다."},
  "fish79":{name:"얼음지느러미돔",price:100,rarity:"rare",rate:6.56,speed:4.54,img:"./assets/fish/fish79.png",locations:["lake"],description:"얼음지느러미돔은 빛나는 비늘과 민첩한 움직임으로 유명한 희귀 어종입니다."},
  "fish80":{name:"태양가오리",price:110,rarity:"rare",rate:5.94,speed:3.1,img:"./assets/fish/fish80.png",locations:["lake", "deep"],description:"태양가오리은 빛나는 비늘과 민첩한 움직임으로 유명한 희귀 어종입니다."},
  "fish81":{name:"달그림자메기",price:120,rarity:"rare",rate:5.32,speed:3.28,img:"./assets/fish/fish81.png",locations:["lake", "deep"],description:"달그림자메기은 빛나는 비늘과 민첩한 움직임으로 유명한 희귀 어종입니다."},
  "fish82":{name:"심홍산호어",price:130,rarity:"rare",rate:4.7,speed:3.46,img:"./assets/fish/fish82.png",locations:["lake", "deep"],description:"심홍산호어은 빛나는 비늘과 민첩한 움직임으로 유명한 희귀 어종입니다."},
  "fish83":{name:"수정비늘장어",price:140,rarity:"rare",rate:7.8,speed:3.64,img:"./assets/fish/fish83.png",locations:["lake", "deep"],description:"수정비늘장어은 빛나는 비늘과 민첩한 움직임으로 유명한 희귀 어종입니다."},
  "fish84":{name:"흑진주복어",price:150,rarity:"rare",rate:7.18,speed:3.82,img:"./assets/fish/fish84.png",locations:["lake", "deep"],description:"흑진주복어은 빛나는 비늘과 민첩한 움직임으로 유명한 희귀 어종입니다."},
  "fish85":{name:"별빛연어",price:98,rarity:"rare",rate:6.56,speed:4.0,img:"./assets/fish/fish85.png",locations:["lake", "deep"],description:"별빛연어은 빛나는 비늘과 민첩한 움직임으로 유명한 희귀 어종입니다."},
  "fish86":{name:"백야고등어",price:108,rarity:"rare",rate:5.94,speed:4.18,img:"./assets/fish/fish86.png",locations:["lake", "deep"],description:"백야고등어은 빛나는 비늘과 민첩한 움직임으로 유명한 희귀 어종입니다."},
  "fish87":{name:"푸른화살참치",price:118,rarity:"rare",rate:5.32,speed:4.36,img:"./assets/fish/fish87.png",locations:["river", "deep"],description:"푸른화살참치은 빛나는 비늘과 민첩한 움직임으로 유명한 희귀 어종입니다."},
  "fish88":{name:"황혼나비어",price:128,rarity:"rare",rate:4.7,speed:4.54,img:"./assets/fish/fish88.png",locations:["river", "deep"],description:"황혼나비어은 빛나는 비늘과 민첩한 움직임으로 유명한 희귀 어종입니다."},
  "fish89":{name:"용눈송사리",price:138,rarity:"rare",rate:7.8,speed:3.1,img:"./assets/fish/fish89.png",locations:["river", "deep"],description:"용눈송사리은 빛나는 비늘과 민첩한 움직임으로 유명한 희귀 어종입니다."},
  "fish90":{name:"청옥쏨뱅이",price:148,rarity:"rare",rate:7.18,speed:3.28,img:"./assets/fish/fish90.png",locations:["river", "deep"],description:"청옥쏨뱅이은 빛나는 비늘과 민첩한 움직임으로 유명한 희귀 어종입니다."},
  "fish91":{name:"유리꼬리돔",price:158,rarity:"rare",rate:6.56,speed:3.46,img:"./assets/fish/fish91.png",locations:["river", "deep"],description:"유리꼬리돔은 빛나는 비늘과 민첩한 움직임으로 유명한 희귀 어종입니다."},
  "fish92":{name:"눈꽃빙어",price:106,rarity:"rare",rate:5.94,speed:3.64,img:"./assets/fish/fish92.png",locations:["river", "deep"],description:"눈꽃빙어은 빛나는 비늘과 민첩한 움직임으로 유명한 희귀 어종입니다."},
  "fish93":{name:"심해아귀",price:185,rarity:"epic",rate:4.0,speed:4.2,img:"./assets/fish/fish93.png",locations:["deep"],description:"심해아귀은 강한 기운을 품은 영웅급 물고기입니다."},
  "fish94":{name:"유령장어",price:207,rarity:"epic",rate:3.55,speed:4.42,img:"./assets/fish/fish94.png",locations:["deep"],description:"유령장어은 강한 기운을 품은 영웅급 물고기입니다."},
  "fish95":{name:"용비늘어",price:229,rarity:"epic",rate:3.1,speed:4.64,img:"./assets/fish/fish95.png",locations:["deep"],description:"용비늘어은 강한 기운을 품은 영웅급 물고기입니다."},
  "fish96":{name:"마력복어",price:251,rarity:"epic",rate:2.65,speed:4.86,img:"./assets/fish/fish96.png",locations:["deep"],description:"마력복어은 강한 기운을 품은 영웅급 물고기입니다."},
  "fish97":{name:"크리스탈고래",price:273,rarity:"epic",rate:2.2,speed:5.08,img:"./assets/fish/fish97.png",locations:["deep"],description:"크리스탈고래은 강한 기운을 품은 영웅급 물고기입니다."},
  "fish98":{name:"폭풍참치",price:295,rarity:"epic",rate:4.0,speed:5.3,img:"./assets/fish/fish98.png",locations:["deep"],description:"폭풍참치은 강한 기운을 품은 영웅급 물고기입니다."},
  "fish99":{name:"화염가오리",price:203,rarity:"epic",rate:3.55,speed:5.52,img:"./assets/fish/fish99.png",locations:["deep"],description:"화염가오리은 강한 기운을 품은 영웅급 물고기입니다."},
  "fish100":{name:"서리해마",price:225,rarity:"epic",rate:3.1,speed:5.74,img:"./assets/fish/fish100.png",locations:["lava"],description:"서리해마은 강한 기운을 품은 영웅급 물고기입니다."},
  "fish101":{name:"그림자문어",price:247,rarity:"epic",rate:2.65,speed:4.2,img:"./assets/fish/fish101.png",locations:["lava"],description:"그림자문어은 강한 기운을 품은 영웅급 물고기입니다."},
  "fish102":{name:"번개장어",price:269,rarity:"epic",rate:2.2,speed:4.42,img:"./assets/fish/fish102.png",locations:["lava"],description:"번개장어은 강한 기운을 품은 영웅급 물고기입니다."},
  "fish103":{name:"심연나비어",price:291,rarity:"epic",rate:4.0,speed:4.64,img:"./assets/fish/fish103.png",locations:["lava"],description:"심연나비어은 강한 기운을 품은 영웅급 물고기입니다."},
  "fish104":{name:"용암상어",price:313,rarity:"epic",rate:3.55,speed:4.86,img:"./assets/fish/fish104.png",locations:["lava"],description:"용암상어은 강한 기운을 품은 영웅급 물고기입니다."},
  "fish105":{name:"오로라철갑상어",price:221,rarity:"epic",rate:3.1,speed:5.08,img:"./assets/fish/fish105.png",locations:["lava"],description:"오로라철갑상어은 강한 기운을 품은 영웅급 물고기입니다."},
  "fish106":{name:"별무늬고래",price:243,rarity:"epic",rate:2.65,speed:5.3,img:"./assets/fish/fish106.png",locations:["lava", "deep"],description:"별무늬고래은 강한 기운을 품은 영웅급 물고기입니다."},
  "fish107":{name:"마녀복어",price:265,rarity:"epic",rate:2.2,speed:5.52,img:"./assets/fish/fish107.png",locations:["lava", "deep"],description:"마녀복어은 강한 기운을 품은 영웅급 물고기입니다."},
  "fish108":{name:"고대산호어",price:287,rarity:"epic",rate:4.0,speed:5.74,img:"./assets/fish/fish108.png",locations:["lava", "deep"],description:"고대산호어은 강한 기운을 품은 영웅급 물고기입니다."},
  "fish109":{name:"블랙홀잉어",price:309,rarity:"epic",rate:3.55,speed:4.2,img:"./assets/fish/fish109.png",locations:["lava", "deep"],description:"블랙홀잉어은 강한 기운을 품은 영웅급 물고기입니다."},
  "fish110":{name:"황금고래",price:480,rarity:"legend",rate:1.15,speed:5.2,img:"./assets/fish/fish110.png",locations:["deep"],description:"황금고래은 전설 속에서만 전해지던 환상의 물고기입니다."},
  "fish111":{name:"레비아탄치어",price:565,rarity:"legend",rate:1.06,speed:5.38,img:"./assets/fish/fish111.png",locations:["deep"],description:"레비아탄치어은 전설 속에서만 전해지던 환상의 물고기입니다."},
  "fish112":{name:"드래곤피쉬",price:650,rarity:"legend",rate:0.97,speed:5.56,img:"./assets/fish/fish112.png",locations:["deep"],description:"드래곤피쉬은 전설 속에서만 전해지던 환상의 물고기입니다."},
  "fish113":{name:"천공가오리",price:735,rarity:"legend",rate:0.88,speed:5.74,img:"./assets/fish/fish113.png",locations:["lava"],description:"천공가오리은 전설 속에서만 전해지던 환상의 물고기입니다."},
  "fish114":{name:"심연의왕고래",price:820,rarity:"legend",rate:0.79,speed:5.92,img:"./assets/fish/fish114.png",locations:["lava"],description:"심연의왕고래은 전설 속에서만 전해지던 환상의 물고기입니다."},
  "fish115":{name:"태양룡어",price:905,rarity:"legend",rate:0.7,speed:6.1,img:"./assets/fish/fish115.png",locations:["lava"],description:"태양룡어은 전설 속에서만 전해지던 환상의 물고기입니다."},
  "fish116":{name:"달빛크라켄",price:990,rarity:"legend",rate:0.61,speed:6.28,img:"./assets/fish/fish116.png",locations:["lava", "deep"],description:"달빛크라켄은 전설 속에서만 전해지던 환상의 물고기입니다."},
  "fish117":{name:"세계수잉어",price:1075,rarity:"legend",rate:0.52,speed:6.46,img:"./assets/fish/fish117.png",locations:["lava", "deep"],description:"세계수잉어은 전설 속에서만 전해지던 환상의 물고기입니다."}
};

var RARITY_FRAMES = {
  common:"./assets/frames/frame_common.png",
  uncommon:"./assets/frames/frame_uncommon.png",
  rare:"./assets/frames/frame_rare.png",
  epic:"./assets/frames/frame_epic.png",
  legend:"./assets/frames/frame_legend.png"
};

var FISH_SIZES = {
  small:{name:"작은",rate:24,priceMul:.8,difficulty:.9},
  normal:{name:"보통",rate:42,priceMul:1,difficulty:1},
  big:{name:"큰",rate:22,priceMul:1.4,difficulty:1.12},
  huge:{name:"거대",rate:9,priceMul:2,difficulty:1.28},
  monster:{name:"괴물급",rate:3,priceMul:3.5,difficulty:1.55}
};

var LOCATIONS = {
  pond:{name:"초보 연못",emoji:"🌱",card:"./assets/locations/cards/pond.png",scene:"./assets/locations/scenes/pond.png",requiredRod:1,fishes:["flounder", "perch", "carp", "crucian", "sardine", "mackerel", "fish21", "fish22", "fish23", "fish24", "fish25", "fish26", "fish27", "fish28", "fish29", "fish30", "fish31", "fish32", "fish33", "fish34", "fish35", "fish36", "fish37", "fish38", "fish39", "fish40", "fish41"]},
  river:{name:"강",emoji:"🏞️",card:"./assets/locations/cards/river.png",scene:"./assets/locations/scenes/river.png",requiredRod:2,fishes:["bass", "perch", "trout", "carp", "grayMullet", "rainbowTrout", "pike", "fish34", "fish35", "fish36", "fish37", "fish38", "fish39", "fish40", "fish41", "fish42", "fish43", "fish44", "fish45", "fish46", "fish47", "fish48", "fish49", "fish50", "fish51", "fish52", "fish53", "fish54", "fish55", "fish56", "fish57", "fish58", "fish59", "fish60", "fish61", "fish62", "fish63", "fish87", "fish88", "fish89", "fish90", "fish91", "fish92"]},
  lake:{name:"호수",emoji:"🌅",card:"./assets/locations/cards/lake.png",scene:"./assets/locations/scenes/lake.png",requiredRod:3,fishes:["tuna", "bass", "goldenCarp", "rainbowTrout", "puffer", "tropicalFish", "sturgeon", "mackerel", "fish56", "fish57", "fish58", "fish59", "fish60", "fish61", "fish62", "fish63", "fish64", "fish65", "fish66", "fish67", "fish68", "fish69", "fish70", "fish71", "fish72", "fish73", "fish74", "fish75", "fish76", "fish77", "fish78", "fish79", "fish80", "fish81", "fish82", "fish83", "fish84", "fish85", "fish86"]},
  lava:{name:"용암지대",emoji:"🌋",card:"./assets/locations/cards/lava.png",scene:"./assets/locations/scenes/lava.png",requiredRod:5,fishes:["sunfish", "lavaEel", "goldenCarp", "ghostFish", "puffer", "fish100", "fish101", "fish102", "fish103", "fish104", "fish105", "fish106", "fish107", "fish108", "fish109", "fish113", "fish114", "fish115", "fish116", "fish117"]},
  deep:{name:"심해",emoji:"🌊",card:"./assets/locations/cards/deep.png",scene:"./assets/locations/scenes/deep.png",requiredRod:6,fishes:["octopus", "sunfish", "tuna", "ghostFish", "tropicalFish", "sturgeon", "fish80", "fish81", "fish82", "fish83", "fish84", "fish85", "fish86", "fish87", "fish88", "fish89", "fish90", "fish91", "fish92", "fish93", "fish94", "fish95", "fish96", "fish97", "fish98", "fish99", "fish106", "fish107", "fish108", "fish109", "fish110", "fish111", "fish112", "fish116", "fish117"]}
};

var SHOP20_ASSETS={baitBasic:"./assets/icons/bait_basic.png",baitRare:"./assets/icons/bait_rare.png",baitLegend:"./assets/icons/bait_legend.png",rodWood:"./assets/icons/rod_wood.png",rodIron:"./assets/icons/rod_iron.png",rodGold:"./assets/icons/rod_gold.png",rodDragon:"./assets/icons/rod_dragon.png",chestWood:"./assets/icons/chest_wood.png",chestSilver:"./assets/icons/chest_silver.png",chestGold:"./assets/icons/chest_gold.png",chestLegend:"./assets/icons/chest_legend.png",coin:"./assets/icons/coin.png",gem:"./assets/icons/gem.png",crown:"./assets/icons/crown.png",star:"./assets/icons/star.png"};
var SHOP20_ITEMS={bait:[{id:"bait_basic",name:"일반 미끼",icon:SHOP20_ASSETS.baitBasic,price:30,currency:"gold",qty:5,rarity:"common",desc:"기본 미끼 5개를 획득합니다.",effect:"낚시 5회 가능"},{id:"bait_rare",name:"고급 미끼",icon:SHOP20_ASSETS.baitRare,price:120,currency:"gold",qty:10,rarity:"rare",desc:"고급 미끼 10개를 획득합니다.",effect:"희귀 +10% / 영웅 +4%"},{id:"bait_legend",name:"전설 미끼",icon:SHOP20_ASSETS.baitLegend,price:650,currency:"gold",qty:20,rarity:"legend",desc:"전설 미끼 20개를 획득합니다.",effect:"희귀 +25% / 전설 +5%"}],rod:[{id:"rod_wood",name:"나무 낚싯대",icon:SHOP20_ASSETS.rodWood,price:0,level:1,rarity:"common",desc:"초보 낚시꾼의 기본 장비입니다.",effect:"기본 장비"},{id:"rod_iron",name:"강철 낚싯대",icon:SHOP20_ASSETS.rodIron,price:450,level:3,rarity:"uncommon",desc:"강과 호수 낚시에 안정적입니다.",effect:"판매가 +10%"},{id:"rod_gold",name:"황금 낚싯대",icon:SHOP20_ASSETS.rodGold,price:1800,level:5,rarity:"rare",desc:"고급 낚시터 진입에 유리합니다.",effect:"판매가 +25%"},{id:"rod_dragon",name:"드래곤 낚싯대",icon:SHOP20_ASSETS.rodDragon,price:6500,level:7,rarity:"legend",desc:"전설 낚시꾼을 위한 장비입니다.",effect:"판매가 +50% / 전설 확률 증가"}],chest:[{id:"chest_wood",name:"나무 상자",icon:SHOP20_ASSETS.chestWood,price:100,rarity:"common",desc:"작은 보상이 들어있는 상자입니다.",effect:"골드/미끼/일반 물고기"},{id:"chest_silver",name:"은 상자",icon:SHOP20_ASSETS.chestSilver,price:500,rarity:"rare",desc:"더 좋은 보상을 기대할 수 있습니다.",effect:"골드/미끼/희귀 물고기"},{id:"chest_gold",name:"황금 상자",icon:SHOP20_ASSETS.chestGold,price:2500,rarity:"epic",desc:"높은 가치의 보상이 들어있습니다.",effect:"대량 골드/미끼/보석"},{id:"chest_legend",name:"전설 상자",icon:SHOP20_ASSETS.chestLegend,price:10000,rarity:"legend",desc:"전설급 보상을 노릴 수 있는 상자입니다.",effect:"보석/전설 물고기 확률"}],cosmetic:[{id:"profile_gold",name:"골드 프로필",icon:SHOP20_ASSETS.crown,price:3000,rarity:"rare",desc:"프로필에 황금 장식 효과를 추가합니다.",effect:"아바타 황금 테두리"},{id:"name_star",name:"별빛 칭호",icon:SHOP20_ASSETS.star,price:1200,rarity:"uncommon",desc:"상단 프로필에 별빛 칭호를 등록합니다.",effect:"칭호: 별빛 낚시꾼"}]};
var EQUIP_BAITS={basic:{id:"basic",name:"일반 미끼",icon:SHOP20_ASSETS.baitBasic,effect:"기본 확률",rareBonus:0,epicBonus:0,legendBonus:0},rare:{id:"rare",name:"고급 미끼",icon:SHOP20_ASSETS.baitRare,effect:"희귀 +10% / 영웅 +4%",rareBonus:8,epicBonus:4,legendBonus:.8},legend:{id:"legend",name:"전설 미끼",icon:SHOP20_ASSETS.baitLegend,effect:"희귀 +25% / 전설 +5%",rareBonus:18,epicBonus:8,legendBonus:3.5}};
var EQUIP_RODS={rod_wood:{id:"rod_wood",name:"나무 낚싯대",icon:SHOP20_ASSETS.rodWood,level:1,effect:"기본 장비",sellMul:1,legendBonus:0},rod_iron:{id:"rod_iron",name:"강철 낚싯대",icon:SHOP20_ASSETS.rodIron,level:3,effect:"판매가 +10%",sellMul:1.1,legendBonus:.3},rod_gold:{id:"rod_gold",name:"황금 낚싯대",icon:SHOP20_ASSETS.rodGold,level:5,effect:"판매가 +25%",sellMul:1.25,legendBonus:.8},rod_dragon:{id:"rod_dragon",name:"드래곤 낚싯대",icon:SHOP20_ASSETS.rodDragon,level:7,effect:"판매가 +50% / 전설 확률 증가",sellMul:1.5,legendBonus:2}};
var COSMETIC_ITEMS={profile_none:{id:"profile_none",type:"profile",name:"기본 프로필",icon:SHOP20_ASSETS.crown,effect:"기본 테두리"},profile_gold:{id:"profile_gold",type:"profile",name:"골드 프로필",icon:SHOP20_ASSETS.crown,effect:"아바타 황금 테두리"},title_none:{id:"title_none",type:"title",name:"기본 칭호",icon:SHOP20_ASSETS.star,effect:"기본 칭호"},name_star:{id:"name_star",type:"title",name:"별빛 칭호",icon:SHOP20_ASSETS.star,effect:"닉네임 별빛 효과"}};
var BOSS_GACHA_ASSETS={mailbox:"./assets/icons/mailbox.png",legendaryBg:"./assets/effects/legendary_bg.png",mythicBg:"./assets/effects/mythic_bg.png"};
var BOSS_REWARD_ASSETS={chest_kraken:"./assets/chests/boss_chest_kraken.png",chest_leviathan:"./assets/chests/boss_chest_leviathan.png",chest_phoenix:"./assets/chests/boss_chest_dragon.png",frame_kraken:"./assets/cosmetics/frame_kraken.png",frame_leviathan:"./assets/cosmetics/frame_leviathan.png",frame_phoenix:"./assets/cosmetics/frame_phoenix.png",rod_kraken:"./assets/rods/rod_kraken.png",rod_leviathan:"./assets/rods/rod_leviathan.png",rod_phoenix:"./assets/rods/rod_phoenix.png"};
Object.assign(EQUIP_RODS,{rod_kraken:{id:"rod_kraken",name:"크라켄 낚싯대",icon:BOSS_REWARD_ASSETS.rod_kraken,level:8,effect:"전설 확률 +3% / 보스 데미지 +10%",sellMul:1.35,legendBonus:3,bossMul:1.1},rod_leviathan:{id:"rod_leviathan",name:"레비아탄 낚싯대",icon:BOSS_REWARD_ASSETS.rod_leviathan,level:9,effect:"판매가 +35% / 보스 데미지 +15%",sellMul:1.35,legendBonus:1.5,bossMul:1.15},rod_phoenix:{id:"rod_phoenix",name:"피닉스 낚싯대",icon:BOSS_REWARD_ASSETS.rod_phoenix,level:10,effect:"보스 데미지 +30% / 치명타 강화",sellMul:1.25,legendBonus:2,bossMul:1.3,critMul:.25}});
Object.assign(COSMETIC_ITEMS,{frame_kraken:{id:"frame_kraken",type:"profile",name:"크라켄 프레임",icon:BOSS_REWARD_ASSETS.frame_kraken,effect:"심해 보스 장식"},frame_leviathan:{id:"frame_leviathan",type:"profile",name:"레비아탄 프레임",icon:BOSS_REWARD_ASSETS.frame_leviathan,effect:"고대 해룡 장식"},frame_phoenix:{id:"frame_phoenix",type:"profile",name:"피닉스 프레임",icon:BOSS_REWARD_ASSETS.frame_phoenix,effect:"불멸의 불꽃 장식"}});
var BOSS_CHEST_INFO={kraken:{id:"kraken",name:"크라켄 상자",icon:BOSS_REWARD_ASSETS.chest_kraken,token:"kraken",tokenName:"크라켄 토큰",gold:[650,1600],bait:[8,18],tokenRange:[2,5],frame:"frame_kraken",rod:"rod_kraken",frameRate:.017,rodRate:.003},leviathan:{id:"leviathan",name:"레비아탄 상자",icon:BOSS_REWARD_ASSETS.chest_leviathan,token:"leviathan",tokenName:"레비아탄 토큰",gold:[900,2300],bait:[10,24],tokenRange:[3,7],frame:"frame_leviathan",rod:"rod_leviathan",frameRate:.025,rodRate:.005},phoenix:{id:"phoenix",name:"심해룡 상자",icon:BOSS_REWARD_ASSETS.chest_phoenix,token:"phoenix",tokenName:"심해룡 토큰",gold:[1200,3200],bait:[12,30],tokenRange:[4,9],frame:"frame_phoenix",rod:"rod_phoenix",frameRate:.04,rodRate:.01}};


// Accessory 1.0 - 보스 장신구 데이터
var ACCESSORY_ITEMS={
  kraken_ring:{id:'kraken_ring',slot:'ring',set:'kraken',name:'크라켄 촉수 반지',icon:'./assets/accessories/kraken_ring.png',rarity:'rare',marketPrice:18000,desc:'크라켄 촉수의 힘이 감긴 반지입니다.',effect:'보스 딜 +5%',effects:{bossDamage:.05}},
  kraken_eye_necklace:{id:'kraken_eye_necklace',slot:'necklace',set:'kraken',name:'크라켄의 눈 목걸이',icon:'./assets/accessories/kraken_eye_necklace.png',rarity:'epic',marketPrice:28000,desc:'먹물 속에서도 흐름을 읽게 해주는 눈동자입니다.',effect:'먹물 지속시간 -30%',effects:{inkResist:.30}},
  kraken_heart_relic:{id:'kraken_heart_relic',slot:'relic',set:'kraken',name:'크라켄 심장 유물',icon:'./assets/accessories/kraken_heart_relic.png',rarity:'legend',marketPrice:52000,desc:'심해의 심장이 봉인된 강력한 유물입니다.',effect:'보스 딜 +10%',effects:{bossDamage:.10}},

  storm_compass:{id:'storm_compass',slot:'relic',set:'leviathan',name:'폭풍의 나침반',icon:'./assets/accessories/storm_compass.png',rarity:'epic',marketPrice:30000,desc:'레비아탄의 폭풍 속에서 방향을 잃지 않게 합니다.',effect:'폭풍 효과 -30%',effects:{stormResist:.30}},
  leviathan_pearl:{id:'leviathan_pearl',slot:'necklace',set:'leviathan',name:'심해 진주 목걸이',icon:'./assets/accessories/leviathan_pearl.png',rarity:'rare',marketPrice:24000,desc:'깊은 바다의 대물을 끌어당기는 진주입니다.',effect:'대형 물고기 확률 +5%',effects:{bigFishBonus:.05}},
  leviathan_scale_relic:{id:'leviathan_scale_relic',slot:'relic',set:'leviathan',name:'레비아탄 비늘 유물',icon:'./assets/accessories/leviathan_scale_relic.png',rarity:'legend',marketPrice:58000,desc:'고대 해룡의 비늘로 만든 유물입니다.',effect:'보스 딜 +15%',effects:{bossDamage:.15}},

  ancient_core:{id:'ancient_core',slot:'relic',set:'phoenix',name:'고대 코어',icon:'./assets/accessories/ancient_core.png',rarity:'legend',marketPrice:62000,desc:'심해룡의 전자기 교란을 약화시키는 코어입니다.',effect:'전자기 교란 저항 +35%',effects:{reverseResist:.35}},
  abyss_gem:{id:'abyss_gem',slot:'ring',set:'phoenix',name:'심연의 보석 반지',icon:'./assets/accessories/abyss_gem.png',rarity:'mythic',marketPrice:95000,desc:'심연의 기운이 전설 물고기를 부릅니다.',effect:'전설 확률 +2%',effects:{legendBonus:2}},
  dragon_fang_relic:{id:'dragon_fang_relic',slot:'necklace',set:'phoenix',name:'용의 송곳니 목걸이',icon:'./assets/accessories/dragon_fang_relic.png',rarity:'epic',marketPrice:36000,desc:'날카로운 송곳니의 기운으로 보스를 더 강하게 압박합니다.',effect:'보스 딜 +20%',effects:{bossDamage:.20}},

  lucky_coin:{id:'lucky_coin',slot:'ring',set:'common',name:'행운의 동전 반지',icon:'./assets/accessories/lucky_coin.png',rarity:'rare',marketPrice:20000,desc:'작은 행운이 낚시 보상을 조금씩 끌어올립니다.',effect:'골드 획득 +5%',effects:{goldBonus:.05}},
  golden_fish_charm:{id:'golden_fish_charm',slot:'necklace',set:'common',name:'황금 물고기 부적',icon:'./assets/accessories/golden_fish_charm.png',rarity:'legend',marketPrice:55000,desc:'희귀한 물고기의 기운을 담은 부적입니다.',effect:'대형 물고기 확률 +8%',effects:{bigFishBonus:.08}},
  ocean_king_crown:{id:'ocean_king_crown',slot:'relic',set:'common',name:'바다왕의 왕관 유물',icon:'./assets/accessories/ocean_king_crown.png',rarity:'mythic',marketPrice:120000,desc:'바다의 왕에게 인정받은 낚시꾼의 상징입니다.',effect:'보스 딜 +10% / 전설 확률 +1%',effects:{bossDamage:.10,legendBonus:1}}
};

var ACCESSORY_DROPS={
  kraken:['kraken_ring','kraken_eye_necklace','kraken_heart_relic','lucky_coin'],
  leviathan:['leviathan_pearl','storm_compass','leviathan_scale_relic','golden_fish_charm'],
  phoenix:['dragon_fang_relic','ancient_core','abyss_gem','ocean_king_crown']
};
