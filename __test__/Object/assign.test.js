const emptyObj = {};

test('no source', () => {
  const actual = Object.assign(emptyObj);

  expect(actual).toBe(emptyObj);
});

test('primitive source', () => {
  const actual = Object.assign(emptyObj, 2);

  expect(actual).toBe(emptyObj);
});

test('(enumarable) array source', () => {
  const array = ['Maven'];
  const actual = Object.assign({}, array);

  const expected = { 0: array[0] };

  expect(actual).toEqual(expected);
});

test('(enumarable) string source', () => {
  const string = 'JDK';
  const actual = Object.assign({}, string);

  const expected = {
    0: 'J',
    1: 'D',
    2: 'K'
  };

  expect(actual).toEqual(expected);
});

test('obj source', () => {
  const source = { a: 85 };
  const actual = Object.assign({}, source);

  expect(actual).toEqual(source);
});

test('obj source prop overrides source prop', () => {
  const source = { a: 'new' };
  const actual = Object.assign({ a: 'old' }, source);

  expect(actual).toEqual(source);
});

test('copies source ref', () => {
  const shinobi = { name: 'Tsunade' };
  const source = { hokage: shinobi };

  const actual = Object.assign({}, source);

  shinobi.name = 'Kakashi';

  expect(actual.hokage.name).toBe('Kakashi');
});

test('source getter is called, returned value is copied over', () => {
  const source = { get a() { return 'a'; } };
  const actual = Object.assign({}, source);

  expect(actual.a).toBe('a');
});

test('target setter is called', () => {
  const source = { a: 13 };
  const target = { set a(someNumber) { this.b = someNumber; } };
  const actual = Object.assign(target, source);

  expect(actual.b).toBe(13);
});