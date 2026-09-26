function omikuji() {
    const unsei = [
        "大吉",
        "中吉",
        "小吉",

    ];

    const random = unsei [Math.floor(Math.random() * unsei.length)];

    if (random === "大吉") {
        document.getElementById("kokia-image").src = "88_20260926204620.png";
    }
    if (random === "中吉") {
        document.getElementById("kokia-image").src = "91_20260926204522.png";
    }
    if (random === "小吉") {
        document.getElementById("kokia-image").src = "89_20260926204612.png";
    }
}