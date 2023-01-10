let set = new WeakSet();
let key = {};
set.add(key);
console.log(set.has(key));
key = null;
console.log(set.has(key));

// In weakset , we lost the reference as well if key having null value
