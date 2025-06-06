// Use Case :3 Refactored code with functions for wage calculation

function calculateWages(){
const partTime = 1;
const fullTime = 2;
const wagesPerHour = 20;

let check = Math.floor(Math.random() * 3); 
let hoursWorked = 0;

switch (check) {
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

let wagesEarned = hoursWorked * wagesPerHour;

console.log("Work Hours: " + hoursWorked + ", Wages Earned: " + wagesEarned);

}
calculateWages();