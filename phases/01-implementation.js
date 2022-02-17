class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
    let index = this.hashMod(key)
    let newVal = new KeyValuePair(key, value);

    let curr = this.data[index]
    while(curr){
      if(curr.key === key){
        curr.value = value;
        return;
      }
      curr = curr.next
    }
    if(this.data[index]){
      let curr2 = this.data[index]
      this.data[index] = newVal
      this.data[index].next = curr2
      this.count++
    } else {
      this.data[index] = newVal
      this.count++
    }
  }


  read(key) {
    let index = this.hashMod(key);

    let curr = this.data[index]
    while(curr){
      if(curr.key === key) return curr.value;
      curr = curr.next
    }
  }


  resize() {
    // Your code here
  }


  delete(key) {
    // Your code here
  }
}


module.exports = HashTable;
