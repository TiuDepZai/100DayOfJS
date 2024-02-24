// variables
const modal = document.querySelector(".modal"),
    btn = document.querySelector("btn"),
    close = document.querySelector(".close");

btn.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);

// Open Modal
function openModal(e){
    e.prevemtDefaul();
    modal.style.display = "block";
}

// Close Modal
function closeModal(){
    
    modal.style.display = "nones";
}