/*document.addEventListener('DOMContentLoaded', function () {
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
function redirigir() {
    window.location.href = '#projects';
}*/
document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencias a los elementos
    var checkbox = document.getElementById("btn-modal");
    var modal = document.getElementById("myModal");

    // Función para actualizar la visibilidad del modal
    function updateModalVisibility() {
        if (checkbox.checked) {
            modal.style.visibility = "visible";
            modal.style.opacity = 1;
        } else {
            modal.style.visibility = "hidden";
            modal.style.opacity = 0;
        }
    }

    // Escuchar cambios en el estado del checkbox
    checkbox.addEventListener("change", updateModalVisibility);

    // Llamar a la función inicialmente para establecer el estado inicial
    updateModalVisibility();
     // Agrega la función para cambiar el contenido al hacer clic en el botón "Siguiente"
     document.getElementById("adelante").addEventListener("click", cambiarContenido);
    });
    
    let indiceImagen = 0;
    
    const imagenes = [
        { src: "assets/login.webp", texto: "Bloom cuenta con diversas secciones diseñadas específicamente para ayudar a personas que sufren de ansiedad." },
        { src: "assets/dash.webp", texto: "Dashboard donde el usuario puede ver graficos sobre sus niveles y ataques de ansiedad desde que inició a usar la app." },
        { src: "assets/juegos.webp", texto: "Sección de juegos" },
        { src: "assets/carta.webp", texto: "Juego de cartas, se puede cambiar la dificultad que va desde facil (10 cartas) a dificil (28 cartas)" },
        { src: "assets/romp.webp", texto: "Juego puzzle, se puede cambiar la dificultad, imagen"},
        { src: "assets/foro.webp", texto: "Foro donde se pueden compartir experiancias mediante comentarios y publicaciones "},
        { src: "assets/chat.webp", texto: "Chat implementado con web sokets"},
        { src: "assets/calen.webp", texto: "Calendario, se utilizó un job para notificar al usuario cuando esté próximo a un evento"},
        { src: "assets/gpt.webp", texto: "Diario emocional, se implementó chat GPT para dar inspiración al usuario sobre qué escribir"},


        // Agrega más objetos con rutas de imágenes y textos según sea necesario
    ];
    
    function cambiarContenido() {
        indiceImagen = (indiceImagen + 1) % imagenes.length;
        console.log(imagenes[indiceImagen].src)
        console.log(imagenes[indiceImagen].texto)

        document.getElementById("imagenModal").src = imagenes[indiceImagen].src;
        document.getElementById("textoModal").innerText = imagenes[indiceImagen].texto;
    }