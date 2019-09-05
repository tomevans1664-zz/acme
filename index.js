const Basket = require('./Basket');
const pricingRulesJSON = require('./pricingRules');

const basket = new Basket(pricingRulesJSON);

basket.add('FR1');
basket.add('SR1');
basket.add('FR1');
basket.add('CF1');
console.log(basket.total());