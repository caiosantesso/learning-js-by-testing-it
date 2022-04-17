describe('converts to NaN', () => {
  //Calls valueOf, toString and neither returns a primitive.
  test('obj', () => {
    const obj = {};
    const valueOf = jest.spyOn(obj, 'valueOf');
    const toString = jest.spyOn(obj, 'toString');

    expect(Number(obj)).toBeNaN();

    expect(valueOf).toHaveBeenCalled();
    expect(toString).toHaveBeenCalled();
  });

  test('undefined', () => {
    expect(Number(undefined)).toBeNaN();
  });
});

describe('converts to 0', () => {
  test('null', () => {
    expect(Number(null)).toBe(0);
  });

  test('false', () => {
    expect(Number(false)).toBe(0);
  });

  test('empty string', () => {
    expect(Number('')).toBe(0);
  });

  test('no args', () => {
    expect(Number()).toBe(0);
  });

  //Calls valueOf which returns obj, then calls toString which returns an empty string.
  test('empty array', () => {
    const array = [];
    const toString = jest.spyOn(array, 'toString');
    const valueOf = jest.spyOn(array, 'valueOf');

    expect(Number(array)).toBe(0);
    expect(toString).toHaveBeenCalled();
    expect(valueOf).toHaveBeenCalled();
  });
});

describe('converts to 1', () => {
  test('true', () => {
    expect(Number(true)).toBe(1);
  });

});

describe('converts to number', () => {
  test('parsable string', () => {
    expect(Number('\t0xF')).toBe(15);
  });

  test('singleton array', () => {
    const array = [99];
    const toString = jest.spyOn(array, 'toString');

    expect(Number(array)).toBe(99);
    expect(toString).toHaveBeenCalled();
  });
});

describe('obj custom convertion', () => {
  //Calls valueOf, then primitive is returned and converted to number
  test('overriden valueOf', () => {
    const obj = {};
    obj.valueOf = jest.fn(() => 99);
    const toString = jest.spyOn(obj, 'toString');

    expect(Number(obj)).toBe(99);
    expect(toString).not.toHaveBeenCalled();
  });

  //Calls valueOf, object is returned then fallsback to toString which returns primitive and converts it to number
  test('stock valueOf and overriden toString', () => {
    const obj = {};
    const valueOf = jest.spyOn(obj, 'valueOf');
    obj.toString = () => 21;

    expect(Number(obj)).toBe(21);
    expect(valueOf).toHaveBeenCalled();
  });

  test('Date', () => {
    const date = new Date(2021, 8, 27);
    date.valueOf = jest.fn(date.valueOf);
    date.toString = jest.fn(date.toString);

    expect(Number(date)).toBe(1632711600000);
    expect(date.valueOf).toHaveBeenCalled();
    expect(date.toString).not.toHaveBeenCalled();
  });
});