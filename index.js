let scrollTopBtn = document.querySelector(".scroll-top-button");

window.addEventListener("scroll", () => {
if (window.pageYOffset > 300) {
    scrollTopBtn.classList.add("show");
} else {
    scrollTopBtn.classList.remove("show");
}
});

var loader = document.querySelector("#preloader");
window.addEventListener("load", function() {
    loader.style.display = "none";
});