const readlineSync = require('readline-sync');
const trans = require('./transcripts.js');
const diffCase = require('./case.js');

// 打印成绩单
function printReceipt(stuInfoArr){
    let list = `成绩单\n姓名|数学|语文|英语|编程|平均分|总分\n========================\n`;
    let newAver = calcAver(stuInfoArr);
    let newWhole = calcPerWhole(stuInfoArr);
    for(let i = 0; i < stuInfoArr.length; i++){
        list += `${stuInfoArr[i][0]}|${stuInfoArr[i][6]}|${stuInfoArr[i][4]}|${stuInfoArr[i][5]}|${stuInfoArr[i][7]}|${newAver[i]}|${newWhole[i]}\n`;
    }
    list += `========================\n全班总平均分：${calcAverWhole(calcAver(stuInfoArr))}\n全班总分中位数：${calcMedian(calcPerWhole(stuInfoArr))}`;
    return list;
}

//计算每个同学成绩平均分
function calcAver(inputArr) {
    var averScoreArr = [];
    for(let i = 0; i < inputArr.length; i++) {
        var score = 0;
        for(let j = 4; j < inputArr[i].length; j++) {
            score += parseInt(inputArr[i][j]);
        }
        averScoreArr[i] = score/(inputArr[i].length-4);
    }
    return averScoreArr;
}

//计算全班总平均分
function calcAverWhole(averScoreArr) {
    var wholeScore = 0;
    for(let i = 0; i < averScoreArr.length; i++){
        wholeScore += averScoreArr[i];
    }
    wholeScore = wholeScore/averScoreArr.length;
    return wholeScore;
}

//计算每个同学总分
function calcPerWhole(inputArr) {
    var wholeScoreArr = [];
    for(let i = 0; i < inputArr.length; i++) {
        var score = 0;
        for(let j = 4; j < inputArr[i].length; j++) {
            score += parseInt(inputArr[i][j]);
        }
        wholeScoreArr[i] = score;
    }
    return wholeScoreArr;
}

//计算全班总分中位数（排序，取中位数）
function calcMedian(wholeScoreArr) {
    var median = 0;
    var newArr = wholeScoreArr;
    let temp = 0;
    for(let i = 0; i < newArr.length; i++) {
        for(let j = i; j < newArr.length; j++){
            if(newArr[j] < newArr[i]){
                temp = newArr[j];
                newArr[j] = newArr[i];
                newArr[i] = temp;
            }
        }
    }
    if(newArr.length % 2 == 0)
        median = (newArr[newArr.length/2] + newArr[(newArr.length/2)-1])/2;
    else
        median = newArr[Math.floor(newArr.length / 2)];
    return median;
}

module.exports.printReceipt = printReceipt;
