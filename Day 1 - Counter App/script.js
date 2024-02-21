const count = document.querySelector(".count");
const add = document.querySelector(".add");
const resetCount = document.querySelector(".reset");
const sub = document.querySelector(".subtract");
const buttons = document.querySelector(".buttons");

// Requires you to have a div warps all buttons
buttons.addEventListener("click", (e) => {
    if(e.target.classList.contains("add")){
        count.innerHTML++;
        setColour();
    }
    if(e.target.classList.contains("reset")){
        count.innerHTML = 0;
        setColour()
    }
    if(e.target.classList.contains("subtract")){
        count.innerHTML--;
        setColour()
    }
})

// Changes the colour depending on the count
function setColour() {
    if (count.innerHTML > 0){
        count.style.color = "green";
    }
    else if (count.innerHTML < 0){
        count.style.color = "red";
    }
    else {
        count.style.color = "white";
    }
}


// Old style way of add one event listener per button
// add.addEventListener("click", () =>{
//     count.innerHTML++;
// })
// sub.addEventListener("click", () =>{
//     count.innerHTML--;
// })
// resetCount.addEventListener("click", () =>{
//     count.innerHTML = 0;
// })