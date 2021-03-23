import iad from "../src/katas/09";

import { IDeveloper } from "../src/interfaces/IDeveloper";

test("case #1", () => {
  let arr = [];
  let result = iad(arr);
  expect(result).toBeFalsy();
});

test("case #2", () => {
  let result = iad(undefined);
  expect(result).toBeFalsy();
});

test("case #3", () => {
  let result = iad(null);
  expect(result).toBeFalsy();
});

test("case #4", () => {
  let arr = [
    <IDeveloper>{
      firstName: "Harry",
      lastName: "K.",
      country: "Brazil",
      continent: "Americas",
      age: 19,
      language: "Python",
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

  let result = iad(arr);
  expect(result).toBeTruthy();
});

test("case #5", () => {
  let arr = [
    <IDeveloper>{
      firstName: "Kseniya",
      lastName: "T.",
      country: "Belarus",
      continent: "Europe",
      age: 29,
      language: "Ruby",
    },
    <IDeveloper>{
      firstName: "Amar",
      lastName: "V.",
      country: "Bosnia and Herzegovina",
      continent: "Europe",
      age: 32,
      language: "Ruby",
    },
  ];

  let result = iad(arr);
  expect(result).toBeFalsy();
});

test("case #6", () => {
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
      firstName: "Jayden",
      lastName: "P.",
      country: "Jamaica",
      continent: "Americas",
      age: 42,
      language: "JavaScript",
    },
    <IDeveloper>{
      firstName: "Sou",
      lastName: "B.",
      country: "Japan",
      continent: "Asia",
      age: 43,
      language: "Python",
    },
    <IDeveloper>{
      firstName: "Rimas",
      lastName: "C.",
      country: "Jordan",
      continent: "Asia",
      age: 44,
      language: "Java",
    },
  ];

  let result = iad(arr);
  expect(result).toBeFalsy();
});
