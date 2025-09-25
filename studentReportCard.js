let student = {
  name: "Ama",
  age: 25,
  grade: 90,
  likesCoding: false,
};

console.log(student);

if (student.grade >= 90) {
  console.log("Ama's letter grade is A");
} else if (student.grade >= 80) {
  console.log("B");
} else if (student.grade >= 70) {
  console.log("C");
} else if (student.grade >= 60) {
  console.log("D");
} else {
  console.log("F");
}

if (student.likesCoding === true) {
  student.careerGoal = "Software Engineer";
} else {
  student.careerGoal = "Not sure yet";
}

console.log(student);
