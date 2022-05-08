// SETS : in arrays there might be same elements therefore positioning is important, whereas with Set holds unique values

let set = new Set([1, 1, 1]);

set.add(2)
set.delete(1);

for (let element of set) { // ordering doesnot matter in set
    console.log(element);  // 1
}

console.log(set.has(1));


// Reflect 
class Person {
    constructor(name, age) {
        this._name = name;
        this.age = age;
    }
    
    get name() {
        return this._name
    }

    set name(value) {
        this._name = value;
    }

    greet(prefix) {
        console.log(prefix + 'Hello, I am' + this.name);
    }
}

let mum = {
    _name: 'Mum'
}


let person = Reflect.construct(Person, ['Amin', 26]);
person.apply(person.greet, person, ['...']); //... Hello, i am Amin


console.log(Reflect.get(person, 'name')); // instead of person.name / because we made the name private this name here is referring to the getter not to the _name 
Reflect.set(person, 'name', 'Ali'); 

console.log(Reflect.get(person, 'name')); //Ali

console.log(Reflect.get(person, 'name', mum)); // if we have a getter it will result Mum

Reflect.set(person, 'name', 'Okhchi', mum); //if we have a setter we get this result because Reflect.set calls the settter

console.log(Reflect.get(person, 'name', mum)); // Okhchi (the name key in the mum object will change)

console.log(Reflect.has(person, 'name'));

//ownKeys method

console.log(Reflect.ownKeys(person)); // ["_name", "age"] // it will give us the core property(in the constructor not setter and getter)

// Adding properties

Reflect.defineProperty(person, "hobbies", {
    writable: true,  // if this is false we cannot change the property
    value: ['Sports', 'Cooking']
});
person.hobbies = ['Nothing']

console.log(person.hobbies); // ['Nothing']

//deleting
Reflect.deleteProperty(person, 'age');


// Proxy is a wrapper for an object 
let person2 = { 
    age: 26,
    name: 'Amin'
}

let handler = {  //get trap
    get: function(target, property) {  
        return property in target ? target[property] : 'Non existant'
    },

    set: function(target, property, value) { 
        if (value.length >= 2) {
            console.log('set Trap!');
        //    target[property] = value;
                Reflect.set(target, property, value)
        }
    },

    apply: function(target, thisArg, argumentList) {
        if(argumentList.length == 1) {
            return Reflect.apply(target, thisArg, argumentList);
        }
    }
}

let proxy = new Proxy(person2, handler);

console.log(proxy.age);//this is calling the get trap


// proxies and Reflect

proxy.name = 'Ali';  // this is calling the set Trap

console.log(proxy.name);

// we can also use setPrototypeOf(person, proxy) to use person instead of proxy

Reflect.setPrototypeOf(person, proxy); // we should write the proxy like this though let proxy = new Proxy({}, handler)

console.log(person.hobbies); // Non existant

function log(message) {
    console.log('Log entry created, message:' + message);
}
proxy('Amin');
