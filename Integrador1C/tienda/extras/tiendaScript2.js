document.addEventListener('DOMContentLoaded', function () {
    const productos = [
        { name: 'Arroz', precio: 400, stock: 58 },
        { name: 'Fideos', precio: 450, stock: 63 },
        { name: 'Salsa', precio: 350, stock: 35 },
        { name: 'Queso', precio: 700, stock: 40 },
        { name: 'Sal', precio: 320, stock: 45 },
        { name: 'Pan', precio: 750, stock: 27 },
        { name: 'Facturas', precio: 800, stock: 23 },
        { name: 'Torta', precio: 1100, stock: 17 },
        { name: 'Masas Finas', precio: 1050, stock: 11 },
        { name: 'Prepizzas', precio: 1200, stock: 15 },
        { name: 'Lomo', precio: 1500, stock: 19 },
        { name: 'Vacio', precio: 1750, stock: 20 },
        { name: 'Churrasco', precio: 1500, stock: 29 },
        { name: 'Milanesa', precio: 1600, stock: 21 },
        { name: 'Pollo', precio: 1300, stock: 30 },
        { name: 'Manzana', precio: 750, stock: 35 },
        { name: 'Naranja', precio: 750, stock: 39 },
        { name: 'Banana', precio: 800, stock: 40 },
        { name: 'Tomate', precio: 1100, stock: 49 },
        { name: 'Lechuga', precio: 900, stock: 18 },
        { name: 'Agua', precio: 850, stock: 69 },
        { name: 'Gaseosa', precio: 1200, stock: 81 },
        { name: 'Energizante', precio: 1500, stock: 27 },
        { name: 'Cerveza', precio: 1500, stock: 75 },
        { name: 'Vino', precio: 1700, stock: 77 },
        { name: 'Desodorante', precio: 1200, stock: 37 },
        { name: 'Jabon', precio: 750, stock: 39 },
        { name: 'Shampoo', precio: 980, stock: 43 },
        { name: 'Acondicionador', precio: 980, stock: 47 },
        { name: 'Dentrifico', precio: 850, stock: 49 },
        { name: 'Detergente', precio: 760, stock: 71 },
        { name: 'Desengrasante', precio: 750, stock: 83 },
        { name: 'Lavandina', precio: 700, stock: 91 },
        { name: 'Escoba', precio: 980, stock: 23 },
        { name: 'Secador', precio: 950, stock: 28 },
        { name: 'Caramelos', precio: 500, stock: 124 },
        { name: 'Alfajores', precio: 1000, stock: 55 },
        { name: 'Chocolate', precio: 1200, stock: 31 },
        { name: 'Snack dulce', precio: 750, stock: 21 },
        { name: 'Snack salado', precio: 750, stock: 23 }
      ]

    const containerProductos = document.getElementById('container-productos');

    for (let i = 0; i < productos.length; i++) {
        const agregarProducto = document.createElement('tr');
        agregarProducto.innerHTML = `
            <td>${productos[i].name}</td>
            <td>$${productos[i].precio}</td>
            <td>${productos[i].stock}</td>
            <td><input type="number" id="${productos[i].name}" name="${productos[i].name}" min="0" max="${productos[i].stock}" value="0"></td>
        `;
        containerProductos.appendChild(agregarProducto);
    }

    const pedido = document.getElementById('pedido-form');
    const mensaje = document.getElementById('mensaje');

    pedido.addEventListener('submit', function (event) {
        event.preventDefault();
        let total = 0;
        let error = false;
        mensaje.textContent = '';

        for (let i = 0; i < productos.length; i++) {
            const cantidad = parseInt(document.getElementById(`${productos[i].name}`).value);
            if (cantidad < 0 || cantidad > productos[i].stock || isNaN(cantidad)) {
                error = true;
            } else {
                total += cantidad * productos[i].precio;
            }
        }

        if (error) {
            mensaje.textContent = 'Error: La cantidad seleccionada supera el stock disponible o es inválida.';
            mensaje.style.color = 'red';
        } else {
            /* DESCARGAR PEDIDO EN .TXT
            let dataPedido = '';
            for (let i = 0; i < productos.length; i++) {
                const cantidad = parseInt(document.getElementById(`${productos[i].name}`).value);
                dataPedido += `${productos[i].name}: ${cantidad} unidades - $${cantidad * productos[i].precio}\n`;
            }
            const data = `Pedido:\n\n${dataPedido}\n\nTotal: $${total}`;
            const blob = new Blob([data], { type: 'text/plain;charset=utf-8' });
            saveAs(blob, 'pedido.txt');
            */
            mensaje.textContent = `Total de la compra: $${total}`;
            mensaje.style.color = 'green';
        }
    });
});