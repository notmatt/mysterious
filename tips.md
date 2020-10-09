# Where were we?

We were working on mutate, and we'd decided that the type of 'mutation' we were going to implement was a swap of two of the elements of the DNA array.

## 'this'

We were stuck working out `randomIndex`, and had a problem with `this`.

There are a _ton_ of ways to make it so that it works. There are three below, one is very old school but an interesting read since we talked about how `this` works and how variables and references work. The other two are better ways to do it in practice.

### old school

To do it old school, assign `this` to a variable. Remember that `this` is a special variable, but it works the same: it's a box that has note in it with directions to the value. Code below if you click on the triangle.

<details>
<summary>save a reference</summary>

```javascript
// 'self' is the typical name when we do it this way. Now
// the variable `self` has a reference to the _current_
// value of `this`.
let self = this;
let randomIndex = function () {
    return Math.floor(Math.random() * self.dna.length);
};
```

What's happening here is that `self` gets assigned the _current value_ of `this` (which will be a new baby organism). Inside the function, we refer to `self` to get the value that we actually want.

This is the simplest possible example of what's called a "closure" - a function that refers to a variable defined outside the function itself. We say that the variable is "bound" to the function, or that the function "closes over" the variable.

We'll deal with this more later on, but if you want the nitty-gritty, just say!

</details>

### move the function outside

Not every function has to be a part of the object; we could make a new function outside the object.

<details>
<summary>tiny hint</summary>
We only need a number between 0 and N, excluding N. Write a function with this signature: `randomInteger(n)`. It should return a random number between 0 and `n` (exclude n).
</details>

<details>
<summary>Solution</summary>

```javascript
// outside the factory function
// random integer between 0 and 'end'
const randomInteger(end) {
    return Math.floor(Math.random() * end);
}

// when you need it, like in mutate:
let randomIndex = randomInteger(this.dna.length)
```

</details>

### arrow functions

One thing we didn't get to talking about `this` was how arrow functions work, they treat things a little different. Try converting `randomIndex` to an arrow function, and take a look at what `this` is when you call it.

<details>
<summary>Details, more hints</summary>

When we create an arrow function, it "binds" (see the explanation of the "old school" method above) the _current value_ of `this` at the moment the function is defined! In other words, `this` inside an arrow function is whatever `this` was when you created the function.

Which is actually what we wanted all along. It's basically a shortcut for the old-school way of doing it, which is why I didn't want to jump right to this solution before going over the details!

</details>

<details>
<summary>Solution</summary>

```javascript
let randomIndex = () => {
    return Math.floor(Math.random() * this.dna.length);
};
```

This seems like it should be useful to make _all_ methods and functions arrow functions, but that creates problems too, we can talk about that later if you're interested!

</details>

## Swapsies

OK, now you've sorted out the random index, what's next to swap the two elements? It's harder to give hints here, but I can start.

```javascript
let originalLetter = this.dna[randomIndex()];
let newLetter = this.dna[randomIndex()]; // like
```

This doesn't quite work, because `randomIndex()` will be random each time. That's good at first, because we don't want to use the same number for both of the letters we are going to swap. But it's going to trip us up when we try to put them _back_ in the array. Where should `originalLetter` go?

<details>
<summary>hint</summary>

You'll need to store the random number.

</details>

<details>
<summary>solution</summary>

```javascript
// get the indexes
let originalIndex = randomIndex();
let newIndex = randomIndex();

// get the first letter, save it in a variable
let originalLetter = this.dna[originalIndex];
// move second index to first
this.dna[originalIndex] = this.dna[newIndex];
// move first to second from the variable
this.dna[newIndex] = originalLetter;
```

</details>

### edge cases

There's a small chance (1 in 15) that the two calls to `randomIndex` will give the same result. That's not bad, but it's not great either. What are some ways we can make sure that we're always doing a _real_ swap?

<details>
<summary>re-roll it (code inside)</summary>

here's a stand-alone example:

```javascript
function randomNumber(n) {
    return Math.floor(Math.random() * n);
}

// pick two numbers
let firstNumber = randomNumber(15);
let secondNumber = randomNumber(15);

// if they're the same, pick again until they're not!
// note -- if they are already different, this loop
// never happens.
while (firstNumber == secondNumber) {
    secondNumber = randomNumber(15);
}
```

Like ususal, there's a lot of different ways to do this, and a loop where you don't NEED a loop is not usually good style. But it works just fine here. We can go over more complicated methods if you like.

</details>

## compareDNA()

Here we want to compare the DNA of the two babies, index by index, count the ones that match, and log a message about the %age. i.e.,

```
us          ['C', 'G', 'A', 'A']
them        ['C', 'C', 'T', 'C']
matches:      Y    n    n    n  total: 1
```

<details>
<summary>hint 1</summary>

Simplest solution first: try a `for` loop.

</details>

<details>
<summary>hint 2 (solution)</summary>

use the general `for` syntax, not `for...of` or `for...in`

```javascript
let totalMatches = 0;
for (let i = 0; i < this.dna.length; i++) {
    if (this.dna[i] === comparisonBaby.dna[i]) {
        totalMatches += 1;
    }
}
console.log(`Matched ${totalMatches} of ${this.dna.length}`);
```

I would skip doing a percentage calculation because it's a pain to format the number, we can get to that another time.

</details>

## `willLikelySurvive()`

This one is very similar to the last one, except we only have to count C or G inside the current baby object.

You could do it similar to the comparison, but for practice, if you used `for` above, maybe use `forEach` or `reduce` this time (if you've covered those in codecademy -- I can never remember!)

<details>
<summary>forEach reminder</summary>

```
let exampleArray = [1, 2, 3, 4, 5];
exampleArray.forEach(function doSomething(element) {
    /* e.g., is element more than 3? */
})
```

</details>
