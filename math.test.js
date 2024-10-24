// math.test.js
const add = require('./math'); // Die Funktion "add" aus der Datei "math.js" importieren

// Test für das Addieren von zwei positiven Zahlen
test('addiert 1 + 2 und ergibt 3', () => {
    expect(add(1, 2)).toBe(3);
});

// Test für das Addieren von negativen Zahlen
test('addiert -1 + -1 und ergibt -2', () => {
    expect(add(-1, -1)).toBe(-2);
});

// Test für das Addieren von null
test('addiert 0 + 5 und ergibt 5', () => {
    expect(add(0, 5)).toBe(5);
});
