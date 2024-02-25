// variables
const modal = document.querySelector(".modal"),
modalContent =document.querySelector("modal-content")
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
    modalContent.classList.add("slide-up");
    setTimeout(() => {
        modal.style.display = "nones";
        modalContent.classList.remove("slide-up");

    }, 500);
}