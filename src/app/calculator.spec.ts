import { Calculator } from './calculator';

describe('Test for Calculator', () => {
  it('#multiply should return a nine', () => {
    //Arrange
    const calculator = new Calculator();
    //Act
    const rta = calculator.multiply(3, 3);
    //Assert
    expect(rta).toEqual(9);
  });
});

describe('Test for Calculator', () => {
  it('#multiply should return a nine', () => {
    //Arrange
    const calculator = new Calculator();
    //Act
    const rta = calculator.multiply(1, 4);
    //Assert
    expect(rta).toEqual(4);
  });
});

describe('Test for Calculator', () => {
  it('#divide should return a some numbers', () => {
    //Arrange
    const calculator = new Calculator();
    //Act
    expect(calculator.divide(6, 3)).toEqual(2);
    expect(calculator.divide(5, 2)).toEqual(2.5);
  });
});

describe('Test matchers', () => {
  it('#divide should return a some numbers', () => {
    const name = 'david';
    let name2;

    expect(name).toBeDefined();
    expect(name2).toBeUndefined();
    expect(1 + 3 === 4).toBeTruthy();
    expect(1 + 1 === 3).toBeFalsy();
    expect(5).toBeLessThan(10);
    expect(20).toBeGreaterThan(10);
    expect('1234567').toMatch(/123/);
    expect(['apples', 'oranges', 'pears']).toContain('oranges');
  });
});
