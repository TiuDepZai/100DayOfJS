const btn = document.querySelector(".btn");
const coupon = document.querySelector(".coupon");


const copy = (e) =>{
    e.preventDefault();

    // Deprecated
    // coupon.select();
    // coupon.setSelectionRange(0,-1);
    // document.execCommand("copy");

    navigator.clipboard.writeText(coupon)


    btn.textContent = "Copied";
    setTimeout(() => {
        btn.textContent = "Copy";
    }, 3000)
}


btn.addEventListener("click", copy);

