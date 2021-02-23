fib = (ntermino) => ntermino <= 1 ? ntermino : fib(ntermino-1) + fib(ntermino-2);
console.log(fib(10))