
const add  = function(exp){
    let sum = 0;
    let nums = exp.split(",");
    sum = getSumOfStringArray(nums);
    return sum;
};

function getSumOfStringArray(nums){
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        sum += parseInt(nums[i]) || 0;
    }

    return sum;
}

module.exports = add;