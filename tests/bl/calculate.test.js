const calculate = require('../../src/bl/calculate');

describe('cal', () => {
    it('Should add two numbers', () => {
        expect(calculate(1, 2, '+')).toBe(3);
    })
});

describe('cal', () => {
    it('Should sub two numbers', () => {
        expect(calculate(1, 2, '-')).toBe(-1);
    })
});

describe('cal', () => {
    it('Should mul two numbers', () => {
        expect(calculate(1, 2, '*')).toBe(2);
    })
});

describe('cal', () => {
    it('Should div two numbers', () => {
        expect(calculate(1, 2, '/')).toBe(0.5);
    })
});

describe('cal', () => {
    it('Should throw an error', () => {
        expect(() => {
            calculate('a', 2, '+');
        }).toThrow();
    })
});

describe('cal', () => {
    it('Should throw an error', () => {
        expect(() => {
            calculate(1, 'a', '+');
        }).toThrow();
    })
});

describe('cal', () => {
    it('Should throw an error', () => {
        expect(() => {
            calculate(1, 2, 'a');
        }).toThrow();
    })
});