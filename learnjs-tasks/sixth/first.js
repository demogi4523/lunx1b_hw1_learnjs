"use strict";

// first task
// Вычислить сумму чисел до данного
console.log("first task:");
console.log("Вычислить сумму чисел до данного");
(() => {
  const cycleSumTo = (n) => {
    if (isNaN(n) || typeof n !== "number") {
      throw new Error("n must be integer more or equal 1!!!");
    }
    if (n < 0) {
      throw new Error("n must be integer more or equal 1!!!");
    }
    let res = 0;
    for (let cur = res + 1; cur <= n; cur += 1) {
      res += cur;
    }
    return res;
  };
  console.log(`sumTo(100) через цикл равно:\n${cycleSumTo(100)}`);

  const recursionSumTo = (n) => {
    if (isNaN(n) || typeof n !== "number") {
      throw new Error("n must be integer more or equal 1!!!");
    }
    if (n < 0) {
      throw new Error("n must be integer more or equal 1!!!");
    }
    if (n == 0) {
      return 0;
    }
    return n + recursionSumTo(n - 1);
  };
  console.log(`sumTo(100) через рекурсию равно:\n${recursionSumTo(100)}`);

  const arithmeticProgressionSumTo = (n) => {
    if (isNaN(n) || typeof n !== "number") {
      throw new Error("n must be integer more or equal 1!!!");
    }
    if (n < 0) {
      throw new Error("n must be integer more or equal 1!!!");
    }
    return parseInt(n * (n + 1) / 2);
  }
  console.log(`sumTo(100) через арифметическую прогрессию равно:\n${arithmeticProgressionSumTo(100)}`);
})();

console.log();

// second task
// Вычислить факториал
console.log("second task:");
console.log("Вычислить факториал");
(() => {
  const factorial = (n) => {
    if (isNaN(n) || typeof n !== "number") {
      throw new Error("n must be integer more or equal 1!!!");
    }
    if (n < 0) {
      throw new Error("n must be integer more or equal 1!!!");
    }
    if (n == 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  console.log(`factorial(5) = ${factorial(5)}`);
})();

console.log();

// third task
// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.
console.log("third task:");
console.log("Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.");
(() => {
  const cache = {
    1: 1,
    2: 1,
  };

  const fib = (n) => {
    if (isNaN(n) || typeof n !== "number") {
      throw new Error("n must be integer more or equal 1!!!");
    }
    if (n < 0) {
      throw new Error("n must be integer more or equal 1!!!");
    }
    if (cache.hasOwnProperty(n)) {
      return cache[n];
    }
    const res = fib(n - 1) + fib(n - 2);
    cache[n] = res;
    return res;
  }

  console.log(`fib(77)) = ${fib(77)}`);
})();

console.log()

// fourth task
// Вывод односвязного списка
console.log("fourth task:");
console.log("Вывод односвязного списка");
(() => {
    let list = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: 4,
            next: null,
          }
        }
      }
    };

    const printListOverCycle = (singleLinkedList) => {
      let cur = singleLinkedList;
      const res = [];

      while (cur !== null) {
        res.push(cur.value);
        cur = cur.next;
      }

      return res.join(', ');
    };

    const printListOverRecursion = (singleLinkedList, prev = []) => {
      if (singleLinkedList === null) {
        return prev.join(', ');
      }

      prev.push(singleLinkedList.value);
      return printListOverRecursion(singleLinkedList.next, prev);
    };

    console.log(`Односвязный список через цикл:\n${printListOverCycle(list)}`);
    console.log(`Односвязный список через рекурсию:\n${printListOverRecursion(list)}`);

})();

console.log();

// fifth task
// Вывод односвязного списка в обратном порядке
console.log("fifth task:");
console.log("Вывод односвязного списка в обратном порядке");
(() => {
  let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null,
        }
      }
    }
  };

  const printReversedListOverCycle = (singleLinkedList) => {
    let cur = singleLinkedList;
    const res = [];

    while (cur !== null) {
      res.push(cur.value);
      cur = cur.next;
    }

    return res.reverse().join(', ');
  };

  const printReversedListOverRecursion = (singleLinkedList, prev = []) => {
    if (singleLinkedList === null) {
      return prev.reverse().join(', ');
    }

    prev.push(singleLinkedList.value);
    return printReversedListOverRecursion(singleLinkedList.next, prev);
  };

  console.log(`Односвязный список в обратном порядке через цикл:\n${printReversedListOverCycle(list)}`);
  console.log(`Односвязный список в обратном порядке через рекурсию:\n${printReversedListOverRecursion(list)}`);

})();
