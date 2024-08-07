window.addEventListener("scroll", function() {
    var menupegajoso = document.querySelector(".menupegajoso");
    menupegajoso.classList.toggle("abajo", window.scrollY > 0);

})