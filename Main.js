const checkEmployeeAttendance = require('./refactorEmployeeAttendance');
const calculateWages = require('./refactorWageCalculation');
const calculateWagesForMonth = require('./wagesForMonth');
const wagesWithConditions = require('./wagesWithConditions');

function main() {
    console.log("Welcome to Employee Wage Computation System");



    const selectedOption = 3; 

    switch (selectedOption) {
        case 1:
            checkEmployeeAttendance();
            break;
        case 2:
            calculateWages();
            break;
        case 3:
            calculateWagesForMonth();
            break;
        case 4:
            wagesWithConditions();
            break;
        default:
            console.log("Invalid Option Selected");
    }
}

main();