import {cloneObject,freeze,immutable, immutableArray} from '../../src/utils/immutable'
import {assert} from 'chai'


describe('immutable TS', () => {

    it('cloneObject', () => {
        const o1 = {a:1};
        const o2 = cloneObject(o1);
        assert.equal(o1.a, o2.a)
        assert.deepEqual(o1, o2);
        assert.notEqual(o1, o2);
    })


    it('freeze', () => {
        const o1 = {a:1};
        const o2 = freeze(o1);
        const o3 = cloneObject(o1);
        assert.equal(Object.isFrozen(o1), true);
        assert.equal(Object.isFrozen(o2), true);
        assert.equal(Object.isFrozen(o3), false);
    })

    
    it('immutable', () => {
        const o1 = {a:1};
        const o2 = immutable(o1);

        assert.equal(o1.a, o2.a)
        assert.deepEqual(o1, o2);
        assert.notEqual(o1, o2);
        assert.equal(Object.isFrozen(o1), false);
        assert.equal(Object.isFrozen(o2), true);
    })
   
    it('immutableArray', () => {
        const o1 = {a:1};
        const o2 = {a:2};
        const a = [o1, o2];


        assert.equal(Object.isFrozen(o1), false);
        assert.equal(Object.isFrozen(o2), false);
        assert.equal(Object.isFrozen(a), false);
        let imArray = immutableArray(a)
        assert.equal(Object.isFrozen(imArray), true);
        assert.equal(Object.isFrozen(imArray[0]), true);
        assert.equal(Object.isFrozen(imArray[1]), true);

        assert.deepEqual(imArray[0], o1);
        assert.notDeepEqual(imArray[1], o1);
    })

})