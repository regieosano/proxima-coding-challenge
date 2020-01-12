// 3rd party Binance Library APIs
const api = require("binance");

class BidSellApi {
  constructor() {
    this.binanceWS = new api.BinanceWS(true);
  }

  //   getBidSellDepth() {
  //     this.binanceWS.onDepthUpdate("BTCUSDT", data => {
  //       // extract the bid depth delta
  //       const bidDepth = data.bidDepthDelta;

  //       // extract the ask depth delta
  //       const askDepth = data.askDepthDelta;

  //       // return the bidDepth and askDepth
  //       return { bid: bidDepth, ask: askDepth };
  //     });
  //   }
}

module.exports = BidSellApi;
