import { arrayFromFile } from '../../modules/utility-functions';

function countDay2P1(): number {
    const array = arrayFromFile("./input.txt", "\n");
    let depth = 0, horizontal = 0;

    array.forEach((item: string) => {
        if (item.includes('forward')) {
            horizontal += Number(item.split(" ")[1])
        }
        if (item.includes('down')) {
            depth += Number(item.split(" ")[1])
        }
        if (item.includes('up')) {
            depth -= Number(item.split(" ")[1])
        }
    });
    return horizontal * depth;
}
console.log(countDay2P1());