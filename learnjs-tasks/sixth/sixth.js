"use strict";

// first task
// Установка и уменьшение значения счётчика
console.log("first task:");
console.log("Установка и уменьшение значения счётчика");
(() => {
  function makeCounter() {

    function counter() {
      return counter.count++;
    };

    counter.count = 0;

    counter.toString = () => counter.count;
    counter.set = (newCountValue) => {
      counter.count = newCountValue;
    };
    counter.decrease = () => {
      counter.count--;
    }

    return counter;
  }

  const counter = makeCounter();
  counter();
  counter();
  console.log(`counter: ${counter}`);
  counter.set(6);
  console.log(`counter: ${counter}`);
  counter.decrease();
  console.log(`counter: ${counter}`);
  console.log(`counter: ${counter}`);
})();

console.log();

// second task
//
console.log("second task:");
console.log("Сумма с произвольным количеством скобок");
(() => {
  function sum(n) {
    let cnt = n;

    const wrap = (m) => {
      cnt += m;
      return wrap;
    };

    wrap.toString = () => cnt;

    return wrap;
  }

  console.log(`sum(1)(2) = ${sum(1)(2)}`);
  console.log(`sum(1)(2)(3) = ${sum(1)(2)(3)}`);
  console.log(`sum(5)(-1)(2) = ${sum(5)(-1)(2)}`);
  console.log(`sum(6)(-1)(-2)(-3) = ${sum(6)(-1)(-2)(-3)}`);
  console.log(`sum(0)(1)(2)(3)(4)(5) = ${sum(0)(1)(2)(3)(4)(5)}`);
})();


