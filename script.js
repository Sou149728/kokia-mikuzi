function omikuji() {
    const unsei = [
        "大吉",
        "中吉",
        "小吉",

    ];

const daikichi = [
       "とんかつの衣がはがしやすいかも",
       "まわりの人が優しくしてくれそう！！",
       "コキアがめっちゃかわいいよ"
]

const chuukichi = [
       "いつもより多めに酸素を吸えるかも",
       "たぶんいつもより健康だよ",
       "コキアがかなりかわいいよ"
]

const shokichi = [
       "普段よりも眠たいよ",
       "自分で気づかず相手を傷つけちゃうよ（確定事項）",
       "コキアがかわいいよ"
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