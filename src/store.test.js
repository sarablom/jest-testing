const { store, retrieve, clear } = require('./storeAndRetrieve.js');

describe('functions store and retrieve', () => {
    describe('store', () => {
        it('does not through an error (smoke test)', () => {
            const testData = 'ekorre';
            store(testData);       
        })
        
        it('Throws an error for no parameter', () => {
            expect( () => store()).toThrow();
        })
        
    })
    describe('retrieve', () => {
        beforeEach(() => {
            clear();
        })
        
        it('throws an error if no value has been stored', () => {
            expect(() => retrieve()).toThrow();
        })

        it('returns the stored value', () => {
            const testData = [2, 3, 5];
            store(testData);

            const actualStored = retrieve();

            //Varje testfall testar för det mesta en sak
            expect(actualStored).toBe(testData);
        })
        
        //returns the lastest stored value

    })

    describe('clear', () => {
        it('Clear the stored value', () => {
            const testData = 'snart rast';
            store(testData);

            clear();

            //När retrieve anropas förväntar vi oss ett error
            expect(() => retrieve()).toThrow();
        })
    })
})