const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
btn.addEventListener("click", palindrome);

function palindrome(){
    const result = document.querySelector(".input-text").value;
    let length = result.length;

    let start = result.substring(0,Math.floor(length/2)).toLowerCase();

    alert(start);
    let end = result.substring(Math.upper(length/2), length)



}