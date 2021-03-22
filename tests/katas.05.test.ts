import cl from "../src/katas/05";

import { IDeveloper } from "../src/interfaces/IDeveloper";

test("case #1", () => {
  let arr = [];
  let result = cl(arr);
  expect(result).toStrictEqual(null);
});

test("case #2", () => {
  let result = cl(undefined);
  expect(result).toStrictEqual(null);
});

test("case #3", () => {
  let result = cl(null);
  expect(result).toStrictEqual(null);
});

test("case #4", () => {
  let arr = [
    <IDeveloper>{
      firstName: "Noah",
      lastName: "M.",
      country: "Switzerland",
      continent: "Europe",
      age: 19,
      language: "C",
    },
    <IDeveloper>{
      firstName: "Anna",
      lastName: "R.",
      country: "Liechtenstein",
      continent: "Europe",
      age: 52,
      language: "JavaScript",
    },
    <IDeveloper>{
      firstName: "Ramon",
      lastName: "R.",
      country: "Paraguay",
      continent: "Americas",
      age: 29,
      language: "Ruby",
    },
    <IDeveloper>{
      firstName: "George",
      lastName: "B.",
      country: "England",
      continent: "Europe",
      age: 81,
      language: "C",
    },
  ];

  let result = cl(arr);
  expect(result).toStrictEqual({ C: 2, JavaScript: 1, Ruby: 1 });
});

test("case #5", () => {
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
      firstName: "Luka",
      lastName: "J.",
      country: "Slovenia",
      continent: "Europe",
      age: 29,
      language: "Clojure",
    },
  ];

  let result = cl(arr);
  expect(result).toStrictEqual({
    Java: 2,
    Clojure: 2,
    JavaScript: 1,
    Python: 1,
  });
});
