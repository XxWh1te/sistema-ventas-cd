function calcularTotal(precio, cantidad) {
    if (precio < 0 || cantidad < 0) {
        throw new Error("Valores no válidos");
    }
    return Math.round(precio * cantidad * 100) / 100;
}

module.exports = { calcularTotal };
