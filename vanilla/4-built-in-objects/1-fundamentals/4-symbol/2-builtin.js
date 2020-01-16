/*
In addition to your own symbols, Javascript has some built-in symbols
which represent internal language behaviors which were not exposed
to developers in ECMAScript 5 and before.

These symbols can be accessed using the following properties
 */


/*
`Symbol.iterator`: method returning the default iterator for an object.
Used by `for...of`.
 */

const iterable1 = new Object();
iterable1[Symbol.iterator] = function* () {
	yield 1;
	yield 2;
	yield 3;
};

console.log([...iterable1]); // Array [1, 2, 3]

/*
`Symbol.asyncIterator`: method returning the default AsyncIterator
 for an object. Used by `for await...of`.
 */

const myAsyncIterable = new Object();
myAsyncIterable[Symbol.asyncIterator] = async function*() {
	yield 'hello';
	yield 'async';
	yield 'iteration!';
};

(async () => {
	for await (const x of myAsyncIterable) {
		console.log(x);
		// hello
		// async
		// iteration!
	}
})();

/*
`Symbol.match`: specifies the matching of a regular expression
against a string. This function is called by the
`String.prototype.match()` method.

This function is used to identify if objects have the behavior
of regular expressions. Methods `String.prototype.startsWith`
and `String.prototype.endsWith` check if their first argument
is a regular expression and will throw TypeError if they are.
Now if the match symbol is set to false, it indicates that the
object is not intended to be used as a regular expression object.
 */

const regexp1 = /foo/;
regexp1[Symbol.match] = false;

console.log('/foo/'.startsWith(regexp1)); // true
console.log('/baz/'.endsWith(regexp1)); // false

/*
`Symbol.matchAll` returns an iterator, that yields matches of
regular expression against a string. This function is called by
the `String.prototype.matchAll()` method.
 */

let re = /[0-9]+/g;
let str = '2016-01-02|2019-03-07';
let result = re[Symbol.matchAll](str);
console.log(Array.from(result, x => x[0]));
// Array [2016, 01, 02, 2019, 03, 07];

/*
`Symbol.replace`: specifies the method that replaces matched
substrings of a string. This function is called by
`String.prototype.replace()` method.
 */

class Replace1 {
	constructor(value) {
		this.value = value;
	}
	[Symbol.replace](string) {
		return `s/${string}/${this.value}/g`;
	}
}

console.log('foo'.replace(new Replace1('bar')));
// expected output: "s/foo/bar/g"

/*
`Symbol.search`: specifies method that returns the index
within a string that matches the regular expression.
This method is called by the `String.prototype.search()` method.
 */

class Search1 {
	constructor(value) {
		this.value = value;
	}
	[Symbol.search](string) {
		return string.indexOf(this.value);
	}
}

console.log('foobar'.search(new Search1('bar'))); // 3

/*
`Symbol.split`: specifies method that splits a string at the
indices that match a regular expression.
This method is called by the `String.prototype.split()` method.
 */

class Split1 {
	constructor(value) {
		this.value = value;
	}
	[Symbol.split](string) {
		const index = string.indexOf(this.value);
		return this.value + string.substr(0, index) + "/"
			+ string.substr(index + this.value.length);
	}
}

console.log('foobar'.split(new Split1('foo')));
// expected output: "foo/bar"
