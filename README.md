# katools

A Utility Library of TypeScript & JavaScript

## install

### TypeScript

```
import { TypeCasting, eFromMethod } from 'katools';
let buf = TypeCasting.from(eFromMethod.hexStringToBuffer, '001213');
```

### node.js

```
const katools = require('katools');

let buf = katools.TypeCasting.from(katools.eFromMethod.hexStringToBuffer, '001213');

// OR

const { TypeCasting, eFromMethod } = require('katools);

let typeCasting = new TypeCasting();
let buf = typeCasting.hexStringToBuffer('001122');
```