const chaiAsPromised = require('chai-as-promised');
const chai = require('chai').use(chaiAsPromised);
const expect = chai.expect;

const shortcuts = require('../../editor/shortcuts');

describe('Shortcuts', function() {

  it('should have a given API', function() {
    expect(shortcuts).to.have.property('fromEvent');
  });


  describe('fromEvent', function() {

    it('should return letters', function() {
      expect(shortcuts.fromEvent({ which: 84 })).to.equal('T');
    });

    it('should return textual representations of keys', function() {
      expect(shortcuts.fromEvent({ which: 8 })).to.equal('Backspace');
      expect(shortcuts.fromEvent({ which: 13 })).to.equal('Enter');
      expect(shortcuts.fromEvent({ which: 18 })).to.equal('Alt');
      expect(shortcuts.fromEvent({ which: 32 })).to.equal('Space');
      expect(shortcuts.fromEvent({ which: 39 })).to.equal('Right');
      expect(shortcuts.fromEvent({ which: 106 })).to.equal('*');
      expect(shortcuts.fromEvent({ which: 120 })).to.equal('F9');
    });

    it('should return textual representations of combinations', function() {
      expect(shortcuts.fromEvent({ metaKey: true, which: 84 })).to.equal('Cmd+T');
      expect(shortcuts.fromEvent({ shiftKey: true, which: 84 })).to.equal('Shift+T');
      expect(shortcuts.fromEvent({ ctrlKey: true, which: 84 })).to.equal('Ctrl+T');
      expect(shortcuts.fromEvent({ altKey: true, which: 84 })).to.equal('Alt+T');
    });

    it('should return textual representations of multiple combinations', function() {
      expect(shortcuts.fromEvent({ metaKey: true, shiftKey: true, which: 120 })).to.equal('Cmd+Shift+F9');
    });

    it('should return textual representations of multiple combinations in order', function() {
      var event = {
        metaKey: true,
        altKey: true,
        ctrlKey: true,
        shiftKey: true,
        which: 84
      };
      expect(shortcuts.fromEvent(event)).to.equal('Cmd+Ctrl+Alt+Shift+T');
    });

  });

});