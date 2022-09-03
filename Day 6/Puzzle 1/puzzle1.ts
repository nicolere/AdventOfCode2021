import { arrayFromFile } from '../../modules/utility-functions';

function growingLanternfishD6(maxDays: number): void {
    let count: number[] = Array(9).fill(0);
    arrayFromFile("./input.txt", ',').map(val => parseInt(val, 10)).forEach(val => count[val]++);

    for(let i=0; i < maxDays; i++){
        const newCount = count.shift();
        count[6] += newCount!;
        count.push(newCount!)
    }
    console.log(count.reduce((count, total) => count + total))
}

growingLanternfishD6(80);
growingLanternfishD6(256);