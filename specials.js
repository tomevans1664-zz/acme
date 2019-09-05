module.exports = {
    bogof: (quantity, price) => {
        const isEven = quantity % 2 === 0;
        return isEven ? (
            quantity / 2 * price
        ) : (
            ((quantity - 1) / 2 * price) + price
        );
    },
    bulk: (quantity, price, special) => {
        return quantity >= special.quantity ? (
            quantity * special.price
        ) : (
            quantity * price
        );
    }
};