'use strict'

var displayBMPProps = function(bitmap) {

  var bitmapObject = {};

  bitmapObject.type = bitmap.toString('utf-8', 0, 2);
  bitmapObject.size = bitmap.readUInt32LE(2);
  bitmapObject.startOfPixels = bitmap.readUInt32LE(10);
  bitmapObject.headerSize = bitmap.readUInt32LE(14);
  bitmapObject.width = bitmap.readUInt32LE(18);
  bitmapObject.height = bitmap.readUInt32LE(22);
  bitmapObject.colorDepth = bitmap.readUInt16LE(28);
  bitmapObject.paletteSize = bitmap.readUInt32LE(46);

  var palette = [];

  var blueStart = 54;
  var greenStart = 55;
  var redStart = 56;
  var alphaStart = 57;

  for(var i = 0; i < 256; i++) {
    
    palette[i] = {};
    
    palette[i]['B'] = bitmap.readUInt8(blueStart);
    palette[i]['G'] = bitmap.readUInt8(greenStart); 
    palette[i]['R'] = bitmap.readUInt8(redStart);
    palette[i]['A'] = bitmap.readUInt8(alphaStart);

    blueStart+=4;
    greenStart +=4;
    redStart+=4;
    alphaStart+=4;

  } 

  bitmapObject.palette = palette
  
  console.log(bitmapObject);

  console.log(bitmapObject.palette.length);

  return bitmapObject;

}

module.exports = displayBMPProps;
