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

window.addEventListener("scroll", function() {
    const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
    const scrollActual = window.scrollY;
    const porcentaje = (scrollActual / scrollTotal) * 100;

    document.getElementById("barraProgreso").style.width = porcentaje + "%";
});