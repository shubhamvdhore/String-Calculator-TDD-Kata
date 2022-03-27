const add  = function(exp){
    let sum = 0;
    validateInput(exp);
 
    let nums = getFlattenArrayOfStrings(exp);
    validateInputForNegativeNumers(nums);
    sum = getSumOfStringArray(nums);
    return sum;
};

function validateInputForNegativeNumers(nums){
    let negatives = [];
    for(let i = 0; i < nums.length; i++){
        if(parseInt(nums[i]) < 0)
            negatives.push(nums[i])
    }
    if(negatives.length)
        throw new Error("negatives not allowed : " + negatives.join(", "));
    
    return true;
}

//function returns the array of strings only
function getFlattenArrayOfStrings(exp){
    let delimiters = [",", "\n"];

    //check if exp has custom delimeters
    if(hasCustomDelimiters(exp)){
        delimiters.push(exp.charAt(2));
        removeFirstLineFromInput(exp);     //remove the first line from string expresion
    }

    return splitExpressionByDelimiters([exp], delimiters);
}

function hasCustomDelimiters(exp){
    return exp.startsWith("//");
}

function removeFirstLineFromInput(exp){
    exp = exp.substring(exp.indexOf("\n") + 1);
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


function validateInput(exp){
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