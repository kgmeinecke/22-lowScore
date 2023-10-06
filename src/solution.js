function findLowestScoringStudent(students) {
    if (!students || students.length === 0) return null;
    let student = students[0];
    for (let i = 0; i < students.length; i++){
      if (students[i].score < student.score) {
        student = students[i];
      }
    }
    return student;
  }
  
  module.exports = findLowestScoringStudent;