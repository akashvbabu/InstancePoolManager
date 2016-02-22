var assert = require('chai').assert;
var foo = 'Hello';
describe('HW', function() {
  describe('hello', function () {
    it('should return true', function () {
      assert.typeOf(foo, 'string');
    });
  });
});
