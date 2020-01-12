class Binance {
  constructor() {
    this.pricesTimesQty = [];
  }

  getPrice(side, QUANTITY, arrayDepthOrderData = []) {
    // sort according to price
    const sortedArrayValues = arrayDepthOrderData.sort(
      (a, b) => b.price - a.price
    );

    // computation for WEIGHTED AVERAGE
    for (let i = 0; i < sortedArrayValues.length; i++) {
      if (i < QUANTITY) {
        this.pricesTimesQty.push(
          sortedArrayValues[i].price * sortedArrayValues[i].quantity
        );
      } else {
        break;
      }
    }

    // get the total sum
    const sum = this.pricesTimesQty.reduce((rt, cv) => {
      return rt + cv;
    });

    const average = sum / QUANTITY;
    // end computation

    return `Average of ${side} price is ${average}!`;
  }
}

module.exports = Binance;
