import sbl from "../src/katas/17";

import { IDeveloper } from "../src/interfaces/IDeveloper";

test("case #1", () => {
  let arr = [];
  let result = sbl(arr);
  expect(result).toStrictEqual([]);
});

test("case #2", () => {
  let result = sbl(undefined);
  expect(result).toStrictEqual([]);
});

test("case #3", () => {
  let result = sbl(null);
  expect(result).toStrictEqual([]);
});

test("case #4", () => {
  let arr = [
    <IDeveloper>{
      firstName: "Nikau",
      lastName: "R.",
      country: "New Zealand",
      continent: "Oceania",
      age: 39,
      language: "Ruby",
    },
    <IDeveloper>{
      firstName: "Precious",
      lastName: "G.",
      country: "South Africa",
      continent: "Africa",
      age: 22,
      language: "JavaScript",
    },
    <IDeveloper>{
      firstName: "Maria",
      lastName: "S.",
      country: "Peru",
      continent: "Americas",
      age: 30,
      language: "C",
    },
    <IDeveloper>{
      firstName: "Agustin",
      lastName: "V.",
      country: "Uruguay",
      continent: "Americas",
      age: 19,
      language: "JavaScript",
    },
  ];

  let result = sbl(arr);
  expect(result).toStrictEqual([
    <IDeveloper>{
      firstName: "Maria",
      lastName: "S.",
      country: "Peru",
      continent: "Americas",
      age: 30,
      language: "C",
    },
    <IDeveloper>{
      firstName: "Agustin",
      lastName: "V.",
      country: "Uruguay",
      continent: "Americas",
      age: 19,
      language: "JavaScript",
    },
    <IDeveloper>{
      firstName: "Precious",
      lastName: "G.",
      country: "South Africa",
      continent: "Africa",
      age: 22,
      language: "JavaScript",
    },
    <IDeveloper>{
      firstName: "Nikau",
      lastName: "R.",
      country: "New Zealand",
      continent: "Oceania",
      age: 39,
      language: "Ruby",
    },
  ]);
});

test("case #5", () => {
  let arr = [
    <IDeveloper>{
      firstName: "Nikau",
      lastName: "R.",
      country: "New Zealand",
      continent: "Oceania",
      age: 39,
      language: "Ruby",
    },
    <IDeveloper>{
      firstName: "Maria",
      lastName: "S.",
      country: "Peru",
      continent: "Americas",
      age: 30,
      language: "C",
    },
    <IDeveloper>{
      firstName: "Agustin",
      lastName: "V.",
      country: "Uruguay",
      continent: "Americas",
      age: 19,
      language: "JavaScript",
    },
  ];

  let result = sbl(arr);
  expect(result).toStrictEqual([
    <IDeveloper>{
      firstName: "Maria",
      lastName: "S.",
      country: "Peru",
      continent: "Americas",
      age: 30,
      language: "C",
    },
    <IDeveloper>{
      firstName: "Agustin",
      lastName: "V.",
      country: "Uruguay",
      continent: "Americas",
      age: 19,
      language: "JavaScript",
    },
    <IDeveloper>{
      firstName: "Nikau",
      lastName: "R.",
      country: "New Zealand",
      continent: "Oceania",
      age: 39,
      language: "Ruby",
    },
  ]);
});
