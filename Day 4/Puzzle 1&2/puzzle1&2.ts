import { arrayFromFile } from '../../modules/utility-functions';

interface WinnerModel {
    winnerBoard: number;
    score: number;
    lastNumberDrawn: number;
}

function bingoDay4(): void {
    const array: string[] = arrayFromFile("./input.txt", "\n");
    const numberToDraw = array.shift()!.split(',').map(num => parseInt(num, 10));

    const boards: number[][][] = [];
    let board: number[][];

    array.forEach((line: string) => {
        if(line === ''){
            board = [];
            boards.push(board);
        }else {
            board.push(line.trim().split(/\s+/).map(num => parseInt(num, 10)));
        }
    })
    const winners: WinnerModel[]  = [];

    for(let i = 0; i < numberToDraw.length; i++){
        for(let j = 0; j < boards.length; j++){
            if(boards[j].length > 0){
                const [win, notHitSum] = checkBoard(numberToDraw.slice(0, i), boards[j]);

                if(win){
                    const winner: WinnerModel = {
                        winnerBoard: j+1,
                        score: notHitSum * numberToDraw[i-1],
                        lastNumberDrawn: numberToDraw[i-1]
                    };
                    winners.push(winner)
                    boards[j] = [];
                }
            }
        }
    }
    console.log(winners[0]);
    console.log(winners[winners.length-1]);
}   

function checkBoard(nums: number[], board: number[][]): [boolean, number] {
    const hits = new Array(board[0].length * 2).fill(0);
    let notHitSum = 0;
    let win = false;

    for(let i=0; i < board[0].length; i++) {
        for(let j = 0; j < board[0].length; j++){
            if(nums.includes(board[i][j])){
                if(++hits[i] === board[0].length || ++hits[j+board[0].length] === board[0].length){
                    win = true
                }
            } else {
                notHitSum += board[i][j];
            }
        }
    }

    return [win, notHitSum];
}

bingoDay4();