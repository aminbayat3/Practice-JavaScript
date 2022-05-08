// if we have an object and we wanna add a property to it we can use symbol.for('') for the key so we can also access it  everywhere in our app
// if want it to be a unique key then we have write let symbol = Symbol('')

let array = [1, 2, 3]; //Symbol.iterator is a popular Symbol property that we can use on an array and it gives us back a function

console.log(typeof array[Symbol.iterator]); //function

array[Symbol.iterator] = () => {
  let nextValue = 10;
  return {
    next: () => {
      nextValue++;
      return {
        done: nextValue > 15 ? true : false,
        value: nextValue,
      };
    },
  };
};

for (let element of array) {
  console.log(element);
}

// let it = array[Symbol.iterator]();
// console.log(it); //Array Iterator object that has a next funtion
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

let person = {
  name: "Amin",
  hobbies: ['Sports', 'Cooking'],
  [Symbol.iterator]: function() {
      let i = 0
      let hobbies = this.hobbies;
    return {
      next: () => {
          let value = hobbies[i];
          i++
        return {
          done: i > hobbies.length ? true : false,
          value: value,
        };
      },
    };
  },
};


for (let hobby of person) {
    console.log(hobby);
}


//Generator  // a Generator will return an iterator so that we can iterate through
function *select() {
  yield "House",
  yield "Garage"
}

let it1 = select();
console.log(it1.next());
console.log(it1.next());
console.log(it1.next());


let obj = {
  [Symbol.iterator]: gen
}

function *gen() {
  yield 1;
  yield 2;
}

for (let element of obj) {
  console.log(element);
}


// Promises
function waitASecond(seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      seconds++;
      resolve(seconds);
    }, 1000)
  });
}

waitASecond(0).then(waitASecond).then((seconds) => console.log(seconds)).catch((e) => console.log(e));


let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolved!');
  }, 1000)
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Rejected!');
  }, 2000)
});

Promise.all([promise1, promise2]).then((success) => { //it waits for all of the promise to resolve and then we can have either an array of what is resolved or if even one them gets rejected it will return rejected
  console.log(success);
}).catch((e) => console.log(e));








