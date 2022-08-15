const paragraph = document.querySelector("p")
const span = document.querySelector("span")
const dice = document.getElementById("dice")

dice.addEventListener("click",advice)

async function advice(){

    const response = await fetch("https://api.adviceslip.com/advice")
    const adv = await response.json();
    paragraph.textContent = adv.slip.advice;
    span.textContent = adv.slip.id
}

