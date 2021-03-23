import fs from "../src/katas/07";

import { IDeveloper } from "../src/interfaces/IDeveloper";

test("case #1", () => {
  let arr = [];
  let result = fs(arr);
  expect(result).toStrictEqual(null);
});

test("case #2", () => {
  let result = fs(undefined);
  expect(result).toStrictEqual(null);
});

test("case #3", () => {
  let result = fs(null);
  expect(result).toStrictEqual(null);
});

test("case #4", () => {
  let arr = [
    <IDeveloper>{
      firstName: "Gabriel",
      lastName: "X.",
      country: "Monaco",
      continent: "Europe",
      age: 49,
      language: "PHP",
    },
    <IDeveloper>{
      firstName: "Odval",
      lastName: "F.",
      country: "Mongolia",
      continent: "Asia",
      age: 38,
      language: "Python",
    },
    <IDeveloper>{
      firstName: "Emilija",
      lastName: "S.",
      country: "Lithuania",
      continent: "Europe",
      age: 19,
      language: "Python",
    },
    <IDeveloper>{
      firstName: "Sou",
      lastName: "B.",
      country: "Japan",
      continent: "Asia",
      age: 49,
      language: "PHP",
    },
  ];

  let expected = [
    <IDeveloper>{
      firstName: "Gabriel",
      lastName: "X.",
      country: "Monaco",
      continent: "Europe",
      age: 49,
      language: "PHP",
    },
    <IDeveloper>{
      firstName: "Sou",
      lastName: "B.",
      country: "Japan",
      continent: "Asia",
      age: 49,
      language: "PHP",
    },
  ];

  let result = fs(arr);
  expect(result).toStrictEqual(expected);
});

test("case #5", () => {
  let arr = [
    <IDeveloper>{
      firstName: "Gabriel",
      lastName: "X.",
      country: "Monaco",
      continent: "Europe",
      age: 49,
      language: "PHP",
    },
    <IDeveloper>{
      firstName: "Odval",
      lastName: "F.",
      country: "Mongolia",
      continent: "Asia",
      age: 38,
      language: "Python",
    },
    <IDeveloper>{
      firstName: "Emilija",
      lastName: "S.",
      country: "Lithuania",
      continent: "Europe",
      age: 19,
      language: "Python",
    },
  ];

  let expected = [
    <IDeveloper>{
      firstName: "Gabriel",
      lastName: "X.",
      country: "Monaco",
      continent: "Europe",
      age: 49,
      language: "PHP",
    },
  ];

  let result = fs(arr);
  expect(result).toStrictEqual(expected);
});

test("case #6", () => {
  let arr = [
    <IDeveloper>{
      firstName: "Alexander",
      lastName: "F.",
      country: "Russia",
      continent: "Europe",
      age: 89,
      language: "Java",
    },
    <IDeveloper>{
      firstName: "Fatima",
      lastName: "K.",
      country: "Saudi Arabia",
      continent: "Asia",
      age: 21,
      language: "Clojure",
    },
    <IDeveloper>{
      firstName: "Mark",
      lastName: "G.",
      country: "Scotland",
      continent: "Europe",
      age: 22,
      language: "JavaScript",
    },
    <IDeveloper>{
      firstName: "Nikola",
      lastName: "H.",
      country: "Serbia",
      continent: "Europe",
      age: 29,
      language: "Python",
    },
    <IDeveloper>{
      firstName: "Jakub",
      lastName: "I.",
      country: "Slovakia",
      continent: "Europe",
      age: 28,
      language: "Java",
    },
    <IDeveloper>{
      firstName: "Kseniya",
      lastName: "T.",
      country: "Belarus",
      continent: "Europe",
      age: 89,
      language: "JavaScript",
    },
    <IDeveloper>{
      firstName: "Luka",
      lastName: "J.",
      country: "Slovenia",
      continent: "Europe",
      age: 29,
      language: "Clojure",
    },
    <IDeveloper>{
      firstName: "Mariam",
      lastName: "B.",
      country: "Egypt",
      continent: "Africa",
      age: 89,
      language: "Python",
    },
  ];

  let expected = [
    <IDeveloper>{
      firstName: "Alexander",
      lastName: "F.",
      country: "Russia",
      continent: "Europe",
      age: 89,
      language: "Java",
    },
    <IDeveloper>{
      firstName: "Kseniya",
      lastName: "T.",
      country: "Belarus",
      continent: "Europe",
      age: 89,
      language: "JavaScript",
    },
    <IDeveloper>{
      firstName: "Mariam",
      lastName: "B.",
      country: "Egypt",
      continent: "Africa",
      age: 89,
      language: "Python",
    },
  ];

  let result = fs(arr);
  expect(result).toStrictEqual(expected);
});
