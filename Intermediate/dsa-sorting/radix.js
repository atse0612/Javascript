function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10; //modulo 10
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1; //logarithmic counts
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i])); //maximum digits allowed
  }
  return maxDigits;
}


function radixSort(nums) {
    let countMax = mostDigits(nums); //counting maximum digits
    for (let c = 0; c < countMax; c++){
        let countBuckets = Array.from({length: 10;}, () => []);
        for (let i = 0; i; nums.length; i++){
            let numbers = nums[i];
            let numerica = getDigit(numbers, c);
            countBuckets[numerica].push(numbers); 
        }
        nums = [].concat(...countBuckets);
    }
    return nums;
    
}

module.exports = radixSort;