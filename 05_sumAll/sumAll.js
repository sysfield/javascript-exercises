const sumAll = function(first, final) {
    var sum = 0;
    if (final < first)
    {
        let x = final;
        final = first;
        first = x;
    }
    for (var i = first; i < final + 1; i++)
    {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
