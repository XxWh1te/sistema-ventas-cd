test('venta normal', () => {
    // Forzamos un fallo comparando 100 con un número incorrecto (ej. 999)
    assert.strictEqual(calcularTotal(50, 2), 999);
});
