/**
 * Created by christine on 7/19/17.
 */
const readlineSync = require('readline-sync');
const printS = require('./print.js');
const diffCase = require('./case.js');

function main() {
    var stuInfoArr = [];
    menu();
    readlineSync.promptCLLoop({
        1:function () {
            diffCase.addStudent(stuInfoArr);
            menu();
        },
        2:function () {
            diffCase.getTranscripts(stuInfoArr);
            menu();
        },
        3:function () {
            return true;
        }
    });
}
main();

function menu() {
    let mainList = '1. 添加学生\n2. 生成成绩单\n3. 退出\n请输入你的选择（1～3）：';
    return console.log(mainList);
}

module.exports.menu = menu;


//张三,2015211100,汉,1504,95,80,75,80
//李四,2015211101,回,1505,80,70,85,90
//2015211100,2015211101