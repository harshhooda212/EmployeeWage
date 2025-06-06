//Use Case :1 Will Check if an employee is present

function Attendance(){
  const present = 1;
let attendance = Math.floor(Math.random() * 2); 

if (attendance == present) {

  console.log("Employee is Present");
}
 else {

  console.log("Employee is Absent");
}
}
Attendance();
