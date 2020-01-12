const { DateTime } = require("luxon");

const GMTPH = "GMT+0800 (Philippine Standard Time)";

exports.getDateInfo = () => {
  // get current day
  const dayOfTheWeek = DateTime.local().weekdayShort;
  // get current month
  const monthString = DateTime.local().monthShort;
  // get current day
  const dayNumber = DateTime.local().day;
  // get current hour
  const currentHour = DateTime.local().hour;
  // get current minute(s)
  const currentMinute = DateTime.local().minute;
  // get current second(s)
  const currentSecond = DateTime.local().second;
  // concantenate the time and date values
  const dateTimeInfo = `${dayOfTheWeek} ${monthString} ${dayNumber} ${currentHour}:${currentMinute}:${currentSecond} ${GMTPH}`;
  // return the time date information
  return dateTimeInfo;
};
