document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("carrito-container");
    const btnVaciar = document.getElementById("vaciarCarrito");

    function mostrarCarrito() {
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

        if (carrito.length === 0) {
            contenedor.innerHTML = "<p>El carrito está vacío</p>";
            return;
        }

        contenedor.innerHTML = carrito.map((p, index) => `
            <div class="item">
                <h3>${p.nombre}</h3>
                <p>$${p.precio}</p>
                <button class="eliminar" data-index="${index}">Eliminar</button>
            </div>
        `).join("");

        document.querySelectorAll(".eliminar").forEach(btn => {
            btn.addEventListener("click", eliminarProducto);
        });
    }

    function eliminarProducto(e) {
        const index = e.target.dataset.index;
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

        carrito.splice(index, 1);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        mostrarCarrito();
    }

    btnVaciar.addEventListener("click", () => {
        localStorage.removeItem("carrito");
        mostrarCarrito();
    });

    mostrarCarrito();
});