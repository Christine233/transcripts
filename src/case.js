const readlineSync = require('readline-sync');
const printS = require('./print.js');
const trans = require('./transcripts.js');
// case 1
function addStudent(stuInfoArr) {
    let stuInfoQ = `请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交：\n`;
    let stuInfo = readlineSync.question(stuInfoQ);
    stuInfo = stuInfo.split(',');
    let passed = stuInfo.every(isNull);
    function isNull(element) {
        return (element != '');
    }
    if(passed == true){
        console.log(`学生${stuInfo[0]}的成绩被添加\n`);
    }else{
        console.log(`请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）：\n`);
    }
    stuInfoArr.push(stuInfo);
    //trans.menu();
}

// case 2
function getTranscripts(stuInfoArr) {
    let transcriptsQ = `请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：\n`;
    let stuId = readlineSync.question(transcriptsQ);
    stuId = stuId.split(',');
    let passed = stuId.every(ifIsNull);
    function ifIsNull(element) {
        return (element != '');
    }
    if(passed == true){
        console.log(printS.printReceipt(stuInfoArr));
    }else{
        console.log(`请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：\n`);
    }
}

module.exports = {
    addStudent,
    getTranscripts
};

