'use strict';

var replacements = {
    'ð': 'd',
    'Ð': 'D',
    'þ': 'th',
    'Þ': 'Th',
    'æ': 'ae',
    'Æ': 'Ae',
    'ö': 'o',
    'Ö': 'O',
    'á': 'a',
    'Á': 'A',
    'é': 'e',
    'É': 'E',
    'í': 'i',
    'Í': 'I',
    'ó': 'o',
    'Ó': 'O',
    'ú': 'u',
    'Ú': 'U',
    'ý': 'y',
    'Ý': 'Y'
};

var replaceIcelandicCharacters = function(input) {

    for (var key in replacements) {
        input = input.replace(new RegExp('[' + key + ']', 'g'), replacements[key]);
    }
    return input;
};

module.exports = {
    replaceIcelandicCharacters: replaceIcelandicCharacters
};
