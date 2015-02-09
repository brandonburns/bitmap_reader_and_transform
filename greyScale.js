'use strict'

var greyScale = function(bitmap, oldFile) {

  var fs = require('fs');

  var palette = [];

// sets palette location
  var blueCurrent = 54;
  var greenCurrent = 55;
  var redCurrent = 56;
  var alphaCurrent = 57;

// reads out palette into array of individual palette objects [{B: number, G: number, R: number, A: number}, {BGRA}, etc.]
  for(var i = 0; i < 256; i++) {
  
    palette[i] = {};
    
    palette[i]['B'] = bitmap.readUInt8(blueCurrent);
    palette[i]['G'] = bitmap.readUInt8(greenCurrent); 
    palette[i]['R'] = bitmap.readUInt8(redCurrent);
    palette[i]['A'] = bitmap.readUInt8(alphaCurrent);

    blueCurrent+=4;
    greenCurrent +=4;
    redCurrent+=4;
    alphaCurrent+=4;

  } 

// reset palette location
  blueCurrent = 54;
  greenCurrent = 55;
  redCurrent = 56;
  alphaCurrent = 57;

// compare palette values in each palette object, set all values to max value, writes these new values to the buffer
  for(var i = 0; i < 256; i++) {

    var individualPalette = palette[i];

    var arr = Object.keys(individualPalette).map(function(key) {
      return individualPalette[key];
    });

    var max = Math.max.apply(null, arr);

    palette[i]['B'] = max;
    palette[i]['G'] = max;
    palette[i]['R'] = max;
    palette[i]['A'] = max;
    // console.log("Max is " + max);

    bitmap[blueCurrent] = palette[i]['B'];
    bitmap[greenCurrent] = palette[i]['G'];
    bitmap[redCurrent] = palette[i]['R'];
    bitmap[alphaCurrent] = palette[i]['A'];

    blueCurrent+=4;
    greenCurrent +=4;
    redCurrent+=4;
    alphaCurrent+=4;

  }


  if(oldFile.charAt(oldFile.indexOf('.') - 1) === '2') {
    var newFile = oldFile;  
  }
  else {
    var newFile = oldFile.slice(0, oldFile.indexOf('.')) + '2.bmp';  
  }

  fs.writeFile(newFile, bitmap, function(err, success) {
    if (err) throw err;
    console.log('Success!');
  });



}


module.exports = greyScale;
