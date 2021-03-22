import isl from "../src/katas/06";

import { IDeveloper } from "../src/interfaces/IDeveloper";

test("case #1", () => {
  let arr = [];
  let result = isl(arr);
  expect(result).toBeFalsy();
});

test("case #2", () => {
  let result = isl(undefined);
  expect(result).toBeFalsy();
});

test("case #3", () => {
  let result = isl(null);
  expect(result).toBeFalsy();
});

test("case #4", () => {
  let arr = [
    <IDeveloper>{
      firstName: "Daniel",
      lastName: "J.",
      country: "Aruba",
      continent: "Americas",
      age: 42,
      language: "JavaScript",
    },
    <IDeveloper>{
      firstName: "Kseniya",
      lastName: "T.",
      country: "Belarus",
      continent: "Europe",
      age: 22,
      language: "JavaScript",
    },
    <IDeveloper>{
      firstName: "Hanna",
      lastName: "L.",
      country: "Hungary",
      continent: "Europe",
      age: 65,
      language: "JavaScript",
    },
  ];

  let result = isl(arr);
  expect(result).toBeTruthy();
});

test("case #5", () => {
  let arr = [
    <IDeveloper>{
      firstName: "Mariami",
      lastName: "G.",
      country: "Georgia",
      continent: "Europe",
      age: 29,
      language: "Python",
    },
    <IDeveloper>{
      firstName: "Mia",
      lastName: "H.",
      country: "Germany",
      continent: "Europe",
      age: 39,
      language: "Ruby",
    },
    <IDeveloper>{
      firstName: "Maria",
      lastName: "I.",
      country: "Greece",
      continent: "Europe",
      age: 32,
      language: "C",
    },
  ];

  let result = isl(arr);
  expect(result).toBeFalsy();
});

test("case #6", () => {
  let arr = [
    <IDeveloper>{
      firstName: "Mariami",
      lastName: "G.",
      country: "Georgia",
      continent: "Europe",
      age: 29,
      language: "Python",
    },
    <IDeveloper>{
      firstName: "Mia",
      lastName: "H.",
      country: "Germany",
      continent: "Europe",
      age: 39,
      language: "Ruby",
    },
    <IDeveloper>{
      firstName: "Maria",
      lastName: "I.",
      country: "Greece",
      continent: "Europe",
      age: 32,
      language: "C",
    },
    <IDeveloper>{
      firstName: "George",
      lastName: "W.",
      country: "Ireland",
      continent: "Europe",
      age: 24,
      language: "Python",
    },
  ];

  let result = isl(arr);
  expect(result).toBeFalsy();
});
