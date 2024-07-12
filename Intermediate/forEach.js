let arr = [1,2,3];

arr.forEach(function(value, index, array){
  console.log(value);
});


function forEach(array, callback){
  for(let i = 0; i < array.length; i++){
    callback(array[i], i, array);
  }
}

function countZeroes(arr){
  let total = 0;
  arr.forEach(function(val){
    if(val === 0) {
        total++;
    }
  });
  return total;
}

countZeroes([2,4,6]); // 0
countZeroes([0,1,2,0,1]); // 2


// Colors

const colors = ['teal', 'cyan', 'peach', 'purple'];

function yell(val, i){
    const caps = val.toUpperCase();
    console.log(`At index ${i}, ${caps}`);
}

colors.forEach(yell);

// prices

const prices = [30.99, 19.99, 2.5, 99.0];
let total = 0;

//for (let price of prices){
//    total += price;
//}

// For each
prices.forEach(function(price){
    total += price;
});


console.log(total);

// Build for each function 

function forEach(arr, callback){
    for (let i = 0; i < arr.length; i++){
        callback(arr[i], i);
    }
}

forEach(colors, function(color){
    console.log(color.toUpperCase(), 'at index of', i);
});

colors.forEach(function(){
    console.log(color.toUpperCase(), 'at index of', i);
});