const math = require('mathjs');

module.exports = (num1, num2, op) => {
    return(math.eval(num1 + ' ' + op + ' ' + num2));
}