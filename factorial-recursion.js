function factorial(i) {
    if (i == 1) {
        return 1;
    } else {
        return i * factorial(i - 1);
    }
}

const getFact = factorial(6);
console.log(getFact);