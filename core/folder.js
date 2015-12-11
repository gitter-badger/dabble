var Node = require('./node');


function Folder() {
  this.title = '';
  this.children = [];
}


Node.extend(Folder);

module.exports = Folder;
