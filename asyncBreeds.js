const fs = require('fs');

const doneFunc = info => {
  console.log('Return val: ', info);
}

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    callback(data);
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

// we try to get the return value
const bombay = breedDetailsFromFile('Bombay', doneFunc);


module.exports = breedDetailsFromFile;
//console.log('Return Value: ', bombay); // => will NOT print out details, instead we will see undefined!
