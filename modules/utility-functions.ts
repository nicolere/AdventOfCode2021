var fs = require("fs");

function arrayFromFile(filepath) {
    var input = fs.readFileSync(filepath, "utf-8");
    return input.split("\n");
}

exports.arrayFromFile = arrayFromFile;