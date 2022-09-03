import * as fs from "fs";

export function arrayFromFile(filepath: string, separator: string): string[] {
    const input = fs.readFileSync(filepath, "utf-8");
    return input.split(separator);
}