const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
btn.addEventListener("click", palindrome);

function palindrome(){
    const result = document.querySelector(".input-text").value;
    let length = result.length;

    let start = result.substring(0,Math.floor(length/2)).toLowerCase();

    // alert(start);
    let end = result.substring(length - Math.floor(length/2)).toLowerCase();


    // old way to do it
    // let flip = end.split("").reverse().join("");
    let flip = [...end].reverse().join("");


    if (start == flip){
        result.innerhtml = `${word.toUpperCase()} is a palidrome`;

    }
    else{
        result.innerhtml = `${word.toUpperCase()} is not a palidrome`;

    }
}