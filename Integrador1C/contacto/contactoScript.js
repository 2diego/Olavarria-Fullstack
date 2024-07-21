document.addEventListener('DOMContentLoaded', function () {
    const contacto = document.getElementById('contacto');

    contacto.addEventListener('submit', function (event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const consulta = document.getElementById('consulta').value;

        const data = `Nombre: ${nombre}\nApellido: ${apellido}\nEmail: ${email}\nTeléfono: ${telefono}\nConsulta: ${consulta}\n\n`;

        const blob = new Blob([data], { type: 'text/plain;charset=utf-8' });
        saveAs(blob, 'contacto.txt');

        contacto.reset();
    });
});