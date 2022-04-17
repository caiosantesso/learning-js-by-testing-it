test('throw error as obj is undefined', () => {
  let obj;

  expect(() => obj.prop).toThrow(TypeError('Cannot read properties of undefined (reading \'prop\')'));
});

describe('optional prop access', () => {
  test('undefined prop', () => {
    let obj;

    expect(obj?.prop).toBeUndefined();
  });

  test('null prop', () => {
    const obj = null;

    expect(obj?.prop).toBeUndefined();
  });

  test('prop with value', () => {
    const obj = { prop: 99 };

    expect(obj?.prop).toBe(99);
    expect(obj?.['prop']).toBe(99);
  });

  test('shortcircuting', () => {
    const obj = null;
    let index = 0;

    expect(obj?.[index++]).toBeUndefined();
    expect(index).toBe(0);
  });
});

describe('optional call', () => {
  test('calls the function', () => {
    const fun = () => true;

    expect(fun?.()).toBe(true);
  });

  test('throws Type Error cause it is not a function', () => {
    const fun = '';

    expect(() => fun?.()).toThrow(TypeError('fun is not a function'));
  });

  test('returns undefined as function does not exist', () => {
    const fun = null;

    expect(fun?.()).toBeUndefined();
  });
});