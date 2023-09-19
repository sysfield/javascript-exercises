const repeatString = function(word, times) {
    var output = [];
    for (var i = 0; i < times; i++)
    {
        output.push(word);
    }
    return output.join('');
};

// Do not edit below this line
module.exports = repeatString;
