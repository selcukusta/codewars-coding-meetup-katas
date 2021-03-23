import ac from "../src/katas/08";

import { IDeveloper } from "../src/interfaces/IDeveloper";

test("case #1", () => {
  let arr = [];
  let result = ac(arr);
  expect(result).toBeFalsy();
});

test("case #2", () => {
  let result = ac(undefined);
  expect(result).toBeFalsy();
});

test("case #3", () => {
  let result = ac(null);
  expect(result).toBeFalsy();
});

test("case #4", () => {
  let arr = [
    <IDeveloper>{
      firstName: "Fatima",
      lastName: "A.",
      country: "Algeria",
      continent: "Africa",
      age: 25,
      language: "JavaScript",
    },
    <IDeveloper>{
      firstName: "Agustín",
      lastName: "M.",
      country: "Chile",
      continent: "Americas",
      age: 37,
      language: "C",
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
      firstName: "Laia",
      lastName: "P.",
      country: "Andorra",
      continent: "Europe",
      age: 55,
      language: "Ruby",
    },
    <IDeveloper>{
      firstName: "Oliver",
      lastName: "Q.",
      country: "Australia",
      continent: "Oceania",
      age: 65,
      language: "PHP",
    },
  ];

  let result = ac(arr);
  expect(result).toBeTruthy();
});

test("case #5", () => {
  let arr = [
    <IDeveloper>{
      firstName: "Fatima",
      lastName: "A.",
      country: "Algeria",
      continent: "Africa",
      age: 25,
      language: "JavaScript",
    },
  ];

  let result = ac(arr);
  expect(result).toBeFalsy();
});

test("case #6", () => {
  let arr = [
    <IDeveloper>{
      firstName: "Mehdi",
      lastName: "H.",
      country: "Tunisia",
      continent: "Africa",
      age: 42,
      language: "Python",
    },
    <IDeveloper>{
      firstName: "Yusuf",
      lastName: "N.",
      country: "Turkey",
      continent: "Europe",
      age: 22,
      language: "Python",
    },
  ];

  let result = ac(arr);
  expect(result).toBeFalsy();
});

test("case #7", () => {
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
      continent: "Asia",
      age: 28,
      language: "Java",
    },
    <IDeveloper>{
      firstName: "Kseniya",
      lastName: "T.",
      country: "Belarus",
      continent: "Americas",
      age: 89,
      language: "JavaScript",
    },
    <IDeveloper>{
      firstName: "Luka",
      lastName: "J.",
      country: "Slovenia",
      continent: "Oceania",
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

  let result = ac(arr);
  expect(result).toBeTruthy();
});
