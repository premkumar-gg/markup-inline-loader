var should = require('should');
var loader = require('../index');

function load(content) {
  return loader.call({
    cacheable: function () {
    },
    resourcePath: __filename
  }, content);
}

describe('markup inline loader', function () {
  it('svg', function () {
    load('<svg class="abc" src="./test.svg" width="100px" />').trim().should.equal('<svg class="abc"  width="100px"  ><path></path></svg>');
  });
  it('img', function () {
    load('<img src="./test.svg" />').trim().should.equal('<svg   ><path></path></svg>');
  });
  it('math', function () {
    load('<math src="./test.mml" />').trim().should.equal('<math style="display: block;"></math>');
  });
});