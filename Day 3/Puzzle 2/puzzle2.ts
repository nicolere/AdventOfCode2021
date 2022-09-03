import { arrayFromFile } from '../../modules/utility-functions';

function countDay3P2(): number {
    const array = arrayFromFile("./input.txt", "\n");
    let lifeSupportRating = 0, oxygenGeneratorRating = 0, co2ScrubberRating = 0;
    let position = 0;
    let mostCommonBit: string, leastCommonBit: string;
    let listForOxygenGenerator: string[] = [];
    let listForCo2Scrubber:string[] = [];

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

function commonBitAtPosition(list: string[], position: number): [string, string] {
    const zeroesAndOnes = [0, 0];
    let mostCommonBit = '';
    let leastCommonBit = '';

    list.forEach((val: string) => {
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

function filterList(list: string[], position: number, commonBit: string): string[] {
    if (list.length === 1) {
        return list;
    }

    return list.filter(val => val.split('')[position] === commonBit);
}

console.log(countDay3P2());