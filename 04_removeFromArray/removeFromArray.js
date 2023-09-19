const removeFromArray = function(...rest) {
    for (const arg of rest)
    {
        if (rest.find(arg))
        {
            var x = rest.indexOf(arg);
            rest.splice(x, 1);
        }
    }
};

// Do not edit below this line
module.exports = removeFromArray;
