
const add  = function(exp){
    let sum = 0;
    vadlidateInput(exp);
    let nums = exp.split(/,|\n/);
    sum = getSumOfStringArray(nums);
    return sum;
};

function vadlidateInput(exp){
    //check if input ends with new line
    if(exp.endsWith("\n"))
        throw new Error("INVALID INPUT");
    
    return true;
}

function getSumOfStringArray(nums){
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        sum += parseInt(nums[i]) || 0;
    }

    return sum;
}

module.exports = add;