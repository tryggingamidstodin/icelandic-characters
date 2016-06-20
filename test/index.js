'use strict';
var expect = require('chai').expect;
var helper = require('../index');

describe('character encoding characters', function() {
    console.log('helper:', helper);
    it('should replace ð with d: ', function() {
        var res = helper.replaceIcelandicCharacters('ðÐ');
        expect(res).to.eq('dD');
    });

    it('should replace þ with th: ', function() {
        var res = helper.replaceIcelandicCharacters('þÞ');
        expect(res).to.eq('thTH');
    });

    it('should replace æ with ae: ', function() {
        var res = helper.replaceIcelandicCharacters('æÆ');
        expect(res).to.eq('aeAE');
    });

    it('should replace ö with o: ', function() {
        var res = helper.replaceIcelandicCharacters('öÖ');
        expect(res).to.eq('oO');
    });

    it('should replace kommustafir with equivalent none kommustafur ', function() {
        var res = helper.replaceIcelandicCharacters('áéíóúýÁÉÍÓÚÝ');
        expect(res).to.eq('aeiouyAEIOUY');
    });

    it('should replace characters in all words ', function() {
        var res = helper.replaceIcelandicCharacters('ááí úóúá íæð');
        expect(res).to.eq('aai uoua iaed');
    });
});
