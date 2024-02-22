const number = document.querySelector(".number");

const btn = document.querySelector(".generate");

const generateNum = () => {
    const rand = Math.floor(Math.random() * 10 + 1);
    number.innerHTML = rand;
}

btn.addEventListener("click", generateNum); 

generateNum();