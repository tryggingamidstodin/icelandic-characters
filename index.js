'use strict';

var replacements = {
    'ð': 'd',
    'þ': 'th',
    'æ': 'ae',
    'ö': 'o',
    'á': 'a',
    'é': 'e',
    'í': 'i',
    'ó': 'o',
    'ú': 'u',
    'ý': 'y'
};

var replaceIcelandicCharacters = function(input) {

    for (var key in replacements) {
        input = input.replace(new RegExp('[' + key + ']', 'g'), replacements[key]).replace(new RegExp('[' + key.toUpperCase() + ']', 'g'), replacements[key].toUpperCase());
    }
    return input;
};

module.exports = {
    replaceIcelandicCharacters: replaceIcelandicCharacters
};
