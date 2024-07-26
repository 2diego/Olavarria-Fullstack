document.addEventListener('DOMContentLoaded', function () {
    const productos = [
        { name: 'Yerba', precio: 50, stock: 20 },
        { name: 'Te', precio: 40, stock: 15 },
        { name: 'Azucar', precio: 30, stock: 10 },
        { name: 'Leche', precio: 25, stock: 30 },
        { name: 'Pan', precio: 20, stock: 25 }
    ];

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
            if (cantidad < 0 || cantidad > productos[i].stock) {
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