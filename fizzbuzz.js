

const fizzbuzz = (num) => {
    let result = []
    
    for (i = 1; i <= num; i++) {

        if (i % 15 === 0) {
            result.push("Fizzbuzz!");
        }

        if(i % 3 === 0) {
            result.push("Fizz!");
        } 
        
        else if (i % 5 === 0) {
            result.push("Buzz!");
        }
        
        else {
            result.push(i);
        }
    }
    
    return result;
    
}
    
module.exports = fizzbuzz

console.log(fizzbuzz(15))


