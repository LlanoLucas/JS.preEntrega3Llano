function guardarProducto() {
  localStorage.setItem("talitas", JSON.stringify(talitas));
}

function cargarProducto() {
  return JSON.parse(localStorage.getItem("talitas"));
}

function guardarCarrito(carrito) {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function cargarCarrito() {
  return JSON.parse(localStorage.getItem("carrito")) || [];
}

function buscarProducto(id) {
  const productos = cargarProducto();

  return productos.find((item) => item.id === id);
}

function cantidadSelector(id) {
  const carrito = cargarCarrito();

  if (estaEnElCarrito(id)) {
    let pos = carrito.findIndex((item) => item.id === id);
    return carrito[pos].cantidad;
  } else {
    return 0;
  }
}

function estaEnElCarrito(id) {
  const carrito = cargarCarrito();

  return carrito.some((item) => item.id === id);
}

function agregarAlCarrito(id) {
  const carrito = cargarCarrito();

  if (estaEnElCarrito(id)) {
    let pos = carrito.findIndex((item) => item.id === id);
    carrito[pos].cantidad += 1;
    carrito[pos].precio = carrito[pos].cantidad * 600;
  } else {
    const producto = buscarProducto(id);
    producto.cantidad = 1;
    carrito.push(producto);
  }
  selectorProductos.innerHTML = "";
  renderSelector();
  guardarCarrito(carrito);
  renderCarrito();
  botonRender();
  renderSubtotal();
}

function sacarDelCarrito(id) {
  const carrito = cargarCarrito();
  const carritoActualizado = carrito.filter((item) => item.id != id);

  guardarCarrito(carritoActualizado);
  renderCarrito();
  renderSubtotal();
  botonRender();
}

function restarDelCarrito(id) {
  let carrito = cargarCarrito();

  if (estaEnElCarrito(id)) {
    let pos = carrito.findIndex((item) => item.id === id);
    if (carrito[pos].cantidad > 1) {
      carrito[pos].cantidad -= 1;
      carrito[pos].precio = carrito[pos].cantidad * 600;
      guardarCarrito(carrito);
      renderCarrito();
      botonRender();
      renderSubtotal();
      selectorProductos.innerHTML = "";
      renderSelector();
    } else {
      sacarDelCarrito(id);
      selectorProductos.innerHTML = "";
      renderSelector();
    }
  }
  let carro = document.getElementById("carro");
  let boton = document.getElementById("boton-carrito");

  if (carritoLength() == 0) {
    carro.removeChild(boton);
  }
}

function carritoLength() {
  let carrito = cargarCarrito();
  return carrito.length;
}

// sacarDelCarrito(0);

function renderCarrito() {
  let productos = cargarCarrito();
  let contenido = "";

  if (carritoLength() > 0) {
    productos.forEach((producto) => {
      contenido += `<ul>
      <li>${producto.sabor}</li>
      <li>x${producto.cantidad}u</li>
      <li>$${producto.precio}</li>
    </ul>`;
    });
    carritoProductos.innerHTML = contenido;
  } else {
    contenido = `<ul class="m-auto mb-1">No hay productos en el carrito...</ul>`;
    carritoProductos.innerHTML = contenido;
  }
  renderSubtotal();
}

function botonRender() {
  const carro = document.getElementById("carro");
  if (carritoLength() > 0) {
    if (carro.childElementCount < 2) {
      let span = document.createElement("span");
      span.setAttribute("id", "boton-carrito");
      carro.appendChild(span);
      const boton = document.getElementById("boton-carrito");
      boton.innerHTML = carritoLength();
    } else {
      const botoncito = document.getElementById("boton-carrito");
      botoncito.innerHTML = carritoLength();
    }
  }
}

function renderSubtotal() {
  const carrito = cargarCarrito();
  const sumaPrecios = carrito.reduce(
    (acumulador, elemento) => acumulador + elemento.precio,
    0
  );
  const subtotal = document.getElementById("subtotal");
  subtotal.innerHTML = `$${sumaPrecios}`;

  const envio = document.getElementById("envio");
  const precioEnvio = cargarCarrito().length > 0 ? 400 : 0;
  envio.innerHTML = `$${precioEnvio}`;

  const total = document.getElementById("total");
  totalPrecio = sumaPrecios + precioEnvio;
  total.innerHTML = `$${sumaPrecios + precioEnvio}`;
}

renderCarrito();
botonRender();
