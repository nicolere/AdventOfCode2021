var utilModule = require("../../modules/utility-functions")

function countDay3P2() {
    var array = utilModule.arrayFromFile("./input.txt");
    var lifeSupportRating = 0, oxygenGeneratorRating = 0, co2ScrubberRating = 0;
    var position = 0;
    var mostCommonBit, leastCommonBit;
    var listForOxygenGenerator = [];
    var listForCo2Scrubber = [];

    [mostCommonBit, leastCommonBit] = commonBitAtPosition(array, position);

    listForOxygenGenerator = filterList(array, position, mostCommonBit);
    listForCo2Scrubber = filterList(array, position, leastCommonBit)

    position++;

    while (listForOxygenGenerator.length !== 1 || listForCo2Scrubber.length !== 1) {
        mostCommonBit = commonBitAtPosition(listForOxygenGenerator, position)[0];
        leastCommonBit = commonBitAtPosition(listForCo2Scrubber, position)[1];

        listForOxygenGenerator = filterList(listForOxygenGenerator, position, mostCommonBit);
        listForCo2Scrubber = filterList(listForCo2Scrubber, position, leastCommonBit)

        position++;
    }

    oxygenGeneratorRating = parseInt(listForOxygenGenerator[0], 2);
    co2ScrubberRating = parseInt(listForCo2Scrubber[0], 2)
    lifeSupportRating = oxygenGeneratorRating * co2ScrubberRating;
    return lifeSupportRating;
}

function commonBitAtPosition(list, position) {
    var zeroesAndOnes = [0, 0];
    var mostCommonBit = '';
    var leastCommonBit = '';

    list.forEach(val => {
        zeroesAndOnes[+val.split('')[position]]++
    });

    if (zeroesAndOnes[0] > zeroesAndOnes[1]) {
        mostCommonBit = '0';
        leastCommonBit = '1';
    } else {
        mostCommonBit = '1';
        leastCommonBit = '0';
    }
    return [mostCommonBit, leastCommonBit]
}

function filterList(list, position, commonBit) {
    if (list.length === 1) {
        return list;
    }

    return list.filter(val => val.split('')[position] === commonBit);
}

console.log(countDay3P2());