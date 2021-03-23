import fon from "../src/katas/15";

import { IDeveloper } from "../src/interfaces/IDeveloper";

test("case #1", () => {
  let arr = [];
  let result = fon(arr);
  expect(result).toStrictEqual(null);
});

test("case #2", () => {
  let result = fon(undefined);
  expect(result).toStrictEqual(null);
});

test("case #3", () => {
  let result = fon(null);
  expect(result).toStrictEqual(null);
});

test("case #4", () => {
  let arr = [
    <IDeveloper>{
      firstName: "Aba",
      lastName: "N.",
      country: "Ghana",
      continent: "Africa",
      age: 21,
      language: "Python",
    },
    <IDeveloper>{
      firstName: "Abb",
      lastName: "O.",
      country: "Israel",
      continent: "Asia",
      age: 39,
      language: "Java",
    },
  ];

  let result = fon(arr);
  expect(result).toStrictEqual([
    <IDeveloper>{
      firstName: "Abb",
      lastName: "O.",
      country: "Israel",
      continent: "Asia",
      age: 39,
      language: "Java",
    },
  ]);
});

test("case #5", () => {
  let arr = [
    <IDeveloper>{
      firstName: "Sofia",
      lastName: "P.",
      country: "Italy",
      continent: "Europe",
      age: 41,
      language: "Clojure",
    },
    <IDeveloper>{
      firstName: "Kseniya",
      lastName: "T.",
      country: "Belarus",
      continent: "Europe",
      age: 29,
      language: "JavaScript",
    },
    <IDeveloper>{
      firstName: "Jing",
      lastName: "X.",
      country: "China",
      continent: "Asia",
      age: 39,
      language: "Ruby",
    },
    <IDeveloper>{
      firstName: "Noa",
      lastName: "A.",
      country: "Israel",
      continent: "Asia",
      age: 40,
      language: "Ruby",
    },
    <IDeveloper>{
      firstName: "Andrei",
      lastName: "E.",
      country: "Romania",
      continent: "Europe",
      age: 59,
      language: "C",
    },
    <IDeveloper>{
      firstName: "Maria",
      lastName: "S.",
      country: "Peru",
      continent: "Americas",
      age: 60,
      language: "C",
    },
    <IDeveloper>{
      firstName: "Lukas",
      lastName: "X.",
      country: "Croatia",
      continent: "Europe",
      age: 75,
      language: "Python",
    },
    <IDeveloper>{
      firstName: "Chloe",
      lastName: "K.",
      country: "Guernsey",
      continent: "Europe",
      age: 88,
      language: "Ruby",
    },
    <IDeveloper>{
      firstName: "Viktoria",
      lastName: "W.",
      country: "Bulgaria",
      continent: "Europe",
      age: 98,
      language: "PHP",
    },
    <IDeveloper>{
      firstName: "Piotr",
      lastName: "B.",
      country: "Poland",
      continent: "Europe",
      age: 128,
      language: "JavaScript",
    },
  ];

  let result = fon(arr);
  expect(result).toStrictEqual([
    <IDeveloper>{
      firstName: "Andrei",
      lastName: "E.",
      country: "Romania",
      continent: "Europe",
      age: 59,
      language: "C",
    },
    <IDeveloper>{
      firstName: "Chloe",
      lastName: "K.",
      country: "Guernsey",
      continent: "Europe",
      age: 88,
      language: "Ruby",
    },
    <IDeveloper>{
      firstName: "Viktoria",
      lastName: "W.",
      country: "Bulgaria",
      continent: "Europe",
      age: 98,
      language: "PHP",
    },
  ]);
});
