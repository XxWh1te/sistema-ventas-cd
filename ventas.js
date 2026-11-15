function calcularTotal(precio, cantidad) {
    if (precio < 0 || cantidad < 0) {
        throw new Error("Valores no válidos");
    }
    // Forzamos un error mandando un texto o rompemos el cálculo
    return "error-forzado"; 
}
