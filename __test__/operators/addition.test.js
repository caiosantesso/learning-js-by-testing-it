describe('string concat prefered when', () => {
  test('null + string', () => {
    expect(null + '3').toBe('null3');
  });

  test('undefined + string', () => {
    expect(undefined + '3').toBe('undefined3');
  });

  test('BigInt + string', () => {
    expect(2n + '3').toBe('23');
  });

  test('number + string', () => {
    expect(2 + '3').toBe('23');
  });

  test('number + empty string', () => {
    expect(2 + '').toBe('2');
  });

  test('number + obj', () => {
    expect(2 + {}).toBe('2[object Object]');
  });

  test('number + obj (string)', () => {
    const obj = {};
    obj.valueOf = () => '3';

    expect(2 + obj).toBe('23');
  });

  //Date obj, differently to other objs, have its toString called before valueOf when casted to primitive
  test('number + Date', () => {
    const date = new Date(2021, 8, 27);
    date.valueOf = jest.fn(() => date.valueOf);
    date.toString = date.toUTCString;

    expect(2 + date).toBe('2Mon, 27 Sep 2021 03:00:00 GMT');
    expect(date.valueOf).not.toHaveBeenCalled();
  });

  test('number + singleton number array', () => {
    expect(2 + [3]).toBe('23');
  });
});

describe('number addition when', () => {
  test('number + boolean', () => {
    expect(2 + true).toBe(3);
  });

  test('number + null', () => {
    expect(2 + null).toBe(2);
  });

  test('number + undefined', () => {
    expect(2 + undefined).toBeNaN();
  });

  test('number + obj (number)', () => {
    const obj = {};
    obj.valueOf = () => 3;

    expect(2 + obj).toBe(5);
  });
});

describe('error thrown when', () => {
  test('number + BigInt', () => {
    expect(() => 2 + 2n).toThrow(TypeError('Cannot mix BigInt and other types, use explicit conversions'));
  });
});