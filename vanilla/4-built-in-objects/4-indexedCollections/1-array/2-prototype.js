// Array.prototype

/*
MUTATOR METHODS

+ copyWithin(target[, start[, end]])
copies a sequence of array elements within the array

+ fill(value[, start[, end]])
fills all the element of array from start index to end index with static value

+ pop()

+ push(element1[, ...[, elementN]])

+ reverse()

+ sort([compareFunction(a, b)])
default ASC, built upon converting elements into strings, then comparing
their sequences of UTF-16 code units values.
Time and space complexity of sort cannot be guaranteed as it depends
on the implementation.
compareFunction(a,b) defines sort order:
< 0: a comes first
> 0: b comes first
0: leaves unchanged with respect to each other

+ splice(start[, deleteCount[, item1[, item2[, ...]]]])
adds or removes elements from an array

+ unshift(element1[, ...[, elementN]])
adds one or more elements to the front of an array, returns new length
 */
