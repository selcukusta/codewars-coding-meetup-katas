import ild from "../src/katas/13";

import { IDeveloper } from "../src/interfaces/IDeveloper";

test("case #1", () => {
  let arr = [];
  let result = ild(arr);
  expect(result).toBeFalsy();
});

test("case #2", () => {
  let result = ild(undefined);
  expect(result).toBeFalsy();
});

test("case #3", () => {
  let result = ild(null);
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
      language: "Python",
    },
    <IDeveloper>{
      firstName: "Kseniya",
      lastName: "T.",
      country: "Belarus",
      continent: "Europe",
      age: 22,
      language: "Ruby",
    },
    <IDeveloper>{
      firstName: "Sou",
      lastName: "B.",
      country: "Japan",
      continent: "Asia",
      age: 43,
      language: "Ruby",
    },
    <IDeveloper>{
      firstName: "Hanna",
      lastName: "L.",
      country: "Hungary",
      continent: "Europe",
      age: 95,
      language: "JavaScript",
    },
    <IDeveloper>{
      firstName: "Jayden",
      lastName: "P.",
      country: "Jamaica",
      continent: "Americas",
      age: 18,
      language: "JavaScript",
    },
    <IDeveloper>{
      firstName: "Joao",
      lastName: "D.",
      country: "Portugal",
      continent: "Europe",
      age: 25,
      language: "JavaScript",
    },
  ];

  let result = ild(arr);
  // expect(result).toBeTruthy();
  expect(result).toBeFalsy();
});

test("case #5", () => {
  let arr = [
    <IDeveloper>{
      firstName: "Daniel",
      lastName: "J.",
      country: "Aruba",
      continent: "Americas",
      age: 42,
      language: "Python",
    },
    <IDeveloper>{
      firstName: "Kseniya",
      lastName: "T.",
      country: "Belarus",
      continent: "Europe",
      age: 22,
      language: "Ruby",
    },
    <IDeveloper>{
      firstName: "Hanna",
      lastName: "L.",
      country: "Hungary",
      continent: "Europe",
      age: 95,
      language: "JavaScript",
    },
    <IDeveloper>{
      firstName: "Jayden",
      lastName: "P.",
      country: "Jamaica",
      continent: "Americas",
      age: 18,
      language: "JavaScript",
    },
    <IDeveloper>{
      firstName: "Joao",
      lastName: "D.",
      country: "Portugal",
      continent: "Europe",
      age: 25,
      language: "JavaScript",
    },
  ];

  let result = ild(arr);
  // expect(result).toBeTruthy();
  expect(result).toBeFalsy();
});

test("case #6", () => {
  let arr = [
    <IDeveloper>{
      firstName: "Daniel",
      lastName: "J.",
      country: "Aruba",
      continent: "Americas",
      age: 42,
      language: "Python",
    },
    <IDeveloper>{
      firstName: "Kseniya",
      lastName: "T.",
      country: "Belarus",
      continent: "Europe",
      age: 22,
      language: "Ruby",
    },
    <IDeveloper>{
      firstName: "Jayden",
      lastName: "P.",
      country: "Jamaica",
      continent: "Americas",
      age: 18,
      language: "JavaScript",
    },
    <IDeveloper>{
      firstName: "Joao",
      lastName: "D.",
      country: "Portugal",
      continent: "Europe",
      age: 25,
      language: "JavaScript",
    },
  ];

  let result = ild(arr);
  expect(result).toBeTruthy();
});

test("case #7", () => {
  let arr = [
    <IDeveloper>{
      firstName: "Daniel",
      lastName: "J.",
      country: "Aruba",
      continent: "Americas",
      age: 42,
      language: "Python",
    },
    <IDeveloper>{
      firstName: "Kseniya",
      lastName: "T.",
      country: "Belarus",
      continent: "Europe",
      age: 22,
      language: "Ruby",
    },
    <IDeveloper>{
      firstName: "Joao",
      lastName: "D.",
      country: "Portugal",
      continent: "Europe",
      age: 25,
      language: "JavaScript",
    },
  ];

  let result = ild(arr);
  expect(result).toBeTruthy();
});
