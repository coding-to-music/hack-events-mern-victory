export = uuid;
declare function uuid(options: any, buf: any, offset: any): any;
declare namespace uuid {
  class BufferClass {
    static BYTES_PER_ELEMENT: number;
    static alloc(size: any, fill: any, encoding: any): any;
    static allocUnsafe(size: any): any;
    static allocUnsafeSlow(size: any): any;
    static byteLength(string: any, encoding: any, ...args: any[]): any;
    static compare(buf1: any, buf2: any): any;
    static concat(list: any, length: any): any;
    static from(value: any, encodingOrOffset: any, length: any): any;
    static isBuffer(b: any): any;
    static isEncoding(encoding: any): any;
    static of(items: any): any;
    static poolSize: number;
    constructor(arg: any, encodingOrOffset: any, length: any);
    asciiSlice(): any;
    asciiWrite(): any;
    base64Slice(): any;
    base64Write(): any;
    compare(target: any, start: any, end: any, thisStart: any, thisEnd: any, ...args: any[]): any;
    copy(target: any, targetStart: any, sourceStart: any, sourceEnd: any): any;
    copyWithin(p0: any, p1: any): any;
    entries(): any;
    equals(otherBuffer: any): any;
    every(p0: any): any;
    fill(val: any, start: any, end: any, encoding: any): any;
    filter(p0: any): any;
    find(p0: any): any;
    findIndex(p0: any): any;
    forEach(p0: any): any;
    hexSlice(): any;
    hexWrite(): any;
    includes(val: any, byteOffset: any, encoding: any): any;
    indexOf(val: any, byteOffset: any, encoding: any): any;
    inspect(): any;
    join(p0: any): any;
    keys(): any;
    lastIndexOf(val: any, byteOffset: any, encoding: any): any;
    latin1Slice(): any;
    latin1Write(): any;
    map(p0: any): any;
    readDoubleBE(offset: any): any;
    readDoubleLE(offset: any): any;
    readFloatBE(offset: any): any;
    readFloatLE(offset: any): any;
    readInt16BE(offset: any): any;
    readInt16LE(offset: any): any;
    readInt32BE(offset: any): any;
    readInt32LE(offset: any): any;
    readInt8(offset: any): any;
    readIntBE(offset: any, byteLength: any): any;
    readIntLE(offset: any, byteLength: any): any;
    readUInt16BE(offset: any): any;
    readUInt16LE(offset: any): any;
    readUInt32BE(offset: any): any;
    readUInt32LE(offset: any): any;
    readUInt8(offset: any): any;
    readUIntBE(offset: any, byteLength: any): any;
    readUIntLE(offset: any, byteLength: any): any;
    reduce(p0: any): any;
    reduceRight(p0: any): any;
    reverse(): any;
    set(p0: any): any;
    slice(start: any, end: any): any;
    some(p0: any): any;
    sort(p0: any): any;
    subarray(p0: any, p1: any): any;
    swap16(): any;
    swap32(): any;
    swap64(): any;
    toJSON(): any;
    toLocaleString(encoding: any, start: any, end: any, ...args: any[]): any;
    toString(encoding: any, start: any, end: any, ...args: any[]): any;
    ucs2Slice(): any;
    ucs2Write(): any;
    utf8Slice(): any;
    utf8Write(): any;
    values(): any;
    write(string: any, offset: any, length: any, encoding: any): any;
    writeDoubleBE(val: any, offset: any): any;
    writeDoubleLE(val: any, offset: any): any;
    writeFloatBE(val: any, offset: any): any;
    writeFloatLE(val: any, offset: any): any;
    writeInt16BE(value: any, offset: any): any;
    writeInt16LE(value: any, offset: any): any;
    writeInt32BE(value: any, offset: any): any;
    writeInt32LE(value: any, offset: any): any;
    writeInt8(value: any, offset: any): any;
    writeIntBE(value: any, offset: any, byteLength: any): any;
    writeIntLE(value: any, offset: any, byteLength: any): any;
    writeUInt16BE(value: any, offset: any): any;
    writeUInt16LE(value: any, offset: any): any;
    writeUInt32BE(value: any, offset: any): any;
    writeUInt32LE(value: any, offset: any): any;
    writeUInt8(value: any, offset: any): any;
    writeUIntBE(value: any, offset: any, byteLength: any): any;
    writeUIntLE(value: any, offset: any, byteLength: any): any;
  }
  function parse(s: any, buf: any, offset: any): any;
  function unparse(buf: any, offset: any): any;
  function v1(options: any, buf: any, offset: any): any;
  // Circular reference from uuid
  const v4: any;
}
