const chai = require('chai');
const expect = chai.expect;

const add = require('../class/add');

describe('confirm all the dependencies for the app', function() {
  it('it should have the add file', function() {
    expect(add).to.be.ok;
  });

  it('it should have the add function', function() {
    expect(add(1,1)).to.be.ok;
  });

  it('it should perform the operation of addition', function() {
    expect(add(1,1)).to.be.equal(2);
  });
});