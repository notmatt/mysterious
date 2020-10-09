/*
 * Tests for Step 3 of the Mysterious Creature exercise
 * Goal: create the basic factory function & return the
 *       specified object.
 */

const pAq = require("../main.js");
const assert = require("./assert.js");

const TEST_NAME = "Step 7";

assert.beginTestBlock(TEST_NAME);

// does the factory function exist?
assert.exists(TEST_NAME, "pAq.bigSample", pAq.bigSample);

if (!pAq.bigSample) {
    assert.terminateTestBlock();
    return;
}

let babyArray = pAq.bigSample();
// array length is 30
assert.equals(TEST_NAME, "30 specimens", "", babyArray.length, 30);
// all likely to survive
let allSurvive = babyArray.every((e) => e.willLikelySurvive());
assert.equals(TEST_NAME, "all likely to survive", "", allSurvive, true);
// not copies of the same one
let specimenNumberSet = new Set();
babyArray.forEach((e) => specimenNumberSet.add(e.specimenNum));

let allDiff = specimenNumberSet.size == babyArray.length;
assert.equals(TEST_NAME, "all have different specimen nums", "", allDiff, true);
assert.endTestBlock();
