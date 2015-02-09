var fs = require("fs");
var expect = require("chai").expect;
var randomize = require('../lib/randomize');
var displayBMPProps = require('../lib/readFile');
var oldFile = "test.bmp";
var bitmap = fs.readFileSync(oldFile);
var finish = displayBMPProps(bitmap);
var greyScale = require('../lib/greyScale');

describe ('finish', function() {
	var saveProcessArgV;
	before(function(){
	  saveProcessArgV = process.argv;
      process.argv = ['','', "test.bmp"];
	});
	it('Should be 100px in height', function() {
		expect(finish.height).to.eql(100);
	});
	it('Should be 100px in width', function() {
		expect(finish.width).to.eql(100);
	});
	it('Should start at pixel 1078', function() {
		expect(finish.startOfPixels).to.eql(1078);
	});
	after(function(){
	  process.argv = saveProcessArgV;
	})
});
describe ('greyScale', function() {
	it('Should show that palette starts undefined', function() {
		expect(greyScale.palette).to.be.undefined;
	});
	it('Should expect palette array to start out empty', function() {
		expect(greyScale.palette).to.be.empty;
	});
})
