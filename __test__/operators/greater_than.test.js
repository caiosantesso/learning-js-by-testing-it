describe('number comparison when', () => {
  test('number > BigInt', () => {
    expect(21 > 20n).toBe(true);
  });

  test('number > boolean', () => {
    expect(1 > false).toBe(true);
  });
  
  test('number > null', () => {
    expect(1 > null).toBe(true);
  });

  test('number > string', () => {
    expect(10 > '2').toBe(true);
  });

  test('number > empty string', () => {
    expect(1 > '').toBe(true);
  });
  
  test('number > NaN', () => {
    // eslint-disable-next-line use-isnan
    expect(Number.MAX_VALUE > NaN).toBe(false);
  });

  test('number > undefined', () => {
    expect(1 > undefined).toBe(false);
  });

  test('number > obj', () => {
    expect(1 > {}).toBe(false);
  });

  test('number > obj (number)', () => {
    const obj = {};
    obj.valueOf = () => '2';
    
    expect(10 > obj).toBe(true);
  });

  test('obj (number) > obj (string)', () => {
    const objToNumber = {};
    objToNumber.valueOf = () => 10;
    
    const objToString = {};
    objToString.valueOf = () => '2';
    
    expect(objToNumber > objToString).toBe(true);
  });
});

describe('unicode comparison when', () => {
  test('string (upper) > string (lower)', () => {
    expect('a' > 'B').toBe(true);
  });

  test('string > string', () => {
    expect('2' > '10').toBe(true);
  });
});
