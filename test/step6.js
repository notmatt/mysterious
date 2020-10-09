/*
 * Tests for Step 6 of the Mysterious Creature exercise
 * Goal: implement willLikelySurvive() which returns a
 *       boolean value when the baby's DNA is more than
 *       50% C or G.
 */

const pAq = require("../main.js");
const assert = require("./assert.js");

const TEST_NAME = "Step 6";

assert.beginTestBlock(TEST_NAME);

// create a baby, see if it has the right properties
// prettier-ignore
let testDnaBad = ['A', 'A', 'T', 'C', 'A', 'C', 'A', 'C', 'T', 'G', 'T', 'T', 'G', 'C', 'T'];
let testNumBad = 143;
let babyBad = pAq.pAequorFactory(testNumBad, testDnaBad);

let testDnaGood = ['A', 'C', 'T', 'C', 'A', 'C', 'G', 'C', 'T', 'G', 'T', 'T', 'G', 'C', 'C']; // prettier-ignore
let testNumGood = 8;
let babyGood = pAq.pAequorFactory(testNumGood, testDnaGood);

assert.exists(TEST_NAME, "willLikelySurvive", babyGood.willLikelySurvive);

if (!babyGood.willLikelySurvive) {
    assert.terminateTestBlock();
    return;
}

const badSurvived = babyBad.willLikelySurvive();
assert.equals(TEST_NAME, "bad DNA returns false", "", badSurvived, false);

const goodSurvived = babyGood.willLikelySurvive();
assert.equals(TEST_NAME, "good DNA returns true", "", goodSurvived, true);

assert.endTestBlock();
