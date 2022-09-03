import { arrayFromFile } from '../../modules/utility-functions';

function countDay3P1(): number {
    const array = arrayFromFile("./input.txt", "\n");
    const zeroCounter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const unCounter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const gamma: number[] = [], epsilon: number[] = [];
    let gammaSum = 0, epsilonSum = 0;

    array.forEach((item: string) => {
        const splitString = item.split('');
        splitString.forEach((char, index) => {
            if (Number(char) == 1) {
                unCounter[index]++
            } else if (Number(char) == 0) {
                zeroCounter[index]++
            }
        })
    });

    zeroCounter.forEach((cpt, i) => {
        if (cpt > unCounter[i]) {
            gamma.push(0);
            epsilon.push(1);
        } else {
            gamma.push(1);
            epsilon.push(0);
        }
    });

    gamma.forEach((val, index) => {
        gammaSum += val * Math.pow(2, (gamma.length - 1 - index))
        epsilonSum += epsilon[index] * Math.pow(2, (gamma.length - 1 - index))
    })
    return gammaSum * epsilonSum;
}
console.log(countDay3P1());