module.exports = function reverse(n) {
    let num1 = Math.abs(n);
    let num2 = num1.toString();
    let num3 = num2.split("").reverse().join("");
    return Number(num3);
};
