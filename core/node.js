var Class = require('../util/class');


function Node() {
  this.id = '';
  this.type = '';
  this.parent = null;
}


Class.extend(Node);

module.exports = Node;
