document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".carousel-slide");
    let currentSlide = 0;

    function showSlide(index) {
        slides[currentSlide].style.display = "none";
        slides[index].style.display = "block";
        currentSlide = index;
    }

    function nextSlide() {
        const nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex);
    }

    setInterval(nextSlide, 3000); // Cambia de imagen cada 3 segundos
});
