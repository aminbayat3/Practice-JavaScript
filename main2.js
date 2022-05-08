// assign()

let obj1 = {
    a: 1
  }
  
  let obj2 = {
    b: 2
  }
  
  let obj3 = Object.assign(obj1, obj2);
  console.log(obj3); //{ a: 1, b: 2}
  
  
  // Array.from
  
  let array1 = [10, 12, 16];
  console.log(array1);
  
  let newArray = Array.from(array1, val => val * 2); // [20, 24, 32]
  console.log(newArray);
  console.log(array1); // [10, 12, 16] the array remained unchanged
  
  // array.fill
  let array2 = [10, 12, 16];
  
  array2.fill(100, 0, 2);  // [100, 100, 16] // fill(the amount we wanna fill the array with, starting point, ending point(be careful that the ending point itself is not included));
  
  
  // includes(String and Array) return true or false
  const name = "Amin Bayatpour";
  
  const include = name.includes('Baya');
  console.log(include); // true
  
  const arrayNumber = [1, 2, 4, 5];
  
  console.log(arrayNumber.includes(1));
  
  const arrayNames = ['Amin', "Ali", 'Sohrab'];
  console.log(arrayNames.includes('Amin'));
  
  // find returns either value or undefined // we alse have contains which we mostly use it for getting Dom elements
  console.log(arrayNumber.find(2))
  
  
  // find
  console.log(arrayNumber.find((val) => val >= 2)); // it will return the first value that is true