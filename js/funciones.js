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
  guardarCarrito(carrito);
  selectorProductos.innerHTML = "";
  renderSelector();
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
  const carrito = cargarCarrito();

  if (estaEnElCarrito(id)) {
    const pos = carrito.findIndex((item) => item.id === id);
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

function renderCarrito() {
  const productos = cargarCarrito();
  let contenido = "";

  if (carritoLength() > 0) {
    contenido = productos
      .map(
        (producto) => `<ul>
        <li>${producto.sabor}</li>
        <li>x${producto.cantidad}u</li>
        <li>$${producto.precio}</li>
      </ul>`
      )
      .join("");
  } else {
    contenido = `<ul class="m-auto mb-1">No hay productos en el carrito...</ul>`;
  }

  carritoProductos.innerHTML = contenido;
  renderSubtotal();
}

function botonRender() {
  const carritoLengthValue = carritoLength();
  if (carritoLengthValue > 0) {
    let boton = document.getElementById("boton-carrito");
    if (!boton) {
      const carro = document.getElementById("carro");
      boton = document.createElement("span");
      boton.setAttribute("id", "boton-carrito");
      carro.appendChild(boton);
    }
    boton.textContent = carritoLengthValue;
  }
}

function renderSubtotal() {
  const carrito = cargarCarrito();
  const precioEnvio = carrito.length > 0 ? 400 : 0;
  const sumaPrecios = carrito.reduce(
    (acumulador, elemento) => acumulador + elemento.precio,
    0
  );
  const totalPrecio = sumaPrecios + precioEnvio;

  document.getElementById("subtotal").textContent = `$${sumaPrecios}`;
  document.getElementById("envio").textContent = `$${precioEnvio}`;
  document.getElementById("total").textContent = `$${totalPrecio}`;
}

function renderSelector() {
  cargarProducto().forEach((element) => {
    if (element.tipo == "dulces") {
      selectorProductos.innerHTML += `<li class="nuevo">
        <div class="carrito__productos__descripcion">
          <img src=${element.imagen} alt="talita" />
          <div>
            <h4>${element.sabor}</h4>
            <p>${element.descripcion}</p>
          </div>
        </div>
        <div class="carrito__productos__botonera">
          <span class="carrito__productos__botonera__menos" id="menos${element.sabor.replaceAll(
            " ",
            ""
          )}"
          onclick="restarDelCarrito(${element.id})">-</span
          >
          <span class="carrito_prodcutos__botonera_num" id="cant${element.sabor.replaceAll(
            " ",
            ""
          )}"
            >${cantidadSelector(element.id)}</span
          >
          <span class="carrito__productos__botonera__mas" id="mas${element.sabor.replaceAll(
            " ",
            ""
          )}"
           onclick="agregarAlCarrito(${element.id})">+</span
          >
        </div>
      </li>`;
    } else {
      selectorProductos.innerHTML += `<li>
          <div class="carrito__productos__descripcion">
            <img src=${element.imagen} alt="talita" />
            <div>
              <h4>${element.sabor}</h4>
              <p>${element.descripcion}</p>
            </div>
          </div>
          <div class="carrito__productos__botonera">
            <span class="carrito__productos__botonera__menos" id="menos${
              element.sabor
            }"
            onclick="restarDelCarrito(${element.id})">-</span
            >
            <span class="carrito_prodcutos__botonera_num" id="cant${
              element.sabor
            }"
              >${cantidadSelector(element.id)}</span
            >
            <span class="carrito__productos__botonera__mas" id="mas${
              element.sabor
            }"
            onclick="agregarAlCarrito(${element.id})">+</span
            >
          </div>
        </li>`;
    }
  });
}

renderSelector();
renderCarrito();
botonRender();
