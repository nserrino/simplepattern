var _ = require('lodash');

function contains(input, pattern) {
  var regex = new RegExp(pattern);
  return regex.test(input);
}

function containsAllOf(input, patterns) {
  var regexes = _.map(patterns, function(pattern) {
    return new RegExp(pattern);
  });
  for (var i = 0; i < regexes.length; i++) {
    if (!regexes[i].test(input)) {
      return false;
    }
  }
  return true;
}

function containsOneOf(input, patterns) {
  var regexes = _.map(patterns, function(pattern) {
    return new RegExp(pattern);
  });
  for (var i = 0; i < regexes.length; i++) {
    if (regexes[i].test(input)) {
      return true;
    }
  }
  return false;
}

function startsWith(input, pattern) {
  return contains(input, '^' + pattern);
}

function startsWithOneOf(input, patterns) {
  return containsOneOf(input, _.map(patterns, function(pattern) {
    return '^' + pattern;
  }));
}

function endsWith(input, pattern) {
  return contains(input, pattern + '$');
}

function endsWithOneOf(input, patterns) {
  return containsOneOf(input, _.map(patterns, function(pattern) {
    return pattern + '$';
  }));
}

module.exports = {
  contains: contains,
  containsAllOf: containsAllOf,
  containsOneOf: containsOneOf,
  endsWith: endsWith,
  endsWithOneOf: endsWithOneOf,
  startsWith: startsWith,
  startsWithOneOf: startsWithOneOf
};