'use strict';

const obj = { fun: () => this };


test('this as global obj', () => {
  expect(obj.fun()).toBe(this);
});
