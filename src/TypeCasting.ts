export enum eFromMethod {
    hexStringToBuffer = 'hexStringToBuffer',
    bufferToHexString = 'bufferToHexString'
}

export class TypeCasting {

    constructor() {}

    public static from(method?: eFromMethod, source?: number[] | Uint8Array | string) {
        if (method && source) {
            switch (method) {
                case eFromMethod.hexStringToBuffer: {
                    return new TypeCasting()[method](<string>source);
                } break;
                case eFromMethod.bufferToHexString: {
                    return new TypeCasting()[method](<Uint8Array>source);
                } break;
                default: return this;
            }
        }
        else if (method || source) {
            throw new TypeError('Parameter Missing or Invalid');
        }
        else {
            return this;
        }
    }

    public hexStringToBuffer(hexString: string): Uint8Array {
        return new Uint8Array(hexString.match(/.{1,2}/g)!.map(byte => parseInt(byte, 16)));
    }

    public bufferToHexString(bytes: Uint8Array): string {
        return bytes.reduce((str, byte) => str + byte.toString(16).padStart(2, '0'), '');
    }
}