Object-extends
---

### Install
```sh
npm i object-extends --save
```

### Usage
```js
require('object-extends')
// Or
import 'object-extends'
```

### Extends For Array
```js
Array.prototype.asyncMap
Array.prototype.asyncEach
Array.prototype.asyncFind
Array.prototype.asyncSome
Array.prototype.asyncEvery

// 数组排重
Array.prototype.unique

// 删除
Array.prototype.remove

// 相似值
Array.prototype.near
Array.prototype.nearIndex
```

### Example
```js
async function test() {
	let keys = await arr.asyncMap(async item => await item.key())
	console.log(keys)
}

test()
```