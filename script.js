function omikuji() {
    const unsei = [
        "大吉",
        "中吉",
        "小吉",

    ];

const daikichi = [
       "とんかつの衣がはがしやすいかも",
       "まわりの人が優しくしてくれそう!!",
       "コキアがめっちゃかわいいよ",
       "好きな人への好感度上昇率12.5%増加",
       "ラッキーアイテムは他人を信じる心!!",
       "ラッキーパーソンは噓を簡単に信じる人!!",
       "「ちぇこ―」、「こいめで～」を多用するといいよ",
       "なんかわからんけど、一回は耐えるよ"
]

const chuukichi = [
       "いつもより多めに酸素を吸えるかも",
       "たぶんいつもより健康だよ",
       "コキアがかなりかわいいよ",
       "他のカップルが爆散しやすいかも",
       "ラッキーアイテムは匂い付き消しゴム!!",
       "ラッキーパーソンは猫をかぶっている人!!",
       "他人に共感していこう!! (わかんの)",
       "じゃんけんで相手がチョキをだす確率が2.3%上昇"
       
]

const shokichi = [
       "普段よりも眠たいよ",
       "自分で気づかず相手を傷つけちゃうよ（確定事項）",
       "コキアがかわいいよ",
       "好きな人の機嫌がちょっとわるいよ",
       "ラッキーアイテムは宮城県!!",
       "ラッキーパーソンなんていねぇよ",
       "はい、失格～(笑)",
       "物の落としやすさが36%上昇"

       
]



    const random = unsei [Math.floor(Math.random() * unsei.length)];

    const randomDaikichi = daikichi[Math.floor(Math.random() * daikichi.length)];
    const randomChuukichi = chuukichi[Math.floor(Math.random() * chuukichi.length)];
    const randomShokichi = shokichi[Math.floor(Math.random() * shokichi.length)];   

    if (random === "大吉") {
        document.getElementById("kokia-image").src = "88_20260926204620.png";

        document.getElementById("message-2").textContent = randomDaikichi;
  
    }
    if (random === "中吉") {
        document.getElementById("kokia-image").src = "91_20260926204522.png";

        document.getElementById("message-2").textContent = randomChuukichi;
    }
    if (random === "小吉") {
        document.getElementById("kokia-image").src = "89_20260926204612.png";

        document.getElementById("message-2").textContent = randomShokichi;
    }

}