
// version-value-set @ npm, value set with version number

var seed = 0;		//version seed

var VersionValueSetClass = function (updateCallback) {
	this.data = {};
	this.version = {};
	this.updateCallback = updateCallback;
}

VersionValueSetClass.prototype = {
	data: null,		//map name to value
	version: null,		//map name to version number

	updateCallback: null,

	update: function (name, value) {
		this.data[name] = value;
		this.version[name] = ++seed;

		if (this.updateCallback) this.updateCallback(name, value, this.version[name]);
	},

	getDiff: function (oldVersion) {
		if (!oldVersion) return { data: this.data, version: this.version };
		//console.log("getDiff", oldVersion, this.version);

		var i, diffData = {}, cnt = 0;
		for (i in this.version) {
			if (oldVersion[i] !== this.version[i]) {
				diffData[i] = this.data[i];
				cnt++;
			}
		}
		//console.log(diffData);

		if (cnt > 0) return { data: diffData, version: this.version };
		else return { version: this.version };		//only `version` without `data`
	},

}

// module

module.exports = {
	"class": VersionValueSetClass,
};
