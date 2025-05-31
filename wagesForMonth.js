//Use Case :4 Calculate wages for a month
function calculateWagesForMonth(){

const partTime = 1;
const fullTime= 2;
let totalWages = 0;


for(let day=1;day<=20;day++){
    let check=Math.floor(Math.random()*3);
    let hoursWorked = 0;

    switch(check){
    case partTime:
        hoursWorked = 4;
        console.log("Employee has worked Part Time");
    
    break;

    case fullTime:
    hoursWorked = 8;    
    console.log("Employee has worked Full Time");   
    
        break;

    default:
        hoursWorked = 0;
        console.log("Employee is Absent");

        break;
}
    let wagesEarned=check * 20;
    totalWages = totalWages + wagesEarned;
    console.log("Day:"+ day + "||" + "Hours Worked:" + hoursWorked + "||" + " Wages Earned :"+ wagesEarned);
}

console.log("Total Monthly Wage: " + totalWages );
}
module.exports = calculateWagesForMonth;