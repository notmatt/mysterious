// Returns a random DNA base
//randomly selects a letter from the array(a 'DNA base')
const returnRandBase = () => {
    const dnaBases = ["A", "T", "C", "G"];
    return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
//makes a new array of 15 letters (selected from returnRandBase)
const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase());
    }
    return newStrand;
};

let arr = mockUpStrand();
console.log(arr);

//make a factory function `pAqFact`
//  params: number(serial num of org), array of DNA bases.
//  returns: object with:
//    - specimenNum
//    - "DNA" corresponding to params.

const pAequorFactory = function (babyCreatureNumber, babyDNA) {
    let newBaby = {
        specimenNum: babyCreatureNumber,
        dna: babyDNA,

        mutate() {
            let randomIndex = () => {
                return Math.floor(Math.random() * this.dna.length);
            };
            let index1 = randomIndex();
            let index2 = randomIndex();
            // re-roll if we matched.
            while (index1 == index2) {
                index2 = randomIndex();
            }

            let tmp = this.dna[index1];
            this.dna[index1] = this.dna[index2];
            this.dna[index2] = tmp;

            return this.dna;
        },
        compareDNA(otherBaby) {
            let numDiffs = this.dna.reduce((acc, e, i) => {
                return (acc += e == otherBaby.dna[i] ? 0 : 1);
            }, 0);
            let percent = numDiffs / this.dna.length;
            console.log(`${this.specimenNum} differs from ${otherBaby.specimenNum} by ${percent.toFixed(2)}%`); // prettier-ignore
            return percent;
        },
        willLikelySurvive() {
            let numCorG = this.dna.reduce((acc, e) => {
                return (acc += e == "C" || e == "G" ? 1 : 0);
            }, 0);
            return numCorG / this.dna.length > 0.5;
        },
    };
    return newBaby;
};

const bigSample = () => {
    let arr = [];
    let attempt = 0;
    while (arr.length < 30) {
        let baby = pAequorFactory(attempt++, mockUpStrand());
        if (baby.willLikelySurvive()) arr.push(baby);
    }
    return arr;
};

module.exports = {
    pAequorFactory: pAequorFactory,
    bigSample: bigSample,
};

// let newTestBaby = pAequorFactory(5, mockUpStrand());
// newTestBaby.mutate();

//boop
