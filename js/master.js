// Mega-Menu
let services = document.querySelector("#services").onclick = function () {
    document.querySelector(".mega-menu").classList.toggle("open");
}

// buttom Up
let span = document.querySelector(".up");
window.onscroll = function (){
    this.scrollY >= 600 ? span.classList.add("show"): span.classList.remove("show");
}
span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
};