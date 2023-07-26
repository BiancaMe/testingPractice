const stringLength = require('./stringLength');
const reverseString = require('./reverseString');

//Task 1
describe.only('Task 1 : String Length', () => {
    test('Error,  string have to be at least 1 character long and not longer than 10 characters', () => 
    expect(stringLength('abcdefghijklmnopqrst')
).toBe(-1));

test('Error,  string have to be at least 1 character long and not longer than 10 characters', () => 
    expect(stringLength('')
).toBe(-1));

test('Works fine with length 5', () => 
    expect(stringLength('gfghj')
).toBe(5));


test('Works fine with length 10', () => 
    expect(stringLength('gfghjrtghj')
).toBe(10));

test('Works fine with length 1', () => 
    expect(stringLength('g')
).toBe(1));

test('Works fine with length 7', () => 
    expect(stringLength('hola je')
).toBe(7));

});


//Task 2
describe.only('Task 2: Reverse String', () => {
    test('Works fine whit one letter', () => 
    expect(reverseString('g')
).toBe('g'));

test('Works fine with nothing, "" ', () => 
    expect(reverseString('')
).toBe(''));

test('Works fine with a phrase', () => 
    expect(reverseString('kolaloka')
).toBe('akolalok'));
});


