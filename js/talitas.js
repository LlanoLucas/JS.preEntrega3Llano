const talitas = [
  {
    id: 0,
    sabor: "Canela y Azúcar",
    imagen: "imagenes/talita.webp",
    precio: 600,
    cantidad: 0,
    tipo: "dulces",
    descripcion: "Con canela y granos de azúcar",
  },
  {
    id: 1,
    sabor: "Azúcar",
    imagen: "imagenes/talita.webp",
    precio: 600,
    cantidad: 0,
    tipo: "dulces",
    descripcion: "Con granos de azúcar",
  },
  {
    id: 2,
    sabor: "Original",
    imagen: "imagenes/talita.webp",
    precio: 600,
    cantidad: 0,
    tipo: "sin sal",
    descripcion: "Toda la originalidad de Donatto",
  },
  {
    id: 3,
    sabor: "Jamon",
    imagen: "imagenes/talita.webp",
    precio: 600,
    cantidad: 0,
    descripcion: "Intenso sabor a jamón",
  },
  {
    id: 4,
    sabor: "Queso",
    imagen: "imagenes/talita.webp",
    precio: 600,
    cantidad: 0,
    descripcion: "Intenso sabor a queso, con queso rayado encima",
  },
  {
    id: 5,
    sabor: "Cebolla",
    imagen: "imagenes/talita.webp",
    precio: 600,
    cantidad: 0,
    descripcion: "Intenso sabor a cebolla, con pedazos de cebolla",
  },
  {
    id: 6,
    sabor: "Orégano",
    imagen: "imagenes/talita.webp",
    precio: 600,
    cantidad: 0,
    descripcion: "Intenso sabor a orégano",
  },
  {
    id: 7,
    sabor: "Pizza",
    imagen: "imagenes/talita.webp",
    precio: 600,
    cantidad: 0,
    descripcion: "Intenso sabor a pizza",
  },
  {
    id: 8,
    sabor: "Mix de Semillas",
    imagen: "imagenes/talita.webp",
    precio: 600,
    cantidad: 0,
    tipo: "sin sal",
    descripcion: "Con semillas de lino, chía y salvado",
  },
  {
    id: 9,
    sabor: "Espinaca",
    imagen: "imagenes/talita.webp",
    precio: 600,
    cantidad: 0,
    tipo: "verdura",
    descripcion: "Intenso sabor a espinaca",
  },
  {
    id: 10,
    sabor: "Calabaza",
    imagen: "imagenes/talita.webp",
    precio: 600,
    cantidad: 0,
    tipo: "verdura",
    descripcion: "Intenso sabor a calabaza",
  },
  {
    id: 11,
    sabor: "Chía",
    imagen: "imagenes/talita.webp",
    precio: 600,
    cantidad: 0,
    descripcion: "Con semillas de chía",
  },
  {
    id: 12,
    sabor: "Lino",
    imagen: "imagenes/talita.webp",
    precio: 600,
    cantidad: 0,
    descripcion: "Con semillas de lino",
  },
  {
    id: 13,
    sabor: "Sésamo",
    imagen: "imagenes/talita.webp",
    precio: 600,
    cantidad: 0,
    descripcion: "Con semillas de sésamo",
  },
  {
    id: 14,
    sabor: "Salvado",
    imagen: "imagenes/talita.webp",
    precio: 600,
    cantidad: 0,
    tipo: "sin sal",
    descripcion: "Con semillas de salvado",
  },
];

guardarProducto();

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
