/*
 * Tests for Step 4 of the Mysterious Creature exercise
 * Goal: implement mutate() method to swap two letters
 *       in a creature's DNA. Must actually change the
 *       original, not just return a new array!
 */
const pAq = require("../main.js");
const assert = require("./assert.js");

const TEST_NAME = "Step 4";

assert.beginTestBlock(TEST_NAME);

// create a baby with "special" DNA so we can ensure
// a mutation happens.
// prettier-ignore
let testDna = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14'];
// make a copy to compare to later.
let originalTestDna = testDna.slice(0);
let testNum = 143;
let baby = pAq.pAequorFactory(testNum, testDna);

// check function exists.
assert.exists(TEST_NAME, "mutate", baby.mutate);
assert.equals(
    TEST_NAME,
    "mutate is a function",
    "",
    "function",
    typeof baby.mutate
);

if (!baby.mutate) {
    assert.terminateTestBlock();
    return;
}

// test mutate. Compare to our copy of the original.
let mutatedDna = baby.mutate();
let mutated = mutatedDna.some((e, i) => e != originalTestDna[i]);
assert.equals(TEST_NAME, "mutates something", "", true, mutated);

// ensure that the original is changed too
let creatureChanged = baby.dna.some((e, i) => e != originalTestDna[i]);
assert.equals(
    TEST_NAME,
    "creature actually changed",
    "",
    true,
    creatureChanged
);
assert.endTestBlock();

/* Exercise step four
 * implement mutate()
 *   - should exist on returned object
 *   - when called, should return a new array with two things switched
 *     - can we mock randomIndex to give us two fixed ones? let's try.
 *   - original array should be unchanged -- NEW ARRAY
 */

/*
 * Exercise step five
 * implement compareDNA()
 *   - should exist on new object
 *   - one param
 *   - ADDITION TO SPEC:
 *   -  should _return_ the percentage difference!
 *   -  it's hard to test console logs.
 *   -  math tip: precentage = (differences / 15) * 100
 */

/* Exercise step six
 * implement willLikelySurvive
 *  - should exist
 *  - true when >50% C/G
 *  - false otherwise
 */

/*
 * step seven
 * write a function that returns an array of 30 instances.
 * call it createSample()
 *   - array of length 30
 *   - all specimenNums should be different
 */
