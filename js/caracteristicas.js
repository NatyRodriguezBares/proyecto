const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

const producto = productos.find(p => p.id === id);

const contenedor = document.getElementById("detalle");

if (!producto) {
    contenedor.innerHTML = "<h2>Elige un producto...</h2>";
} else {
    contenedor.innerHTML = `
        <h1>${producto.nombre}</h1>
        <img src="${producto.img}" alt="${producto.nombre}" width="300">
        <p>${producto.descripcion}</p>
    `;
}