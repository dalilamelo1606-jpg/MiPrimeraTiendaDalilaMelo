const productos = [
  {
    id: 1,
    nombre: "Conjunto deportivo mujer",
    descripcion: "✨ Comodidad, estilo y actitud en un solo conjunto. 💪💕",
    precio: 25000,
    imagen: "https://boldandgrit.com.co/cdn/shop/files/shorts_deportivos_para_mujer_1600x.jpg?v=1757006765"
  },
  {
    id: 2,
    nombre: "Conjunto deportivo caballero",
    descripcion: "💪 Estilo y comodidad para cada entrenamiento. 🔥",
    precio: 18000,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfnlQ279XtDgRLlBUq99NuYFf4hRrn5qF5ymtnFnAd32bNF-ScCAi-u1-H&s=10"
  },
  {
    id: 3,
    nombre: "Zapatos Deportivos mujer",
    descripcion: "👟 Comodidad que te acompaña en cada paso. 🔥",
    precio: 30000,
    imagen: "https://golty.com.co/wp-content/uploads/2025/09/tenis-deportivos-golty-lite-run-azul-gris-1.webp"
  },
  {
    id: 4,
    nombre: "Zapatos deportivos hombre",
    descripcion: "👟 Estilo, comodidad y actitud en cada paso. 💪🔥",
    precio: 18000,
    imagen: "https://cdn.baguer.co/uploads/2025/12/-blanco-837240BL_C.webp_s6TnSrFeTh52vLynn6H7va2QsST7bp.webp"
  },
  {
    id: 5,
    nombre: "Conjunto deportivo niños",
    descripcion: "🏃‍♂️✨ ¡Comodidad y estilo para pequeños que nunca paran! 💙",
    precio: 22000,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSczaQtRxWgQDHQb8LFUCbkYCgh1cmTZL6pWtbQVJI7PQ&s=10"
  }
];


/* ==============================
   CARRITO
================================ */

const carrito = [];

const contenedorProductos = document.getElementById("productos");
const listaCarrito = document.getElementById("lista-carrito");
const totalCarrito = document.getElementById("total");


/* ==============================
   MOSTRAR PRODUCTOS
================================ */

function mostrarProductos() {

  contenedorProductos.innerHTML = "";

  productos.forEach(prod => {

    const div = document.createElement("div");

    div.className = "producto";

    div.innerHTML = `
      <img src="${prod.imagen}" alt="${prod.nombre}">

      <h3>${prod.nombre}</h3>

      <p class="descripcion">
        ${prod.descripcion}
      </p>

      <p class="precio">
        ${prod.precio.toLocaleString("es-CO", {
          style: "currency",
          currency: "COP",
          minimumFractionDigits: 0
        })}
      </p>

      <button onclick="agregarAlCarrito(${prod.id})">
        Agregar al carrito
      </button>
    `;

    contenedorProductos.appendChild(div);

  });

}


/* ==============================
   AGREGAR AL CARRITO
================================ */

function agregarAlCarrito(id) {

  const productoExistente =
    carrito.find(p => p.id === id);

  if (productoExistente) {

    productoExistente.cantidad++;

  } else {

    const producto =
      productos.find(p => p.id === id);

    carrito.push({
      ...producto,
      cantidad: 1
    });

  }

  actualizarCarrito();

}


/* ==============================
   ACTUALIZAR CARRITO
================================ */

function actualizarCarrito() {

  listaCarrito.innerHTML = "";

  let total = 0;
  let totalItems = 0;

  carrito.forEach(item => {

    const li =
      document.createElement("li");

    const subtotal =
      item.precio * item.cantidad;

    li.textContent =
      `${item.nombre} x${item.cantidad} — ` +
      subtotal.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0
      });

    listaCarrito.appendChild(li);

    total += subtotal;
    totalItems += item.cantidad;

  });

  totalCarrito.textContent =
    total.toLocaleString("es-CO");

  actualizarTituloCarrito(totalItems);

}


/* ==============================
   CONTADOR DEL CARRITO
================================ */

function actualizarTituloCarrito(cantidad) {

  const titulo =
    document.querySelector(".carrito h2");

  titulo.textContent =
    `🧾 Carrito de Compras (${cantidad})`;

}


/* ==============================
   VACIAR CARRITO
================================ */

function vaciarCarrito() {

  if (carrito.length === 0) {

    alert("🛒 El carrito ya está vacío.");

    return;

  }

  if (
    confirm(
      "¿Estás seguro de que quieres vaciar el carrito?"
    )
  ) {

    carrito.length = 0;

    actualizarCarrito();

  }

}


/* ==============================
   FINALIZAR COMPRA
================================ */

function finalizarCompra() {

  if (carrito.length === 0) {

    alert(
      "🛒 Tu carrito está vacío. Agrega productos antes de finalizar la compra."
    );

    return;

  }

  alert(
    "🎉 ¡Pedido simulado confirmado!\n\n" +
    "En un eCommerce real, ahora entrarían en acción " +
    "el backend, la pasarela de pago y la logística."
  );

  carrito.length = 0;

  actualizarCarrito();

}


/* ==============================
   INICIAR TIENDA
================================ */

mostrarProductos();
