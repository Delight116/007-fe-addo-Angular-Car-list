'use strict'

app.filter('pagination', function () {
  return function (input, item) {
    item = +item;
    return input.slice(item);
  };
});
