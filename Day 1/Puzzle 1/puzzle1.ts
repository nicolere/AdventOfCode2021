
import { arrayFromFile } from '../../modules/utility-functions';

function countDay1P1(): number {
    const array = arrayFromFile("./input.txt", "\n");
    let cpt = 0;

    for (let i = 0; i < array.length - 1; i++) {
        if (i != 0 && Number(array[i]) > Number(array[i - 1])) {
            cpt++
        }
    }
    return cpt;
}
console.log(countDay1P1())