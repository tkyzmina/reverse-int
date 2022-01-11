module.exports = function reverse(n) {
    let str = Math.abs(n).toString();
    let newNum = "";
    for (let i = 0; i < str.length; i++) {
        newNum += str[str.length - (i + 1)];
    }
    return newNum;
};
