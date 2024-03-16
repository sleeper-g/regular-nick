import Validator from './../login'

test('one number false', () => {
  const login = new Validator('1')
  expect(login.validateUsername()).toBe(false)
});
test('not start from number false', () => {
  const login = new Validator('1somename')
  expect(login.validateUsername()).toBe(false)
});
test('not end number false', () => {
  const login = new Validator('somename8')
  expect(login.validateUsername()).toBe(false)
});
test('not start from _ false', () => {
  const login = new Validator('_somename')
  expect(login.validateUsername()).toBe(false)
});
test('not end _ false', () => {
  const login = new Validator('somename_')
  expect(login.validateUsername()).toBe(false)
});
test('not start from - false', () => {
  const login = new Validator('-somename')
  expect(login.validateUsername()).toBe(false)
});
test('not end - false', () => {
  const login = new Validator('somename-')
  expect(login.validateUsername()).toBe(false)
});
test('less 4 number in middle false', () => {
  const login = new Validator('some4123one')
  expect(login.validateUsername()).toBe(false)
});
test('correct true', () => {
  const login = new Validator('first111user11on1server')
  expect(login.validateUsername()).toBe(false)
});
