'use strict'

var randomize = function(bitmap, oldFile) {

  var fs = require('fs');

  for(var i = 0; i < 1023; i++) {
    bitmap[54+i] = Math.floor(Math.random()*256);
  }

  for(var i = 0; i < 10000 ; i++) {
    bitmap[1078+i] = Math.floor(Math.random()*256);
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

module.exports = randomize;
