const reverseString = function(string) {
    var newString = [];
    for (var i = string.length; i > 0; i--)
    {
        newString.unshift(string[i]);
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
