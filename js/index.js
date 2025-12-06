document.addEventListener("DOMContentLoaded", () => {
    const botonesComprar = document.querySelectorAll(".compra");

    botonesComprar.forEach(boton => {
        boton.addEventListener("click", (e) => {
            e.preventDefault();

            const nombre = boton.dataset.nombre;
            const precio = boton.dataset.precio;
            const img = boton.dataset.img;

            const producto = { nombre, precio, img };

            let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
            carrito.push(producto);
            localStorage.setItem("carrito", JSON.stringify(carrito));

            alert("Producto agregado al carrito");
        });
    });
});