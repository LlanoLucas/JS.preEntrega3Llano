function guardarProducto() {
  localStorage.setItem("talitas", JSON.stringify(talitas));
}

function cargarProducto() {
  return JSON.parse(localStorage.getItem("talitas"));
}

function guardarCarrito(carrito) {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}
