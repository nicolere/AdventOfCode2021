var utilModule = require("../../modules/utility-functions")

function countDay1P2() {
    var array = utilModule.arrayFromFile("./input.txt");
    var cpt = 0, previous = 0;

    for (var i = 0; i < array.length - 3; i++) {
        var threeMSum = Number(array[i]) + Number(array[i + 1]) + Number(array[i + 2]);
        if (threeMSum > previous) {
            cpt++
        }
        previous = threeMSum;
    }
    return cpt - 1;
}
console.log(countDay1P2());