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

const pAq = require("../main.js");
const assert = require("./assert.js");

const TEST_NAME = "Step 5";

assert.beginTestBlock(TEST_NAME);

// create a baby, see if it has the right properties

let testDna = ['A', 'A', 'T', 'C', 'A', 'C', 'A', 'C', 'T', 'G', 'T', 'T', 'G', 'C', 'C']; // prettier-ignore
let testNum = 143;
let baby = pAq.pAequorFactory(testNum, testDna);

// we're going to change 4.
let compareDna = ['A', 'A', 'G', 'C', 'A', 'C', 'C', 'C', 'T', 'G', 'A', 'A', 'G', 'C', 'C']; // prettier-ignore
let compareDiffs = testDna.reduce((acc, e, i) => {
    return (acc += e == compareDna[i] ? 0 : 1);
}, 0);
let compareNum = 10651;
let compareBaby = pAq.pAequorFactory(compareNum, compareDna);

assert.exists(TEST_NAME, "compareDNA", baby.compareDNA);
assert.equals(
    TEST_NAME,
    "is a function",
    "compareDNA",
    typeof baby.compareDNA,
    "function"
);

if (!baby.compareDNA) {
    assert.terminateTestBlock();
    return;
}

// let's compare some DNA! We expect to get a percentage
// back, which may be a float, so let's trim it.
let dnaDiff = baby.compareDNA(compareBaby);
assert.equals(
    TEST_NAME,
    "compareDNA returns difference",
    "",
    // trim to 2 decimal places to avoid FP nonsense.
    dnaDiff.toFixed(2),
    (compareDiffs / testDna.length).toFixed(2)
);

assert.endTestBlock();
