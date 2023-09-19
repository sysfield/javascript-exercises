const reverseString = function(string) {
    var newString = [];
    for (var i = string.length; i > -1; i--)
    {
        newString.push(string[i]);
    }
    return newString.join('');
};

// Do not edit below this line
module.exports = reverseString;
