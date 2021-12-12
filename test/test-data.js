// global, for html page

version_value_set = require("../version-value-set.js");

module.exports = {

	"version_value_set": function (done) {

		//create new object by .class
		var valueSet = new version_value_set.class();

		//.update(name, value)
		valueSet.update("a", 10);
		valueSet.update("b", 20);
		valueSet.update("b", 30);

		//.getDiff( [oldVersion] ) {
		var fullObj = valueSet.getDiff();		//to get current data
		var fullObj_expect = {
			data: { a: 10, b: 30, },
			version: { a: 1, b: 3, },
		};

		var diffObj = valueSet.getDiff({ a: 1, b: 2 });
		var diffObj_expect = {
			data: { b: 30, },		//partial data
			version: { a: 1, b: 3, },	//full version info
		};

		var diffObj2 = valueSet.getDiff({ a: 1, b: 3 });
		var diffObj2_expect = {
			version: { a: 1, b: 3, },	//only version info
		};

		done(!(
			JSON.stringify(fullObj) === JSON.stringify(fullObj_expect) &&
			JSON.stringify(diffObj) === JSON.stringify(diffObj_expect) &&
			JSON.stringify(diffObj2) === JSON.stringify(diffObj2_expect)
		));

	},

};

// for html page
//if (typeof setHtmlPage === "function") setHtmlPage("title", "10em", 1);	//page setting
if (typeof showResult !== "function") showResult = function (text) { console.log(text); }

//for mocha
if (typeof describe === "function") describe('mocha-test', function () { for (var i in module.exports) { it(i, module.exports[i]); } });
