*easypattern* is a simple regex-abstracting utilities library. Its purpose is to make
common regex-related operations more human readable.

Usage:
--------------
Add easypattern to your package.json, and npm-install it.
var pattern = require('easypattern');

**contains(input, pattern)**

*Arguments*

1.  input: the string we are evaluating for the pattern
2.  pattern: the pattern we are looking for in 'input'

pattern.contains("abc", "a") --> true


**containsAllOf(input, patternsArray)**
Same idea as 'contains', except with an array.
pattern.containsAllOf("abc", ["a", "c"]) --> true


**containsOneOf(input, patternsArray)**
pattern.containsOneOf("abc", ["a", "d"]) --> true
pattern.containsOneOf("abc", ["1", "d"]) --> false


**endsWith(input, pattern)**
pattern.endsWith("abc", "c") --> true


**endsWithOneOf(input, patternsArray)**
pattern.endsWithOneOf("abc", ["c", "d"]) --> true


**startsWith(input, pattern)**
pattern.startsWith("abc", "a") --> true


**startsWithOneOf(input, patternsArray)**
pattern.startsWithOneOf("abc", ["a", "c"]) --> true


Running tests:
--------------
Navigate to the root directory for the library.

npm install
make test

