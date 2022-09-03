import { arrayFromFile } from '../../modules/utility-functions';

function hydroThermalVentureDay5(): void {
    let array: string[] = arrayFromFile("./input.txt", "\n");
    const finalArray: number[][] = 
        array
        .map(line => line.split(/[^\d]+/).map(val => parseInt(val, 10)))
        .filter((line: number[]) => line.length === 4);

    const map: any[] = [];
    let cpt = 0;

    const setPoint = (x:number, y:number) => {
            map[y] = map[y] || [];
            map[y][x] = map[y][x] || 0;
            return ++map[y][x];
        }

    finalArray.forEach((item: number[]) => {
        let [x1 , y1, x2, y2] = item;
        while(true){
            if(setPoint(x1, y1) === 2){
                cpt++
            }

            if(x1 === x2 && y1 === y2){
                break;
            }

            if(x2 > x1) {

                x1++;
            } else if(x2 < x1){

                x1--;
            }

            if(y2 > y1) {

                y1++
            } else if(y2 < y1){

                y1--
            }
        }
    });
    
    console.log(cpt);
}

hydroThermalVentureDay5();