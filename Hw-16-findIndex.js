// The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
let array = [10, 14, 5, 7, 80, 0]
function findIndex(arr, func){
  for(let i = 0; i < arr.length; ++i){
    if(func(arr[i])){
      return i;
    }
  }
  return -1;
}
function check(arg){
  return arg > 14;
}
console.log(findIndex(array,check));