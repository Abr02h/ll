//script para showSlides
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000); // Altera a imagem a cada 5segundos
}
function plusSlides(n) {
    showSlides(slideIndex += n);
}
//script para barra de pesquisa
document.getElementById("searchBtn").addEventListener("click", function() {
  var input = document.getElementById("searchInput");
  var submitBtn = document.getElementById("submitBtn");
  if (input.style.display === "none") {
    input.style.display = "block";
    submitBtn.style.display = "inline-block"; // Mostrar o botão de pesquisa
    input.focus();
  } else {
    input.style.display = "none";
    submitBtn.style.display = "none"; // Ocultar o botão de pesquisa quando a barra de pesquisa é ocultada
  }
});
