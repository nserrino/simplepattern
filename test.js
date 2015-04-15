var mocha = require('mocha'),
    assert = require('assert'),
    patterns = require('./utils');

describe('contains', function() {
  it('contains should work for simple cases', function() {
    var contains = patterns.contains('abc', 'a'),
        doesNotContain = patterns.contains('abc', 'd');
    assert.equal(contains, true);
    assert.equal(doesNotContain, false);
  });

  it('containsOneOf should work for simple cases', function() {
    var contains = patterns.containsOneOf('abc', ['a', 'z']),
        doesNotContain = patterns.containsOneOf('abc', ['d', 'e']);
    assert.equal(contains, true);
    assert.equal(doesNotContain, false);
  });

  it('containsAllOf should work for simple cases', function() {
    var contains = patterns.containsAllOf('abc', ['a', 'b']),
        doesNotContain = patterns.containsAllOf('abc', ['a', 'd']);
    assert.equal(contains, true);
    assert.equal(doesNotContain, false);
  });
});

describe('startsWith', function() {
  it('startsWith should work for simple cases', function() {
    var startsWith = patterns.startsWith('abc', 'a'),
        doesNotStartsWith = patterns.startsWith('abc', 'c');
    assert.equal(startsWith, true);
    assert.equal(doesNotStartsWith, false);
  });

  it('startsWithOneOf should work for simple cases', function() {
    var startsWith = patterns.startsWithOneOf('abc', ['a', 'z']),
        doesNotStartsWith = patterns.startsWithOneOf('abc', ['c', 'e']);
    assert.equal(startsWith, true);
    assert.equal(doesNotStartsWith, false);
  });
});

describe('endsWith', function() {
  it('endsWith should work for simple cases', function() {
    var endsWith = patterns.endsWith('abc', 'c'),
        doesNotEndsWith = patterns.endsWith('abc', 'a');
    assert.equal(endsWith, true);
    assert.equal(doesNotEndsWith, false);
  });

  it('endsWithOneOf should work for simple cases', function() {
    var endsWith = patterns.endsWithOneOf('abc', ['c', 'z']),
        doesNotEndsWith = patterns.endsWithOneOf('abc', ['a', 'e']);
    assert.equal(endsWith, true);
    assert.equal(doesNotEndsWith, false);
  });
});