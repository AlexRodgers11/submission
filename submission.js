const findSum = function(array) {
  let total = 0;
  for(i = 0; i < array.length; i++) {
    total += array[i]
  }
  return total;
};

const findFrequency = function(array) {
  let hash = {};
  let most = array[0];
  let least = array[0];
  
  for(let i = 0; i < array.length; i++) {
    hash[array[i]] = hash[array[i]] ? hash[array[i]] + 1 : 1;
    if(hash[array[i]] > hash[most]) {
      most = array[i]
    } 
  }
  
  for(let item in hash) {
    if(hash[item] < hash[least]) {
      least = item;
    }
  }
  
  return {most: most, least: least}
};

const isPalindrome = function(str) {
  let palindrome = true;
  let left = 0;
  let right = str.length - 1;
  
  while(left < right) {
    if(str[left].toLowerCase() !== str[right].toLowerCase()) {
      palindrome = false;
      left = str.length
    }
    left++;
    right--;
  }
  return palindrome;
};

const largestPair = function(array) {
  let highest = 0;
  for(let i = 0; i < array.length - 1; i++) {
    let product = array[i] * array[i+1]
    highest = highest > product ? highest : product
  }
  return highest;
};

const removeParenth = function(str) {
  let newStr = ''; 
  for(let i = 0; i < str.length; i++) {
    if(str[i] !== '(' && str[i] !== ')'){
      newStr += str[i]
    } else if(str[i] !== ')') {
      let counter = 1;
      while(str[i + counter] !== ')') {
        counter++
      }
      return newStr + str.slice(i + counter + 1)
    } 
  }
};

const scoreScrabble = function(str) {
  let score = 0;
  const points = {
    a: 1, 
    b: 3, 
    c: 3, 
    d: 2, 
    e: 1, 
    f: 4,
    g: 2, 
    h: 4,
    i: 1,
    j: 8,
    k: 5,
    l: 1,
    m: 3,
    n: 1,
    o: 1,
    p: 3,
    q: 10,
    r: 1,
    s: 1,
    t: 1,
    u: 1,
    v: 4,
    w: 4,
    x: 8,
    y: 4,
    z: 10
  };
  for(let i = 0; i < str.length; i++) {
    score += points[str[i].toLowerCase()];
  }
  return score;
};
