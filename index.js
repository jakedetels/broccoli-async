const Plugin = require('broccoli-plugin');

module.exports = BroccoliAsyncNode;

function BroccoliAsyncNode(buildAsyncFn) {
  Plugin.call(this, []);
  this.buildAsyncFn = buildAsyncFn;
}
BroccoliAsyncNode.prototype = Object.create(Plugin.prototype);
BroccoliAsyncNode.prototype.constructor = BroccoliAsyncNode;
BroccoliAsyncNode.prototype.build = function() {
  return this.buildAsyncFn(this.outputPath);
};