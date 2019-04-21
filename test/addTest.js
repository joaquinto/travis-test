const chai = require('chai');
const expect = chai.expect;

const classFolder = require('../class/add');

describe('confirm all the dependencies for the app', function() {
  it('it should have the add file', function() {
    expect(classFolder).to.be.ok;
  });
});