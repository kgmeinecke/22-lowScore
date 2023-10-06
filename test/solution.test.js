const findLowestScoringStudent = require("../src/solution.js");

describe('findLowestScoringStudent', () => {
  test(('should return the student with the lowest score'), () => {
    const students = [
        { name: "Leo Yeon-Joo", score: 8.9 },
        { name: "Morgan Sutton", score: 7.4 },
        { name: "Natalee Vargas", score: 9.2 },
      ];
      const expected = { name: "Morgan Sutton", score: 7.4 };
      const actual = findLowestScoringStudent(students);

      expect(actual).toEqual(expected);
  })

  test(('should return null'), () => {
    const students = [];

    const expected = null;
    const actual = findLowestScoringStudent([]);

    expect(actual).toBe(expected);
  })

  test('should return null', () => {
    const expected = null;
    const actual = findLowestScoringStudent();

    expect(actual).toBe(expected);
  })
})