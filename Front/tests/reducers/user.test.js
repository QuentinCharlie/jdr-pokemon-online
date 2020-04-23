// Import npm
import { expect, should, assert } from 'chai';
import userReducer from 'src/reducers/user';

// Code 

const initialState = {
    hasTrainer: false,
    hasPokemon: false,
    isUserReady: false,
    isMj: true,
};

// Tests

describe('Test sur le reducer : user', () => {
    describe('structure', () => {
        it('expected to be a function', () => {
            expect(userReducer).to.be.a('function');
        });
        it('expected to return an object', () => {
            expect(userReducer()).to.be.an('object');
        });
        it('expected to return the correct initialState', () => {
            expect(userReducer()).to.eql(initialState);
        });
    });
});