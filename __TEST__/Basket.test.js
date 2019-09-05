const BasketTest = require('../Basket');
const pricingRulesJSON = require('../pricingRules');

describe('Passes Acceptance Criteria', () => {
    it('should output £19.34 after [FR1, SR1, FR1, CF1]', () => {
        const basket = new BasketTest(pricingRulesJSON);
        basket.add('FR1');
        basket.add('SR1');
        basket.add('FR1');
        basket.add('CF1');
        expect(basket.total()).toBe(19.34);
    });
    it('should output £3.11 after [FR1, FR1]', () => {
        const basket = new BasketTest(pricingRulesJSON);
        basket.add('FR1');
        basket.add('FR1');
        expect(basket.total()).toBe(3.11);
    });
    it('should output £16.61 after [SR1, SR1, FR1, SR1]', () => {
        const basket = new BasketTest(pricingRulesJSON);
        basket.add('SR1');
        basket.add('SR1');
        basket.add('FR1');
        basket.add('SR1');
        expect(basket.total()).toBe(16.61);
    });
});