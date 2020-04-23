// Import npm
import { expect, should, assert } from 'chai';

// Code

// // Demo Mocha
// var assert = require('assert');
// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal([1, 2, 3].indexOf(35), -1);
//     });
//   });
// });

const value = 2;

function addition(a, b) {
    return a + b;
}


// Tests

// describe me permet de définir une série / un chapitre de tests
describe('Test de démo', () => {
    describe('série de tests : addition()', () => {
        // 1er test
        it('expected to be a function', () => {
            // l'assertion à vérifier
            expect(addition).to.be.a('function');
        });

        //2eme test
        it('expected to return sum of parameters', () => {
            expect(addition(1,2)).to.be.equal(3);
        });
    });
});