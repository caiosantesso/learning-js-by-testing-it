test('no arg', () => {
  const dp = 'junit';
  const fun = (p = dp) => p;

  expect(fun()).toBe(dp);
});

test('null as arg', () => {
  const fun = (p = 'junit') => p;

  expect(fun(null)).toBeNull();
});

test('primitive as arg', () => {
  const fun = (p = 'junit') => p;
  const arg = 'mockito';

  expect(fun(arg)).toBe(arg);
});

test('1st as default for 2nd param ', () => {
  const fun = (p1, p2 = p1) => p2;
  const arg = 7;

  expect(fun(arg)).toBe(arg);
});

test('default param is created each invocation', () => {
  const fun = (p = {}) => p;
  const obj1 = fun();
  const obj2 = fun();

  expect(obj1).not.toBe(obj2);
});

test('parameter list has a different scope than body\'s', () => {
  const fun = (p1, p2 = () => p1) => {
    /* eslint-disable no-redeclare */
    var p1 = 3;
    return p2();
  };
  const arg = 'spring';

  expect(fun(arg)).toBe(arg);
});

test('default param destructuring', () => {
  const dp = 5;
  const fun = ({ p } = { p: dp }) => p;

  expect(fun()).toBe(dp);
});