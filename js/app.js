document.addEventListener('DOMContentLoaded', function () {
    var imgContainer = document.querySelector('.grande');

    var currentIndex = 0; // Índice de la imagen actual

    // Manejar clic en "adelante"
    document.querySelector('.adelante').addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % imgContainer.children.length;
        console.log(currentIndex)

        if (currentIndex == 5) {
           currentIndex=0
        }
        updateCarousel();
    });

    function updateCarousel() {
        var translateValue = -currentIndex * 100 + '%'; // Calcula el valor de transformación para desplazar las imágenes
        imgContainer.style.transform = 'translateX(' + translateValue + ')';
    }
});