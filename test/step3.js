/*
 * Tests for Step 3 of the Mysterious Creature exercise
 * Goal: create the basic factory function & return the
 *       specified object.
 */

const pAq = require("../main.js");
const assert = require("./assert.js");

const TEST_NAME = "Step 3";

assert.beginTestBlock(TEST_NAME);

// does the factory function exist?
assert.exists(TEST_NAME, "pAequorFactory", pAq.pAequorFactory);

if (!pAq.pAqueorFactory) {
    assert.terminateTestBlock();
    return;
}

// create a baby, see if it has the right properties
// prettier-ignore
let testDna = ['A', 'A', 'T', 'C', 'A', 'C', 'A', 'C', 'T', 'G', 'T', 'T', 'G', 'C', 'C'];
let testNum = 143;
let baby = pAq.pAequorFactory(testNum, testDna);

// check the specimenNum property
assert.exists(TEST_NAME, "specimenNum property", baby.specimenNum);
assert.equals(
    TEST_NAME,
    "specimenNum value",
    "baby",
    baby.specimenNum,
    testNum
);

// check the dna property
assert.exists(TEST_NAME, "dna property", baby.dna);
assert.arrayEquals(TEST_NAME, "dna value", "", baby.dna, testDna);

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
