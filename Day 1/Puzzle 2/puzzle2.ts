import { arrayFromFile } from '../../modules/utility-functions';

function countDay1P2(): number {
    const array = arrayFromFile("./input.txt", "\n");
    let cpt = 0, previous = 0;

    for (let i = 0; i < array.length - 3; i++) {
        const threeMSum = Number(array[i]) + Number(array[i + 1]) + Number(array[i + 2]);
        if (threeMSum > previous) {
            cpt++
        }
        previous = threeMSum;
    }
    return cpt - 1;
}
console.log(countDay1P2());