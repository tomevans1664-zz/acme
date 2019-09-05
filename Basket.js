module.exports = class Basket {
    constructor(pricingRules) {
        this.pricingRules = pricingRules;
        this.basket = {};
    }

    add (item) {
        this.basket[item] = this.basket[item] ? this.basket[item] + 1 : 1;
    };

    total () {
        return Object.keys(this.basket).reduce((previousValue, currentValue) => {
            const price = this.pricingRules.products[currentValue].price;
            const special = this.pricingRules.specials[currentValue];
            const basketCount = this.basket[currentValue];
            if (special) {
                let itemTotal = 0;
                switch (special.key) {
                    case 'BOGOF':
                        const isEven = basketCount % 2 === 0;
                        itemTotal = isEven ? (
                            basketCount / 2 * price
                        ) : (
                            ((basketCount - 1) / 2 * price) + price
                        );
                        break;
                    case 'BULK':
                        itemTotal = basketCount >= special.quantity ? (
                            basketCount * special.price
                        ) : (
                            basketCount * price
                        );
                        break;
                    default:
                        break;
                }
                return previousValue + itemTotal;
            } else {
                return previousValue + basketCount * price;
            }
        }, 0);
    }
};