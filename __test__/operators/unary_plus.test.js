test('stringified number', () => {
  expect(+'3').toBe(3);
});

test('empty string', () => {
  expect(+'').toBe(0);
});

test('string', () => {
  expect(+'A').toBeNaN();
});

test('boolean', () => {
  expect(+true).toBe(1);
});

test('null', () => {
  expect(+null).toBe(0);
});

test('undefined', () => {
  expect(+undefined).toBeNaN();
});

test('obj', () => {
  expect(+{}).toBeNaN();
});

test('obj.valueOf returning number', () => {
  const obj = {};
  obj.valueOf = () => 99;
  expect(+obj).toBe(99);
});

test('obj.valueOf returning string', () => {
  const obj = {};
  obj.valueOf = () => '20';
  expect(+obj).toBe(20);
});

test('error thrown when number + BigInt', () => {
  expect(() => +2n).toThrow(TypeError);
});