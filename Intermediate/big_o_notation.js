function reverse(str){
    let result = '';
    for(let i = str.length - 1; i > 0; i--){
        result += str[i]
    }
    return result;
}

function reverse2(str){
    return str.split('').reverse().join("")
}

// Timing

function addUpToFirst(n){
    let total = 0;
    for (let i = 1; i <= n; i++){
        total += i;
    }
    return total;
}

// All Even for the Worst Case

function allEven(nums){
    for (var i = 0; i < nums.length; i++){
        if (nums[i] %2 !== 0){
            console.log("LOOP COUNT:", loopCount)
            return false;
        }
    console.log("LOOP COUNT:", loopCount);    
    return true;    
    }
}