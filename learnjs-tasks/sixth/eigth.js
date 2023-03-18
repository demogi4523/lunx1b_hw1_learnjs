"use strict";

// first task
// Вывод каждую секунду
console.log("first task:");
console.log("Вывод каждую секунду");
(() => {
  function printNumber(from, to) {
    let i = from;
    const q = setInterval(() => {
      console.log(i);
      i += 1;
      if (i > to) {
        clearInterval(q);
      }
    }, 1000, i);
  }

  printNumber(2, 4);

  function printNumberWithRecursion(from, to) {
    let i = from;
    let q;
    const wrap = () => setTimeout(() => {
      console.log(i);
      i += 1;
      if (i > to) {
        clearTimeout(q);
      } else {
        wrap();
      }
    }, 1000, i);

    q = wrap();
  }

  printNumberWithRecursion(5, 7);
})();

console.log();

// second task
// Что покажет setTimeout?
console.log("second task:");
console.log("Что покажет setTimeout?");
(() => {
  let i = 0;

  setTimeout(() => console.log(i), 100); // ?

  // предположим, что время выполнения этой функции >100 мс
  for(let j = 0; j < 100000000; j++) {
    i++;
  }
})();
