

function getLargest(a, b, c) {
    if (a && b && c) {
      return Math.max(a, b, c);
    } else {
      throw "Error: all inputs must have a value.";
    }
  };
  
function getSmallest(a, b, c) {
    if (a && b && c) {
      return Math.min(a, b, c);
    } else {
      throw "Error: all inputs must have a value.";
    }
  };
  

  module.exports = {
    getLargest,
    getSmallest,
  };
