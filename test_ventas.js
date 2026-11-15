const test = require('node:test');
const assert = require('node:assert');
const { calcularTotal } = require('./ventas');

test('venta normal', () => {
    assert.strictEqual(calcularTotal(50, 2), 100);
});

test('venta decimal', () => {
    assert.strictEqual(calcularTotal(10.5, 2), 21);
});

test('precio negativo lanza error', () => {
    assert.throws(() => {
        calcularTotal(-10, 2);
    }, /Valores no válidos/);
});
