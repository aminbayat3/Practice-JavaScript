let person1 = {  // you can study this blog again: https://javascript.info/map-set
    name: 'Amin Bayatpour'
}

let person2 = {
    name: 'Ali Bayatpour'
}

let map = new Map();
map.set('AM', person1);
map.set('AL', person2);

console.log(map);

console.log(map.keys(), map.values(), map.entries()); //iterator
 
for(let key of map.keys()) {
    console.log(key);
}

for(let value of map.values()) {
    console.log(value);
}

for (let entry of map) { // we could also say map.entries
    console.log(entry);
}


// new Map() – creates the map.
// map.set(key, value) – stores the value by the key.
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the value by the key.
// map.clear() – removes everything from the map.
// map.size – returns the current element count.

// map.keys() – returns an iterable for keys,
// map.values() – returns an iterable for values,
// map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.

// looping through maps



