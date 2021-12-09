function sum(i) {
    if (i == 1) {
        return 1;
    } else {
        return i + sum(i - 1);
    }
}

const recursionResult = sum(6);
console.log(recursionResult);