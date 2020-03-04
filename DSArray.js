const mem = require('./memory');
const memory = new mem();
// import memory from './memory';
// const {allocate} = require('./memory');


class DSArray {
  constructor() {
    this.length = 0,
    this._capactiy = 0,
    this.ptr = memory.allocate(this.length);
  }

  push(value) {
    if(this.length >= this._capactiy) {
      this._resize((this.length+1) * DSArray.SIZE_RATIO);
    }
    memory.set((this.ptr+this.length), value);
    this.length++;
  }

  _resize(size) {
    let oldPtr = this.ptr;
    // let newPtr = memory.allocate(size);
    this.ptr = memory.allocate(size);

    if(this.ptr === null) {
      throw new error('Out of memory');
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    this._capactiy = size;
  }

  get(index) {
    if(index<0 || index >= this.length) {
      throw new error('Index doesn\'t exist');
    }
    return memory.get(this.ptr+index);
  }

  // pop() {
  //   memory.free(this.ptr + this.length - 1)
  //   this.length--
  // }

  pop() {
    if (this.length == 0) {
      throw new Error('Index error');
    }
    const newValue = memory.get(this.ptr + this.length - 1);
    this.length--;
    return newValue;
  }

  //splice(idxFrom, numToOverwrite, value)
  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }

    if(this.length >= this._capactiy) {
      this._resize((this.length+1)*DSArray.SIZE_RATIO);
    }

    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    memory.set(this.ptr + index, value);
    this.length++;
  }

  //length = 10 
  //index = 3
  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }

    memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
    // memory.copy(this.ptr + index, this.ptr + index , this.length - index )
    this.length--;

  }
}

DSArray.SIZE_RATIO = 3;

// const arr[] = 50; --> 310 --> arr for 50 blocks
// let arr = 310
// arr[3]; --> 312

function main(){
  DSArray.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new DSArray();

  // Add an item to the array
  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);

  arr.pop();
  arr.pop();
  arr.pop();

  // arr.push('tauhida');

  console.log(arr);
}

main();

const URLify = (str) => {
  let idx = str.indexOf(' ')
  let part = str.slice(0, idx)
  let rest = str.slice(idx+1)
  if(!rest.includes(' ')){
    return part+'%20'+rest;
  }
  return part+'%20'+functionA(rest)
}

//console.log(URLify('tay lor pic'));

const filterLessThanFive = (arr) => {
  let results =[];
  for(let i=0; i<arr.length; i++) {
    if(arr[i]>=5) {
      results.push(arr[i])
    }
  }
  return results
}
let array = [1,4,5,6,7,8,2]

console.log(filterLessThanFive(array));