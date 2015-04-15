*easypattern* is a simple regex-abstracting utilities library. Its purpose is to make
common regex-related operations more human readable.

Usage:
--------------
Add easypattern to your package.json, and npm-install it.
var pattern = require('easypattern');

**contains(input, pattern)**<br />
*Arguments*<br />
1.  input: the string we are evaluating for the pattern
2.  pattern: the pattern we are looking for in 'input'

pattern.contains("abc", "a") --> true


**containsAllOf(input, patternsArray)**<br />
Same idea as 'contains', except with an array.<br />
pattern.containsAllOf("abc", ["a", "c"]) --> true


**containsOneOf(input, patternsArray)**<br />
pattern.containsOneOf("abc", ["a", "d"]) --> true<br />
pattern.containsOneOf("abc", ["1", "d"]) --> false


**endsWith(input, pattern)**<br />
pattern.endsWith("abc", "c") --> true


**endsWithOneOf(input, patternsArray)**<br />
pattern.endsWithOneOf("abc", ["c", "d"]) --> true


**startsWith(input, pattern)**<br />
pattern.startsWith("abc", "a") --> true


**startsWithOneOf(input, patternsArray)**<br />
pattern.startsWithOneOf("abc", ["a", "c"]) --> true


Running tests:
--------------
Navigate to the root directory for the library.

npm install<br />
make test

