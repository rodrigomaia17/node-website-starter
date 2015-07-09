'use strict';
module.exports = {
  'Test title': function (test) {
    test
      .open('http://localhost:3000')
      .assert.title().is('New Site', 'it has title')
      .done();
  }
};