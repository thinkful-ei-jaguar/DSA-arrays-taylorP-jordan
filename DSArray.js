const memory = require('./memory')

class DSArray {
  constructor() {
    this.length = 0,
    this._capactiy = 0,
    this.ptr = memory.allocate(this.length)
  }

  push(value) {
    if(this.length >= this._capactiy) {
      this._resize((this.length+1)*DSArray.SIZE_RATIO)
    }
    memory.set((this.ptr+this.length), value)
    this.length++
  }

  _resize(size) {
    let newPtr = memory.allocate(size)
    let oldPtr = this.ptr
    if(newPtr === null) {
      throw new error('Out of memory')
    }
    memory.copy(newPtr, oldPtr, this.length)
    memory.free(oldPtr)
    this._capactiy = size
  }

  get(index) {
    if(index<0 || index >= this.length) {
      throw new error('Index doesn\'t exist')
    }
    return memory.get(this.ptr+index)
  }

  pop() {

  }

  insert() {

  }

  remove() {

  }
}
DSArray.SIZE_RATIO = 3;

const arr[] = 50; --> 310 --> arr for 50 blocks

let arr = 310

arr[3]; --> 312