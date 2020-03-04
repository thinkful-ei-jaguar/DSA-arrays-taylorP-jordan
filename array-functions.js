const URLify = (str) => {
  let idx = str.indexOf(' ');
  let part = str.slice(0, idx);
  let rest = str.slice(idx+1);
  if(!rest.includes(' ')){
    return part+'%20'+rest;
  }
  return part+'%20' + URLify(rest);
};
//console.log(URLify('tay lor pic'));

const filterLessThanFive = (arr) => {
  let results =[];
  for(let i=0; i<arr.length; i++) {
    if(arr[i]>=5) {
      results.push(arr[i]);
    }
  }
  return results;
};
let array = [1,4,5,6,7,8,2];
// console.log(filterLessThanFive(array));

const maxSum = (arr) => {
  let currMax = 0;
  let currSum = 0;
  for(let i = 0; i < arr.length; i++){
    currSum += arr[i];
    if(currMax < currSum) {
      currMax = currSum;
    }
  }
  return currMax;
};
// console.log(maxSum([4, 6, -3, 5, -2, 1]));

const mergeArrays = (arr1, arr2) => {

  const oneArr = [...arr1, ...arr2];
  let n = oneArr.length;

  // for (let i = 0; i<arr2.length; i++){
  //   oneArr.push(arr2[i]);
  // }
  while(n !== 0){
    let newN = 0;
    for(let i = 1; i < oneArr.length; i++) {
      if(oneArr[i - 1] > oneArr[i]){
        let temp= oneArr[i];
        oneArr[i] = oneArr[i - 1];
        oneArr[i  - 1] = temp;
        newN = i;
      }
      n = newN;
    }
  }

  return oneArr;
};

const arr1 = [1, 3, 6, 8, 11];
const arr2 = [2, 3, 5, 8, 9, 10];
console.log(mergeArrays(arr1, arr2));

const removeChar = (str, remove) => {
  let tempArr = [];
  let newStr = [];
  let newStrMod = '';

  let idx = 0, x = 0;

  for(let i =0; i<remove.length; i++) {
    idx = Math.abs(remove[i].charCodeAt()-'a'.charCodeAt())
    console.log(idx)
    if(!tempArr[idx]) {
      tempArr[idx] = 1;
    }
  }
  console.log(tempArr)
  
  for(let i=0; i<str.length; i++) {
    idx = Math.abs(str[i].charCodeAt()-'a'.charCodeAt())
    console.log(idx)
    if(!tempArr[idx]) {
      newStr[x++] = str[i];
    }
  }

  console.log(newStr)

  for(let i=0; i<newStr.length; i++) {
    newStrMod += newStr[i];
  }

  return newStrMod
}

console.log(removeChar('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'))

const products = (arr) => {
  let results =[];
  let tempArr = [];
  let product = 1;
  for(let i = 0; i<arr.length; i++){
    product *= arr[i]
  }
  for(let i = 0; i<arr.length; i++){
    results.push(product/arr[i])
  }
  return results
}
const arr1 = [1, 3, 9, 4]
console.log(products(arr1))