

var isAnagram = function(test, original) {
 
    if (test.length !== original.length) {
      return false;
    } 
    
    original = original.toLowerCase().split("").sort().join("");
    test = test.toLowerCase().split("").sort().join("");
    
    return (original === test);
   }

module.exports = isAnagram

console.log(isAnagram("Words", "Sword"))
