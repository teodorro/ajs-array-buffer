export default class ArrayBufferConverter {
  load(buffer) {
    if (buffer == null || !(buffer instanceof ArrayBuffer)) {
      throw new Error('Illegal argument');
    }
    this.buffer = buffer;
  }

  toString() {
    let res = '';
    const bufferView = new Uint16Array(this.buffer);
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < bufferView.length; i++) {
      res += String.fromCharCode(bufferView[i]);
    }
    return res;
  }
}
