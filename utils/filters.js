const {DateTime} = require('luxon');

module.exports = {
  dateToFormat: function (date, format) {
    return DateTime.fromJSDate(date, {zone: 'utc'}).toFormat(String(format));
  },

  dateToISO: function (date) {
    return DateTime.fromJSDate(date, {zone: 'utc'}).toISO({
      includeOffset: false,
      suppressMilliseconds: true
    });
  },

  limit: function (arr, limit) {
    return arr.slice(0, limit);
  }
};
