import gaa from "../src/katas/11";

import { IDeveloper } from "../src/interfaces/IDeveloper";

test("case #1", () => {
  let arr = [];
  let result = gaa(arr);
  expect(result).toEqual(-1);
});

test("case #2", () => {
  let result = gaa(undefined);
  expect(result).toEqual(-1);
});

test("case #3", () => {
  let result = gaa(null);
  expect(result).toEqual(-1);
});

test("case #4", () => {
  let arr = [
    <IDeveloper>{
      firstName: "Maria",
      lastName: "Y.",
      country: "Cyprus",
      continent: "Europe",
      age: 30,
      language: "Java",
    },
    <IDeveloper>{
      firstName: "Victoria",
      lastName: "T.",
      country: "Puerto Rico",
      continent: "Americas",
      age: 70,
      language: "Python",
    },
  ];

  let result = gaa(arr);
  expect(result).toEqual(50);
});

test("case #5", () => {
  let arr = [
    <IDeveloper>{
      firstName: "Noa",
      lastName: "A.",
      country: "Israel",
      continent: "Asia",
      age: 20,
      language: "Ruby",
    },
    <IDeveloper>{
      firstName: "Andrei",
      lastName: "E.",
      country: "Romania",
      continent: "Europe",
      age: 21,
      language: "C",
    },
  ];

  let result = gaa(arr);
  expect(result).toEqual(21);
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

  let result = gaa(arr);
  // 657/10 => 65,7 => 66
  expect(result).toEqual(66);
});
