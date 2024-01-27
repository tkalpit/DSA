class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hashFunc(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  setValue(key, value) {
    //Using separate chaining
    let index = this._hashFunc(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  getValue(key) {
    let index = this._hashFunc(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (key === this.keyMap[index][i][0]) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  getAllValues() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }

  getAllKeys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }
}

let ht = new HashTable(6);
ht.setValue("name", "John");
ht.setValue("age", 22);
ht.setValue("city", "Chicago");
ht.setValue("state", "Illinois");
ht.setValue("gender", "Male");
console.log("Get: ", ht.getValue("name"));
console.log("Get all keys: ", ht.getAllKeys());
console.log("Get all values: ", ht.getAllValues());
//Hash table/map
//Collection of key-value pairs

//_hashFunc: To calculate index of key which will use to set data.

// Handling collision in hash function there are 2 strategies :
// 1. Separate Chaining: Nested array or linked list will use in separate chaining. Example: [[first], [second]] on same index.
// 2. Linear Probing: Will look empty index if the current index has any element.

// ---------Complexity--------
//---AVG CASE--
// Insertion: O(1)
// Deletion: O(1)
// Access: O(1)