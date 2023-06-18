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

function agregarAlCarrito(id) {
  const carrito = cargarCarrito();
  const producto = buscarProducto(id);
  producto.cantidad++;

  carrito.push(producto);
  guardarCarrito(carrito);
  renderCarrito();
  botonRender();
}

function sacarDelCarrito(id) {
  const carrito = cargarCarrito();
  const carritoActualizado = carrito.filter((item) => item.id != id);

  guardarCarrito(carritoActualizado);
  botonRender();
  renderCarrito();
}

function carritoLength() {
  let carrito = cargarCarrito();
  console.log(carrito.length);
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
    contenido = `<ul class="m-auto">No hay productos en el carrito...</ul>`;

    carritoProductos.innerHTML = contenido;
  }
}

function botonRender() {
  //   if (carritoLength() > 0) {
  //     let boton = document.getElementById("boton-carrito");
  //     let estilos = `content: "${carritoLength()}";
  //   position: absolute;
  //   font-size: 1em;
  //   font-weight: 600;
  //   text-align: center;
  //   line-height: 110%;
  //   padding: 0 0.25em;
  //   border-radius: 50%;
  //   background-color: #ffb74c;
  //   border: 2px solid #000;
  //   margin-top: -1.75em;
  //   margin-left: 1.2em;`;
  //     boton.style.cssText = estilos;
  //   }
}

renderCarrito();
