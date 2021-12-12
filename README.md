# version-value-set
value set with version number

# Install
```
npm install version-value-set
```

# Usage & Api
```javascript

var version_value_set = require("version-value-set");

//create new object by .class
var valueSet = new version_value_set.class();

//.update(name, value)
valueSet.update("a", 10);
valueSet.update("b", 20);
valueSet.update("b", 30);

//.getDiff( [oldVersion] ) {
var fullObj = valueSet.getDiff();		//to get current data
/*
var fullObj_expect = {
	data: { a: 10, b: 30, },
	version: { a: 1, b: 3, },
};
*/

var diffObj = valueSet.getDiff({ a: 1, b: 2 });
/*
var diffObj_expect = {
	data: { b: 30, },		//partial data
	version: { a: 1, b: 3, },	//full version info
};
*/

var diffObj2 = valueSet.getDiff({ a: 1, b: 3 });
/*
var diffObj2_expect = {
	version: { a: 1, b: 3, },	//only version info
};
*/

```
