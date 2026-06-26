const elementos = document.querySelectorAll("section, .lectura, .dato-destacado, .sabias-que");

elementos.forEach(function(elemento) {
    elemento.classList.add("aparece");
});

window.addEventListener("scroll", function() {
    elementos.forEach(function(elemento) {
        const posicion = elemento.getBoundingClientRect().top;
        const altoPantalla = window.innerHeight;

        if (posicion < altoPantalla - 100) {
            elemento.classList.add("visible");
        }
    });
});

window.dispatchEvent(new Event("scroll"));