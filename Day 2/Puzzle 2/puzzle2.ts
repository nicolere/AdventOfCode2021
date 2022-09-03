import { arrayFromFile } from '../../modules/utility-functions';

function countDay2P2(): number {
    const array = arrayFromFile("./input.txt", "\n");
    let depth = 0, horizontal = 0, aim = 0;

    array.forEach((item: string) => {
        if (item.includes('down')) {
            aim += Number(item.split(" ")[1])
        }
        if (item.includes('up')) {
            aim -= Number(item.split(" ")[1])
        }

        if (item.includes('forward')) {
            horizontal += Number(item.split(" ")[1]);
            depth += aim * Number(item.split(" ")[1])
        }
    })
    return horizontal * depth;
}
console.log(countDay2P2());