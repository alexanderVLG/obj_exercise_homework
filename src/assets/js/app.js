"use strict"
// =============   first exercise ===================
const data = {
  id: 1,
  age: 25,
  price: 25000,
  telNumber: {
    mobile: 79991001010,
    job: 78121001010
  }
}

const newObj = deepCopy(data);

function deepCopy(obj) {
  const objCopy = {};
  for (let i in obj) {
    if (typeof obj[i] === "object") {
      objCopy[i] = deepCopy(obj[i]);
      continue;
    }
    objCopy[i] = obj[i];
  }
  return objCopy;
}

console.log(newObj)
data.telNumber.mobile = 78009009090;
console.log(newObj)
console.log(data)

// ====================== second exercise ==========================
/* const arr = [1, 2, 3, 4, 5];

function takeFromInterval(param1, param2, param3) {
  let items = [];
  if (param2 === 0 || param3 === 0 || typeof param2 === "string" || typeof param3 === "string" || param2 > arr.length || param3 > arr.length || param2 === param3) {
    return items;
  } else if (param2 < param3) {
    items.push(param2);
    for (let i = param2; i < param1.length; i++) {
      items.push(param1[i]);
      if (param1[i] === param3) {
        break;
      }
    }
    return items;
  } else if (param2 > param3) {
    items.push(param3);
    for (let i = param3; i < param1.length; i++) {
      items.push(param1[i]);
      if (param1[i] === param2) {
        break;
      }
    }
    return items;
  }
}
let result = takeFromInterval(arr, 2, "");
console.log(result); */

// ===================== third exercise =============================

/* const myIterable = {
  from: 15,
  to: 25
}

myIterable[Symbol.iterator] = function () {
  let current = this.from;
  let last = this.to;

  return {
    next() {
      if (current <= last) {
        return {
          done: false,
          value: current++
        };
      } else {
        return {
          done: true
        };
      }
    }
  }
};
for (let i of myIterable) {
  console.log(i)
}
myIterable[Symbol.iterator] = function () {
  let current = this.from;
  let last = this.to;

  return {
    next() {
      if (current >= last) {
        return {
          done: false,
          value: current--
        };
      } else {
        return {
          done: true
        };
      }
    }
  }
};

for (let i of myIterable) {
  console.log(i)
} */
