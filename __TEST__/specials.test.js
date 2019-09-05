const specials = require('../specials.js');

describe('Specials - bogof', () => {
    const price = 1;
    it('should give £1 for 1', () => {
        const quantity  = 1;
        const total = specials.bogof(quantity, price);
        expect(total).toBe(1);
    });
    it('should give £1 for 2', () => {
        const quantity  = 2;
        const total = specials.bogof(quantity, price);
        expect(total).toBe(1);
    });
    it('should give £2 for 3', () => {
        const quantity  = 3;
        const total = specials.bogof(quantity, price);
        expect(total).toBe(2);
    });
    it('should give £2 for 4', () => {
        const quantity  = 4;
        const total = specials.bogof(quantity, price);
        expect(total).toBe(2);
    });
    it('should give £3 for 5', () => {
        const quantity  = 5;
        const total = specials.bogof(quantity, price);
        expect(total).toBe(3);
    });
});

describe('Specials - bulk', () => {
    const price = 5;
    const special = {
        "key": "BULK",
        "quantity": 3,
        "price": 4.5
    };
    it('should use regular price if < than threshold', () => {
        const quantity = 2;
        const total = specials.bulk(quantity, price, special);
        expect(total).toBe(10);
    });
    it('should use special price if >= than threshold', () => {
        const quantity = 3;
        const total = specials.bulk(quantity, price, special);
        expect(total).toBe(13.5);
    });
});