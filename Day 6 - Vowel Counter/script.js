const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
const word = document.querySelector(".input-text");

btn.addEventListener("click", countVowel);

function countVowel(){
    let vowelCount = 0;

    let wordVal = word.value.toLowerCase();

    for (let i = 0; i < wordVal.length; i++){
        if (wordVal[i].match(/([a,e,i,o,u])/)){
            vowelCount++;
        }
    }
    result.innerHTML = `${word.value.toUpperCase()} has ${vowelCount} vowels`
}