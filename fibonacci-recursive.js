function fibo(i) {
    if (i == 0) {
        return 0;
    } else if (i == 1) {
        return 1;
    }
    return fibo(i - 1) + fibo(i - 2);
}

const fibonacci = fibo(7);
console.log(fibonacci);