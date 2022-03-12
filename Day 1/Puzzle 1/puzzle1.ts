var utilModule = require("../../modules/utility-functions")

function countDay1P1() {
    var array = utilModule.arrayFromFile("./input.txt");
    var cpt = 0;

    for (var i = 0; i < array.length - 1; i++) {
        if (i != 0 && Number(array[i]) > Number(array[i - 1])) {
            cpt++
        }
    }
    return cpt;
}
console.log(countDay1P1())