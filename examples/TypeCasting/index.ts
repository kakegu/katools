import { TypeCasting, eFromMethod } from '../../src/TypeCasting';

let typeCasting = new TypeCasting();

// hexStringToBuffer
let buf = typeCasting.hexStringToBuffer('001213');
console.log(buf);

let buf1 = TypeCasting.from(eFromMethod.hexStringToBuffer, '001213');
console.log(buf1);

// bufferToHexString
let str = typeCasting.bufferToHexString(buf);
console.log(str);

let str1 = TypeCasting.from(eFromMethod.bufferToHexString, <Uint8Array>buf1);
console.log(str1);