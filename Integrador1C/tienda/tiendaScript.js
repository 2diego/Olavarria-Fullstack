document.addEventListener('DOMContentLoaded', function () {
  const productos = [
    'Arroz', 'Fideos', 'Salsa', 'Queso', 'Sal', 'Pan', 'Facturas', 'Torta', 'Masas Finas', 'Prepizzas', 
    'Lomo', 'Vacio', 'Churrasco', 'Milanesa', 'Pollo', 'Manzana', 'Naranja', 'Banana', 'Tomate', 'Lechuga', 
    'Agua', 'Gaseosa', 'Caramelos', 'Alfajores', 'Chocolate', 'Snack dulce', 'Snack salado', 
    'Energizante', 'Cerveza', 'Vino', 'Desodorante', 'Jabon', 'Shampoo', 'Acondic.', 
    'Dentrifico', 'Detergente', 'Limpia pisos', 'Lavandina', 'Escoba', 'Secador'
  ];

  const precios = [
    400, 450, 350, 700, 320, 750, 800, 1100, 1050, 1200, 1500, 1750, 1500, 1600, 1300, 750, 750, 800, 1100, 
    900, 850, 1200, 1500, 1500, 1700, 1200, 750, 980, 980, 850, 760, 750, 700, 980, 950, 500, 1000, 1200, 750, 
    750
  ];

  let stock = [
    58, 63, 35, 40, 45, 27, 23, 17, 11, 15, 19, 20, 29, 21, 30, 35, 39, 40, 49, 18, 69, 81, 27, 75, 77, 37, 39, 
    43, 47, 49, 71, 83, 91, 23, 28, 124, 55, 31, 21, 23
  ];

  const containerProductos = document.getElementById('productos-container');

  for (let i = 0; i < productos.length; i++) {
    const productoItem = document.createElement('div');
    productoItem.className = 'producto-item';
    productoItem.innerHTML = `
      <img src="../images/default-item.webp" alt="${productos[i]}" width="50px" height="50px"> 
      <div class="producto-detalles">
        <h3>${productos[i]}</h3>
        <p>Precio: $${precios[i]}</p>
        <p id="stock-${i}">Stock: ${stock[i]}</p>
        <input type="number" id="productos${i}" name="${productos[i]}" min="0" max="${stock[i]}" value="0">
      </div>
    `;
    containerProductos.appendChild(productoItem);
  }

  const pedido = document.getElementById('pedido-form');
  const mensaje = document.getElementById('mensaje');

  pedido.addEventListener('submit', function (event) {
    event.preventDefault();
    let total = 0;
    let error = false;
    mensaje.textContent = '';

    for (let i = 0; i < productos.length; i++) {
      const cantidad = parseInt(document.getElementById(`productos${i}`).value);
      if (cantidad <= 0 || cantidad > stock[i] || isNaN(cantidad)) {
        error = true;
      } else {
        total += cantidad * precios[i];
      }
    }

    if (error) {
      mensaje.textContent = 'Error: La cantidad seleccionada supera el stock disponible o es inválida.';
      mensaje.style.color = 'red';
    } else {
      for (let i = 0; i < productos.length; i++) {
        const cantidad = parseInt(document.getElementById(`productos${i}`).value);
        stock[i] -= cantidad;
        document.getElementById(`stock-${i}`).textContent = `Stock: ${stock[i]}`;
        document.getElementById(`productos${i}`).max = stock[i];
        document.getElementById(`productos${i}`).value = '0';
      }
      mensaje.textContent = `Total de la compra: $${total}`;
      mensaje.style.color = 'green';
    }
  });
});