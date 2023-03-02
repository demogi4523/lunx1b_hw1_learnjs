"use strict";


const cacheForSimpleNumbers = new Set();

function isSimple(n) {
  if (typeof(n) !== "number") {
    throw new Error("n must be number!!!");
  }

  if (n < 2) {
    return false;
  }

  if (cacheForSimpleNumbers.has(n)) {
    return true;
  }

  let num = 2;
  while (num * num <= n) {
    if (n % num == 0) {
      return false;
    }
    num += 1;
  }
  cacheForSimpleNumbers.add(n);
  return true;
}

function getSimpleOnInterval(start, finish) {
  const res = [];
  for (let currentValue = start; currentValue <= finish; currentValue++) {
    if (isSimple(currentValue)) {
      res.push(currentValue)
    }
  }
  return res;
}

