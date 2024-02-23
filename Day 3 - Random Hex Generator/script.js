const hex = document.querySelector(".hex");
const btn = document.querySelector(".generate");



const generateColour = () => {
    const rand = "#" + Math.random().toString(16).substring(2,8);
    document.body.style.backgroundColor = rand;
    hex.innerHTML = rand;
}

btn.addEventListener("click", generateColour); 

generateColour();