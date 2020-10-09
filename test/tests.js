/* exercise step three
 * factory func
 * exists
 * takes params? (if this is easy)
 * has props:
 *   - specimenNum - which is number
 *   - dns - which is an array of numbers, length 15
 */

const pAq = require("../ main.js");
const assert = require("./assert.js");

const TEST_NAME = "Step 3";

assert.beginTestBlock(TEST_NAME);

assert.exists(TEST_NAME, "pAq.pAqueorFactory", pAq.pAqueorFactory);

if (!pAq.pAqueorFactory) {
    assert.terminateTestBlock();
    return;
}

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
