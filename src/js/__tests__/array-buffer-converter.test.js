import ArrayBufferConverter from '../array-buffer-converter';
import getBuffer from '../basic';

test('load loads buffer', () => {
  const converter = new ArrayBufferConverter();

  converter.load(getBuffer());

  expect(converter.buffer).not.toBeNull();
});
test('load throws if illegal argument', () => {
  const converter = new ArrayBufferConverter();

  expect(() => converter.load(null)).toThrow('Illegal argument');
  expect(() => converter.load('asdf')).toThrow('Illegal argument');
});

test('toString converts buffer', () => {
  const converter = new ArrayBufferConverter();
  converter.load(getBuffer());

  const res = converter.toString();

  expect(res).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
test('toString converts nothing to empty string', () => {
  const converter = new ArrayBufferConverter();
  converter.load(new ArrayBuffer(0));

  const res = converter.toString();

  expect(res).toBe('');
});
