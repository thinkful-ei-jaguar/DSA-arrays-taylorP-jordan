const memory = require('./memory');

class DSArray {
  constructor() {
    this.length = 0,
    this._capactiy = 0,
    this.ptr = memory.allocate(this.length);
  }

  push(value) {
    if(this.length >= this._capactiy) {
      this._resize((this.length+1)*DSArray.SIZE_RATIO);
    }
    memory.set((this.ptr+this.length), value);
    this.length++;
  }

  _resize(size) {
    let newPtr = memory.allocate(size);
    let oldPtr = this.ptr;
    if(newPtr === null) {
      throw new error('Out of memory');
    }
    memory.copy(newPtr, oldPtr, this.length);
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