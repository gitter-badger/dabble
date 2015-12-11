var Node = require('./node');


function Page() {
  this.title = '';
  this.text = '';
}


Node.extend(Page);

module.exports = Page;
