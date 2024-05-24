const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

function mostrarNombreMes() {
    const mesSeleccionado = parseInt(document.getElementById('mes').value);
    const nombreMes = meses[mesSeleccionado - 1];
    document.getElementById('resultado').textContent = `El nombre del mes es: ${nombreMes}`;
}