'use strict';

var main = require('../assets/js/main');

suite('Array', function () {

  setup(function () {
    // ...
  });

  suite('#indexOf()', function () {
    test('should return -1 when not present', function () {
       [1, 2, 3].indexOf(4).should.be.exactly(-1);
    });

    test('should return hello', function () {
      main.hello().should.be.exactly('hello');
    });
  });
});