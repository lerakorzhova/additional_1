module.exports = function sum(a) {
    let res = 0;
    for (var i = 0; i < arguments.length; i++) {
        res = res + arguments[i];
    }
    return a ? function (b, ...theArg) {
        return b ? sum(res, b, ...theArg) : res;
    } : res;
}