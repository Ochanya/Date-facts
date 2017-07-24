const moment = require('moment');
const chalk = require('chalk');
let startOf = moment().startOf('day');
let currentTime = moment();
let daySeconds= currentTime.diff(startOf, 'seconds');
let dst ="";
let leapYear="";
if (moment().isDST()){
   dst = "is";
}
  else{
    dst = "is not";
  }

if (moment().isLeapYear()){
  leapYear= "is";
}
 else{
   leapYear="is not";
 }
// if (moment().isDST()){

function dateTime(){
console.log("It is " + chalk.blue(`${moment()}`)+".");
console.log("It is the " + chalk.magenta(`${moment().dayOfYear()}`+"th" )+" day of the year.");
console.log("It is " + chalk.cyan(`${daySeconds}`)+ " seconds into the day.");
console.log("It "+ chalk.green(`${dst}`) +" during Daylight Savings Time.");
console.log("It "+ chalk.red(`${leapYear}`) + " not a Leap Year.");

}

dateTime();
