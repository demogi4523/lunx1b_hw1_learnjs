"use strict";

// first task
// Независимы ли счётчики?
console.log("first task:");
console.log("Независимы ли счётчики?");
(() => {
  function makeCounter() {
    let count = 0;

    return function() {
      return count++;
    };
  }

  let counter = makeCounter();
  let counter2 = makeCounter();

  console.log("counter #1:"); // 0
  console.log(counter()); // 0
  console.log(counter()); // 1

  console.log("counter #2:"); // ?
  console.log(counter2()); // ?
  console.log(counter2()); // ?
})();

console.log();

// second task
// Объект счетчика
console.log("second task:");
console.log("Объект счетчика");
(() => {
  function Counter() {
    let count = 0;

    this.up = function() {
      return ++count;
    };
    this.down = function() {
      return --count;
    };
  }

  let counter = new Counter();

  console.log(counter.up()); // ?
  console.log(counter.up()); // ?
  console.log(counter.down()); // ?
})();

console.log();

// third task
// Посмотрите на код. Какой будет результат у вызова на последней строке?
console.log("third task:");
console.log("Посмотрите на код. Какой будет результат у вызова на последней строке?");
(() => {
  try {
    let phrase = "Hello";

    if (true) {
      let user = "John";

      function sayHi() {
        console.log(`${phrase}, ${user}`);
      }
    }

    sayHi();
  } catch (err) {
    console.log(err);
  }
})();

console.log()

// fourth task
// Сумма с помощью замыканий
console.log("fourth task:");
console.log("Сумма с помощью замыканий");
(() => {
  function sum(n) {
    let cnt = n;

    sum.valueOf = () => cnt;

    return (n) => {
      cnt += n;
      return cnt;
    }
  }

  console.log(`sum(1)(2) = ${sum(1)(2)}`);
  console.log(`sum(5)(-1) = ${sum(5)(-1)}`);
})();

console.log();

// fifth task
// Фильтрация с помощью функции
console.log("fifth task:");
console.log("Фильтрация с помощью функции");
(() => {
  function inBetween(a, b) {
    const filter = (n) => {
      if (a <= n && b >= n) {
        return true;
      }
      return false;
    };
    return filter;
  }

  function inArray(array) {
    const filter = (n) => {
      if (array.includes(n)) {
        return true;
      }
      return false;
    };
    return filter;
  }

  let arr = [1, 2, 3, 4, 5, 6, 7];

  console.log(`arr.filter(inBetween(3, 6)) = ${arr.filter(inBetween(3, 6))}`); // 3,4,5,6

  console.log(`arr.filter(inArray([1, 2, 10])) = ${arr.filter(inArray([1, 2, 10]))}`); // 1,2
})();

console.log();

// sixth task
//
console.log("sixth task:");
console.log("");
(() => {
  function byField(field_name) {
    const sorter = (el, otherEl) => {
      return el[field_name] > otherEl[field_name] ? 1 : -1;
    };
    return sorter;
  }

  let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];
  console.log(`users before sorting: ${JSON.stringify(users)}`);


  users.sort(byField('name'));
  console.log("users.sort(byField('name'));");
  console.log(`users: ${JSON.stringify(users)}`);

  users.sort(byField('age'));
  console.log("users.sort(byField('age'));");
  console.log(`users: ${JSON.stringify(users)}`);
})();

console.log();

// seventh task
// Армия функций
console.log("seventh task:");
console.log("Армия функций");
(() => {``
  function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
      let shooter = function(i) { // для сохранения текущего значения i передаем ее в функцию как параметр
        return () => console.log(i); // возвращаем стрелочную функцию
      };
      shooters.push(shooter(i));
      i++;
    }

    return shooters;
  }

  let army = makeArmy();

  army[0](); // у 0-го стрелка будет номер 0
  army[5](); // и у 5-го стрелка тоже будет номер 5
  // ... работает верно...
})();
