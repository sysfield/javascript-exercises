const repeatString = function(word, times) {
    var output = [];
    if (times < 0)
    {
        return 'ERROR';
    }
    for (var i = 0; i < times; i++)
    {
        output.push(word);
    }
    return output.join('');
};

// Do not edit below this line
module.exports = repeatString;
