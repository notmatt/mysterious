# HI JESS

This repository has a bunch of tests set up for the mysterious organism project.
You have two choices to get them working for you:

## 1. manually (maybe a bit tedious)

1. Make a new folder called `test` in the same place as your main mysterious
   organism file.
2. Copy all the files in this [test directory]() to your machine (copy/paste
   will work). Make sure they have the same names!
3. You can run all the tests by opening `test-all.js` and starting a debug
   session. The output should show up on the debug console.

## 2. use Git (more steps, but less tedious hopefully)

Hopefully you can do this entirely within VSCode. If not, try the manual version.

1. `ctrl-shift-p` to open the magic command bar.
2. type `git: clone` hit enter.
3. paste this: `https://github.com/notmatt/mysterious.git`
4. It will ask you where to put the repo, that's up to you
5. it will create a new folder named 'mysterious' there
6. open that folder
7. paste your code into `main.js` (it's blank right now)
8. hopefully you're set up with all the tests now, and can run them with the normal start debug session.

# Couple of small changes

You'll need to add this at the bottom of the file:

```javascript
module.exports = {
    pAequorFactory: pAequorFactory,
    // uncomment next line for Step 7 of the exercise.
    // bigSample: bigSample,
};
```

To make this more testable, a couple of small changes to the requirements:

1. `compareDNA()` should return the percentage it calculates. It's fine to also log a console message.
2. in step 7 where you have to "create an array of 30 babies", create a function called `bigSample()` that returns the array.
