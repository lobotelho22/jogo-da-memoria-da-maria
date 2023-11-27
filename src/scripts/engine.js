const emojis = [
    '<img src="src/images/maria_01.png" alt="foto de Maria Eduarda">',
    '<img src="src/images/maria_01.png" alt="foto de Maria Eduarda">',
    '<img src="src/images/maria_02.png" alt="foto de Maria Eduarda">',
    '<img src="src/images/maria_02.png" alt="foto de Maria Eduarda">',
    '<img src="src/images/maria_03.png" alt="foto de Maria Eduarda">',
    '<img src="src/images/maria_03.png" alt="foto de Maria Eduarda">',
    '<img src="src/images/maria_04.png" alt="foto de Maria Eduarda">',
    '<img src="src/images/maria_04.png" alt="foto de Maria Eduarda">',
    '<img src="src/images/maria_05.png" alt="foto de Maria Eduarda">',
    '<img src="src/images/maria_05.png" alt="foto de Maria Eduarda">',
    '<img src="src/images/maria_06.png" alt="foto de Maria Eduarda">',
    '<img src="src/images/maria_06.png" alt="foto de Maria Eduarda">',
];

let openCards = [];

const shuffleEmojis = emojis.toSorted(() => (Math.random() > 0.5 ? 2 : -1));

function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch")
        openCards[1].classList.add("boxMatch")
    } else {
        openCards[0].classList.remove("boxOpen")
        openCards[1].classList.remove("boxOpen")
    }

    openCards = []

    if (document.querySelectorAll(".boxMatch").length === emojis.length){
        alert("Parabéns, você venceu!")
    }
}

for (let i=0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.addEventListener("click", function () {
        if (openCards.length < 2) {
            this.classList.add("boxOpen")
            openCards.push(this)
        }
    
        if (openCards.length == 2) {
            setTimeout(checkMatch, 1500)
        }

    })
    document.querySelector(".game").appendChild(box)
}
