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

// assert we still have all the expected DNA letters.
let dnaSet = new Set(baby.dna);
assert.equals(
    TEST_NAME,
    "doesn't change letters",
    "",
    dnaSet.size,
    originalTestDna.length
);

// assert that we only changed two
let totalChanged = baby.dna.reduce((acc, e, i) => {
    let expect = i.toString().padStart(2, "0");
    return (acc += expect == e ? 0 : 1);
}, 0);
const expectChanged = 2;
assert.equals(TEST_NAME, "only two changed", "", totalChanged, expectChanged);

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
