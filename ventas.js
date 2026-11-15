function calcularTotal(precio, cantidad) {
    // Forzamos un error manual para que falle la ejecución del script
    throw new Error("Error forzado en producción");
}

module.exports = { calcularTotal };
