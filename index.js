//                      Algo1 (same)

//this function will receive two arrays and check if every value has its
//correspondent squared in the second array
//the frequency of values must be the same

//let same = (array1, array2) => {
//we clone the second array
//-we loop through array1
//--we store the current number of array1 in current
//--we declare variable named exist initialized with false
//--we loop through array2
//---we compare each value of array2 with (current*current)
//---if the values are equal we set exist to true and delete the current value of array2 and break
//--if exist equal false return false
//-return true

/*let exist = false;
  array2Clone = [...array2];
  for (let i = 0; i < array1.length; i++) {
    let current = array1[i];
    exist = false;
    for (let j = 0; j < array2Clone.length; j++) {
      let squared = current * current;
      if (array2Clone[j] === squared) {
        exist = true;
        break;
      }
    }
    if (exist === false) {
      return false;
    }
  }
  return exist;
};

let result = same([1, 2], [4, 1]);

console.log(result);*/

//                        Algo 2(sumZero)

//sumZero function will return the first pair in an array or undefind if there is no pair

/*const sumZero = (numbers) => {
  //-we declare an array pair with two elements
  //-we loop through num in numbers
  //--if num equal 0 assign numbers[num] to pair[0] and continue
  //--if pair[0]+numbers[num] ===0
  //---asign numbers[num] to pair[1]
  //---return pair
  //-return undefind

  const pair = new Array(2);
  let min = 0;
  let max = numbers.length - 1;
  while (min <= max) {
    if (numbers[min] + numbers[max] == 0) {
      pair[0] = numbers[min];
      pair[1] = numbers[max];
      return pair;
    } else if (numbers[min] + numbers[max] < 0) {
      min++;
    } else {
      max--;
    }
  }
  return undefined;
};
console.log(sumZero([-3, 1, 5]));*/

//count Unique Values

/*const coutUniqueValues = (array) => {
  //-we declare a counter inisialized with 1
  //-we loop through the elements
  //--compare the current element with the next one
  //--if they are not equal
  //---increment counter by one
  //--if the current index equal array.length - 2 return counter
  //-return 0
  let counter = 1;
  let end = array.length - 2;

  for (let i in array) {
    if (array[i] !== array[parseInt(i) + 1]) {
      counter++;
    }
    console.log(i + " " + end);
    if (i == end) {
      return counter;
    }
  }
  return 0;
};

console.log(coutUniqueValues([1, 1, 5, 6, 2]));*/

//maxSubArraySum
/*this function will receive an array of numbers and 
a number and it will return the max sum of that number with the elements 
of that array*/
//this function is not what i want
//const maxSubArraySum = (arr, num) => {
//-we declare a variable called max
//-we loop through the array from 1
//--if arr[i]>max then we assign arr[i] to max
//-we return max+num

/* if (!arr.length) return null;
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max + num;
};

let result = maxSubArraySum([37, 3, 8, 22, 58, 4], 2);
console.log(result);*/

/*const maxSubArraySum = (arr, n) => {
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = n; i <= arr.length - n; i++) {
    console.log(tempSum);
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
};
let result = maxSubArraySum([37, 3, 8, 22, 58, 4], 2);
console.log(result);*/

/*const factorial = (num) => {
  if (num === 1) return 1;
  return num * factorial(num - 1);
};
//factorial(4)
//return 3*factorial(2)
//         2*factorial(1)
//           1

let result = factorial(3);
console.log(result);*/

/*const collectOddValues = (array) => {
  if (array.length === 0) return [];
  let newArray = [];
  if (array[0] % 2 !== 0) {
    newArray.push(array[0]);
  }
  newArray = newArray.concat(collectOddValues(array.slice(1)));
  return newArray;
};

let result = collectOddValues([1, 2, 3, 4, 5]);
console.log(result);*/

//search linear algorithm

/*const FindIndexOf = (array, element) => {
  for (const index in array) {
    if (element === array[index]) {
      return index;
    }
  }
  return -1;
};

let result = FindIndexOf([1, 2, 3, 4, 5], 2);
console.log(result);*/

//Bainary Search algorithm

/*const includes = (array, num) => {
  let max = array.length - 1;
  let min = 0;
  while (min <= max) {
    let middle = Math.floor((max + min) / 2);
    if (array[middle] === num) {
      return middle;
    } else if (num < array[middle]) {
      max = middle - 1;
    } else {
      min = middle + 1;
    }
  }
  return -1;
};
//max=2 min=0
//middle=1 min=2

let result = includes([3, 4, 5, 6, 7, 8, 9], 8);
console.log(result);*/

//Searsh for a string

const find = (longString, string) => {
  let count = 0;
  for (let i = 0; i < longString.length; i++) {
    let tempCount = 0;
    for (let j = 0; j < string.length; j++) {
      if (longString[parseInt(i) + parseInt(j)] === string[j]) {
        tempCount++;
      }
    }
    if (tempCount === string.length) {
      count++;
    }
  }
  return count;
};
console.log(find("issam", "sss"));
