const removeFromArray = function(array, ...rest) {
    for (const arg of rest)
    {
        if (array.includes(arg))
        {
            var x = array.indexOf(arg);
            array.splice(x, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
