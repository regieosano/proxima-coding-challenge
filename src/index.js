// 3rd party Binance Library APIs
const api = require("binance");

const { getDateInfo } = require("./utility/dateTimeInfo");

const Binance = require("./lib/classes/binance");

const binanceObj = new Binance();

const binanceWS = new api.BinanceWS(true);

// the constant required quantity declared HERE!
const QUANTITY = 5;

// using setInterval to have a 100ms frequency
setInterval(() => {
  binanceWS.onDepthUpdate("BTCUSDT", data => {
    // extract the bid depth delta
    const bidDepth = data.bidDepthDelta;

    // extract the ask depth delta
    const askDepth = data.askDepthDelta;

    // get the average buy price
    const averageBuyPrice = binanceObj.getPrice("buy", QUANTITY, bidDepth);

    // get the average sell price
    const averageSellPrice = binanceObj.getPrice("sell", QUANTITY, askDepth);

    // display the EXPECTED RESULTS
    displayBinanceData(averageBuyPrice, averageSellPrice);
  });
}, 100);

function displayBinanceData(averageBuyPrice, averageSellPrice) {
  console.log(getDateInfo());
  console.log(averageBuyPrice);
  console.log(averageSellPrice);
  console.log();
}
