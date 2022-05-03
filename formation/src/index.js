import {
  bonjour,
  bonjour2,
  calculateAverage,
  calculateAverageClassique,
  displayNotes,
  displayNotesClassique,
  displayStudent,
  displayStudentName,
  student,
} from './exos/revision'

// Exercice 1
console.log(bonjour('Mathieu'))

// Exercice 2
console.log(bonjour2('Mathieu2'))

// Exercice 3
console.log(displayStudentName(student))

// Exercice 4
console.log(displayNotesClassique(student.notes))

// Exercice 5
console.log(calculateAverageClassique(student.notes))

// Exercice 6
console.log(displayStudent(student))
