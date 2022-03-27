const add  = function(exp){
    let sum = 0;
    vadlidateInput(exp);
    
    let nums = getFlattenArrayOfStrings(exp);
    // let nums = exp.split(/,|\n/);
    sum = getSumOfStringArray(nums);
    return sum;
};

//function returns the array of strings only
function getFlattenArrayOfStrings(exp){
    let delimiters = [",", "\n"];

    //check if exp has custom delimeters
    if(exp.startsWith("//")){
        delimiters.push(exp.charAt(2));
        exp = exp.substring(exp.indexOf("\n") + 1);     //remove the first line from string expresion
    }

    return splitExpressionByDelimiters([exp], delimiters);
}

function splitExpressionByDelimiters(exp, delimiters){
    if(delimiters.length === 0) return exp;

    let newExpression = [];
    let delimiter = delimiters.pop();
    for(let i = 0; i < exp.length; i++){
        newExpression.push(...exp[i].split(delimiter));
    }

    return splitExpressionByDelimiters(newExpression, delimiters);
}


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