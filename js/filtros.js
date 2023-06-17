const selector = document.getElementById("selector_productos");

const filtrarTodos = document.getElementById("todos");
const filtrarVerdura = document.getElementById("verdura");
const filtrarSinSal = document.getElementById("sin_sal");
const filtrarDulces = document.getElementById("dulces");

filtrarDulces.onclick = () => {
  selector.innerHTML = `<li class="nuevo">
    <div class="carrito__productos__descripcion">
      <img src="imagenes/talita.webp" alt="talita" />
      <div>
        <h4>Canela y Azucar</h4>
        <p>Con una dulzura deliciosa</p>
      </div>
    </div>
    <div class="carrito__productos__botonera">
      <span class="carrito__productos__botonera__menos" id="menos"
        >-</span
      >
      <span class="carrito_prodcutos__botonera_num" id="cant_canela"
        >${canela.innerHTML}</span
      >
      <span class="carrito__productos__botonera__mas" id="mas"
        >+</span
      >
    </div>
  </li>
  <li class="nuevo">
    <div class="carrito__productos__descripcion">
        <img src="imagenes/talita.webp" alt="talita" />
        <div>
        <h4>Azucar</h4>
        <p>Con granos de azucar</p>
        </div>
    </div>
    <div class="carrito__productos__botonera">
        <span class="carrito__productos__botonera__menos" id="menos"
        >-</span
        >
        <span class="carrito_prodcutos__botonera_num" id="cant_canela"
        >0</span
        >
        <span class="carrito__productos__botonera__mas" id="mas"
        >+</span
        >
    </div>
</li>`;
};

filtrarTodos.onclick = () => {
  selector.innerHTML = `<li class="nuevo">
    <div class="carrito__productos__descripcion">
      <img src="imagenes/talita.webp" alt="talita" />
      <div>
        <h4>Canela y Azucar</h4>
        <p>Con una dulzura deliciosa</p>
      </div>
    </div>
    <div class="carrito__productos__botonera">
      <span class="carrito__productos__botonera__menos" id="menos"
        >-</span
      >
      <span class="carrito_prodcutos__botonera_num" id="cant_canela"
        >${canela.innerHTML}</span
      >
      <span class="carrito__productos__botonera__mas" id="mas"
        >+</span
      >
    </div>
  </li>
  <li class="nuevo">
    <div class="carrito__productos__descripcion">
        <img src="imagenes/talita.webp" alt="talita" />
        <div>
        <h4>Azucar</h4>
        <p>Con granos de azucar</p>
        </div>
    </div>
    <div class="carrito__productos__botonera">
        <span class="carrito__productos__botonera__menos" id="menos"
        >-</span
        >
        <span class="carrito_prodcutos__botonera_num" id="cant_canela"
        >0</span
        >
        <span class="carrito__productos__botonera__mas" id="mas"
        >+</span
        >
    </div>
  </li>
  <li>
    <div class="carrito__productos__descripcion">
      <img src="imagenes/talita.webp" alt="talita" />
      <div>
        <h4>Original</h4>
        <p>Toda la originalidad de Donatto</p>
      </div>
    </div>
    <div class="carrito__productos__botonera">
      <span class="carrito__productos__botonera__menos">-</span>
      <span class="carrito_prodcutos__botonera_num">0</span>
      <span class="carrito__productos__botonera__mas">+</span>
    </div>
  </li>
  <li>
    <div class="carrito__productos__descripcion">
      <img src="imagenes/talita.webp" alt="talita" />
      <div>
        <h4>Jamón</h4>
        <p>Intenso sabor a Jamón</p>
      </div>
    </div>
    <div class="carrito__productos__botonera">
      <span class="carrito__productos__botonera__menos">-</span>
      <span class="carrito_prodcutos__botonera_num">1</span>
      <span class="carrito__productos__botonera__mas">+</span>
    </div>
  </li>
  <li>
    <div class="carrito__productos__descripcion">
      <img src="imagenes/talita.webp" alt="talita" />
      <div>
        <h4>Queso</h4>
        <p>Intenso sabor a queso, con queso rallado encima</p>
      </div>
    </div>
    <div class="carrito__productos__botonera">
      <span class="carrito__productos__botonera__menos">-</span>
      <span class="carrito_prodcutos__botonera_num">0</span>
      <span class="carrito__productos__botonera__mas">+</span>
    </div>
  </li>
  <li>
    <div class="carrito__productos__descripcion">
      <img src="imagenes/talita.webp" alt="talita" />
      <div>
        <h4>Cebolla</h4>
        <p>Intenso sabor a cebolla, con pedazos de cebolla</p>
      </div>
    </div>
    <div class="carrito__productos__botonera">
      <span class="carrito__productos__botonera__menos">-</span>
      <span class="carrito_prodcutos__botonera_num">2</span>
      <span class="carrito__productos__botonera__mas">+</span>
    </div>
  </li>
  <li>
    <div class="carrito__productos__descripcion">
      <img src="imagenes/talita.webp" alt="talita" />
      <div>
        <h4>Orégano</h4>
        <p>Intenso sabor a orégano</p>
      </div>
    </div>
    <div class="carrito__productos__botonera">
      <span class="carrito__productos__botonera__menos">-</span>
      <span class="carrito_prodcutos__botonera_num">1</span>
      <span class="carrito__productos__botonera__mas">+</span>
    </div>
  </li>
  <li>
    <div class="carrito__productos__descripcion">
      <img src="imagenes/talita.webp" alt="talita" />
      <div>
        <h4>Pizza</h4>
        <p>Intenso sabor a pizza</p>
      </div>
    </div>
    <div class="carrito__productos__botonera">
      <span class="carrito__productos__botonera__menos">-</span>
      <span class="carrito_prodcutos__botonera_num">0</span>
      <span class="carrito__productos__botonera__mas">+</span>
    </div>
  </li>
  <li>
    <div class="carrito__productos__descripcion">
      <img src="imagenes/talita.webp" alt="talita" />
      <div>
        <h4>Mix de Semillas</h4>
        <p>Con semillas de lino, chía y sésamo</p>
      </div>
    </div>
    <div class="carrito__productos__botonera">
      <span class="carrito__productos__botonera__menos">-</span>
      <span class="carrito_prodcutos__botonera_num">0</span>
      <span class="carrito__productos__botonera__mas">+</span>
    </div>
  </li>
  <li>
    <div class="carrito__productos__descripcion">
      <img src="imagenes/talita.webp" alt="talita" />
      <div>
        <h4>Espinaca</h4>
        <p>Intenso sabor a espinaca</p>
      </div>
    </div>
    <div class="carrito__productos__botonera">
      <span class="carrito__productos__botonera__menos">-</span>
      <span class="carrito_prodcutos__botonera_num">0</span>
      <span class="carrito__productos__botonera__mas">+</span>
    </div>
  </li>
  <li>
    <div class="carrito__productos__descripcion">
      <img src="imagenes/talita.webp" alt="talita" />
      <div>
        <h4>Calabaza</h4>
        <p>Intenso sabor a calabaza</p>
      </div>
    </div>
    <div class="carrito__productos__botonera">
      <span class="carrito__productos__botonera__menos">-</span>
      <span class="carrito_prodcutos__botonera_num">0</span>
      <span class="carrito__productos__botonera__mas">+</span>
    </div>
  </li>
  <li>
    <div class="carrito__productos__descripcion">
      <img src="imagenes/talita.webp" alt="talita" />
      <div>
        <h4>Remolacha</h4>
        <p>Intenso sabor a remolacha</p>
      </div>
    </div>
    <div class="carrito__productos__botonera">
      <span class="carrito__productos__botonera__menos">-</span>
      <span class="carrito_prodcutos__botonera_num">0</span>
      <span class="carrito__productos__botonera__mas">+</span>
    </div>
  </li>
  <li>
    <div class="carrito__productos__descripcion">
      <img src="imagenes/talita.webp" alt="talita" />
      <div>
        <h4>Chía</h4>
        <p>Con semillas de chía</p>
      </div>
    </div>
    <div class="carrito__productos__botonera">
      <span class="carrito__productos__botonera__menos">-</span>
      <span class="carrito_prodcutos__botonera_num">0</span>
      <span class="carrito__productos__botonera__mas">+</span>
    </div>
  </li>
  <li>
    <div class="carrito__productos__descripcion">
      <img src="imagenes/talita.webp" alt="talita" />
      <div>
        <h4>Lino</h4>
        <p>Con semillas de lino</p>
      </div>
    </div>
    <div class="carrito__productos__botonera">
      <span class="carrito__productos__botonera__menos">-</span>
      <span class="carrito_prodcutos__botonera_num">0</span>
      <span class="carrito__productos__botonera__mas">+</span>
    </div>
  </li>
  <li>
    <div class="carrito__productos__descripcion">
      <img src="imagenes/talita.webp" alt="talita" />
      <div>
        <h4>Sésamo</h4>
        <p>Con semillas de sésamo</p>
      </div>
    </div>
    <div class="carrito__productos__botonera">
      <span class="carrito__productos__botonera__menos">-</span>
      <span class="carrito_prodcutos__botonera_num">0</span>
      <span class="carrito__productos__botonera__mas">+</span>
    </div>
  </li>
  <li>
    <div class="carrito__productos__descripcion">
      <img src="imagenes/talita.webp" alt="talita" />
      <div>
        <h4>Salvado</h4>
        <p>Con semillas de salvado</p>
      </div>
    </div>
    <div class="carrito__productos__botonera">
      <span class="carrito__productos__botonera__menos">-</span>
      <span class="carrito_prodcutos__botonera_num">0</span>
      <span class="carrito__productos__botonera__mas">+</span>
    </div>
  </li>`;
};

filtrarVerdura.onclick = () => {
  selector.innerHTML = `<li>
 <div class="carrito__productos__descripcion">
   <img src="imagenes/talita.webp" alt="talita" />
   <div>
     <h4>Espinaca</h4>
     <p>Intenso sabor a espinaca</p>
   </div>
 </div>
 <div class="carrito__productos__botonera">
   <span class="carrito__productos__botonera__menos">-</span>
   <span class="carrito_prodcutos__botonera_num">0</span>
   <span class="carrito__productos__botonera__mas">+</span>
 </div>
</li>
<li>
 <div class="carrito__productos__descripcion">
   <img src="imagenes/talita.webp" alt="talita" />
   <div>
     <h4>Calabaza</h4>
     <p>Intenso sabor a calabaza</p>
   </div>
 </div>
 <div class="carrito__productos__botonera">
   <span class="carrito__productos__botonera__menos">-</span>
   <span class="carrito_prodcutos__botonera_num">0</span>
   <span class="carrito__productos__botonera__mas">+</span>
 </div>
</li>`;
};

filtrarSinSal.onclick = () => {
  selector.innerHTML = `<li>
    <div class="carrito__productos__descripcion">
      <img src="imagenes/talita.webp" alt="talita" />
      <div>
        <h4>Original</h4>
        <p>Toda la originalidad de Donatto</p>
      </div>
    </div>
    <div class="carrito__productos__botonera">
      <span class="carrito__productos__botonera__menos">-</span>
      <span class="carrito_prodcutos__botonera_num">0</span>
      <span class="carrito__productos__botonera__mas">+</span>
    </div>
  </li>
<li>
    <div class="carrito__productos__descripcion">
      <img src="imagenes/talita.webp" alt="talita" />
      <div>
        <h4>Mix de Semillas</h4>
        <p>Con semillas de lino, chía y sésamo</p>
      </div>
    </div>
    <div class="carrito__productos__botonera">
      <span class="carrito__productos__botonera__menos">-</span>
      <span class="carrito_prodcutos__botonera_num">0</span>
      <span class="carrito__productos__botonera__mas">+</span>
    </div>
  </li>
<li>
    <div class="carrito__productos__descripcion">
      <img src="imagenes/talita.webp" alt="talita" />
      <div>
        <h4>Salvado</h4>
        <p>Con semillas de salvado</p>
      </div>
    </div>
    <div class="carrito__productos__botonera">
      <span class="carrito__productos__botonera__menos">-</span>
      <span class="carrito_prodcutos__botonera_num">0</span>
      <span class="carrito__productos__botonera__mas">+</span>
    </div>
  </li>`;
};
