const fibonacci = function(n) {
    if (n < 0) return "OOPS";
    if (n === 0) return 0;
    if (n <= 2) return 1;

    let x = 1;
    let y = 1;
    for(i=3; i<=n; i++) {
        let temp = x + y;
        x = y;
        y = temp;
    }
    return y;
};

// Do not edit below this line
module.exports = fibonacci;
