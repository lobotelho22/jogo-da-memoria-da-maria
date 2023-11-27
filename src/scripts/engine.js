/**
Array com os elementos HTML dos cards do jogo da memória
**/
const cards = [
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

/**
Array dos cards virados pelo jogador, para comparar a igualdade entre eles.
**/ 
let openCards = [];

/**
Embaralhamento das cartas do deck, para início do jogo
**/
const shuffleCards = cards.toSorted(() => (Math.random() > 0.5 ? 2 : -1));

/**
Função responsável por controlar os eventos ligados ao clique nas cartas do jogo. Ele controla para limitar o clique a duas cartas por turno e compara a igualdade entre os elementos, ao se completar a virada de duas cartas.
**/
function handleClick () {
    if (openCards.length < 2) {
        this.classList.add("boxOpen")
        openCards.push(this)
    }

    if (openCards.length == 2) {
        setTimeout(checkMatch, 1500)
    }

}

/**
Remove o evento de clique das cartas selecionadas e que são iguais 
@param {Node} firstCard a primeira carta virada pelo jogador
@param {Node} secondCard a segunda carta virada pelo jogador
**/ 
function clearEvent(firstCard, secondCard) {
    firstCard.removeEventListener("click", handleClick)
    secondCard.removeEventListener("click", handleClick)
}

/**
Verifica a igualdade entre as cartas e a condição para o fim do jogo.
**/ 
function checkMatch() {
    const firstCard = openCards[0]
    const secondCard = openCards[1]
    console.log(firstCard)

    if (firstCard.innerHTML === secondCard.innerHTML) {
        firstCard.classList.add("boxMatch")
        secondCard.classList.add("boxMatch")
        clearEvent(firstCard, secondCard)
    } else {
        firstCard.classList.remove("boxOpen")
        secondCard.classList.remove("boxOpen")
    }

    openCards = []

    if (document.querySelectorAll(".boxMatch").length === cards.length){
        alert("Parabéns, você venceu!")
    }
}

/**
Popula a div `Game` com as cartas do jogo, embaralhando suas posições e atribuindo seus eventos de clique.
**/
for (let i=0; i < cards.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleCards[i];
    box.addEventListener("click", handleClick)
    document.querySelector(".game").appendChild(box)
}
