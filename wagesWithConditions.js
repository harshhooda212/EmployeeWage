//Use Case :5 Calculate wages for a month
function calculateMonthlyWages() {
const wagesPerHour = 20;
const fullTime = 8;
const partTime = 4;
const maxWorkingDays = 20;
const maxWorkingHours = 160;

let totalHours = 0;
let totalDays = 0;
let dailyWageArray = [];

function getWorkingHours(attendance) {
    switch (attendance) {
        case 1: return partTime; 
        case 2: return fullTime; 
        default: return 0; 
    }
}

while (totalHours <   maxWorkingHours && totalDays < maxWorkingDays) {
    totalDays++;
    let attendance = Math.floor(Math.random() * 3); 
    let workingHours = getWorkingHours(attendance);

    
    if (totalHours + workingHours > maxWorkingHours) {
        workingHours = maxWorkingHours - totalHours;
    }

    totalHours += workingHours;
    let dailyWage = workingHours * wagesPerHour;
    dailyWageArray.push(`Day ${totalDays}: Hours = ${workingHours}, Wage = ₹${dailyWage}`);
}

let totalWage = totalHours * WAGE_PER_HOUR;

console.log("---- Monthly Wage Report ----");
dailyWageArray.forEach(day => console.log(day));
console.log(`Total Days Worked: ${totalDays}`);
console.log(`Total Hours Worked: ${totalHours}`);
console.log(`Total Monthly Wage: ₹${totalWage}`);
}
module.exports = calculateMonthlyWages;
