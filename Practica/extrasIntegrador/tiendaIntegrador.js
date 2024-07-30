document.addEventListener('DOMContentLoaded', function () {
  const precios = { 'Yerba': 50, 'Te': 40, 'Azucar': 30, 'Leche': 25, 'Pan': 20 };
  const stock = { 'Yerba': 20, 'Te': 15, 'Azucar': 10, 'Leche': 30, 'Pan': 25 };

  const containerProductos = document.getElementById('container-productos');
  const productos = Object.keys(precios);

  productos.forEach((producto, index) => {
      const agregarProducto = document.createElement('tr');
      agregarProducto.innerHTML = `
          <td>${producto}</td>
          <td>$${precios[producto]}</td>
          <td>${stock[producto]}</td>
          <td><input type="number" id="producto-${index}" name="${producto}" min="0" max="${stock[producto]}" value="0"></td>
      `;
      containerProductos.appendChild(agregarProducto);
  });

  const pedido = document.getElementById('pedido-form');
  const mensaje = document.getElementById('mensaje');

  pedido.addEventListener('submit', function (event) {
      event.preventDefault();
      let total = 0;
      let error = false;
      mensaje.textContent = '';

      productos.forEach((producto, index) => {
          const cantidad = parseInt(document.getElementById(`producto-${index}`).value);
          if (cantidad < 0 || cantidad > stock[producto]) {
              error = true;
          } else {
              total += cantidad * precios[producto];
          }
      });

      if (error) {
          mensaje.textContent = 'Error: La cantidad seleccionada supera el stock disponible o es inválida.';
          mensaje.style.color = 'red';
      } else {
          let dataPedido = '';
          productos.forEach((producto, index) => {
              const cantidad = parseInt(document.getElementById(`producto-${index}`).value);
              dataPedido += `${producto}: ${cantidad} unidades - $${cantidad * precios[producto]}\n`;
          });
          const data = `Pedido:\n\n${dataPedido}\n\nTotal: $${total}`;
          const blob = new Blob([data], { type: 'text/plain;charset=utf-8' });
          saveAs(blob, 'pedido.txt');
          mensaje.textContent = `Total de la compra: $${total}`;
          mensaje.style.color = 'green';
      }
  });
});
