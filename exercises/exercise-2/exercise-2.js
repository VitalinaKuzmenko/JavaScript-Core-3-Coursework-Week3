let hogwarts = [
  {
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",
    pet: "Owl",
    occupation: "Student",
  },
  {
    firstName: "Ron",
    lastName: "Weasley",
    house: "Gryffindor",
    pet: "Scabbers",
    occupation: "Student",
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor",
    pet: "Cat",
    occupation: "Student",
  },
  {
    firstName: "Draco",
    lastName: "Malfoy",
    house: "Slytherin",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Cedric",
    lastName: "Diggory",
    house: "HufflePuff",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Severus",
    lastName: "Snape",
    house: "Slytherin",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Filius",
    lastName: "Flitwick",
    house: "Ravenclaw",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Pomona",
    lastName: "Sprout",
    house: "Hufflepuff",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Minerva",
    lastName: "McGonagall",
    house: "Gryffindor",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Albus",
    lastName: "Dumbledore",
    house: "Gryffindor",
    pet: "Phoenix",
    occupation: "Teacher",
  },
];

function showNamesOfStudents(array) {
  let [student1, student2, student3, student4, student5] = array;

  console.log(student1.firstName + " " + student1.lastName);
  console.log(student2.firstName + " " + student2.lastName);
  console.log(student3.firstName + " " + student3.lastName);
  console.log(student4.firstName + " " + student4.lastName);
  console.log(student5.firstName + " " + student5.lastName);
}

//as for me it is more difficult to use here destructuring method if we don't know how many teachers we have in array and at which exactly position
function showNamesOfTeachers(array) {
  let onlyTeachers = [];
  for (let person of array) {
    if (person.occupation === "Teacher") {
      onlyTeachers.push[person];
    }
  }

  array
    .filter((person) => person.occupation === "Teacher")
    .forEach((person) => console.log(person.firstName + " " + person.lastName));
}

showNamesOfStudents(hogwarts);

showNamesOfTeachers(hogwarts);
