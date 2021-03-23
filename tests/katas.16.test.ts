import afmd from "../src/katas/16";

import { ICuriousDeveloper } from "../src/interfaces/ICuriousDeveloper";

test("case #1", () => {
  let arr = [];
  let result = afmd(arr);
  expect(result).toStrictEqual([]);
});

test("case #2", () => {
  let result = afmd(undefined);
  expect(result).toStrictEqual([]);
});

test("case #3", () => {
  let result = afmd(null);
  expect(result).toStrictEqual([]);
});

test("case #4", () => {
  let arr = [
    <ICuriousDeveloper>{
      firstName: null,
      lastName: "I.",
      country: "Argentina",
      continent: "Americas",
      age: 35,
      language: "Java",
    },
    <ICuriousDeveloper>{
      firstName: "Lukas",
      lastName: "X.",
      country: "Croatia",
      continent: "Europe",
      age: 35,
      language: null,
    },
    <ICuriousDeveloper>{
      firstName: "Madison",
      lastName: "U.",
      country: "United States",
      continent: "Americas",
      age: 32,
      language: "Ruby",
    },
  ];

  let result = afmd(arr);
  expect(result).toStrictEqual([
    <ICuriousDeveloper>{
      firstName: null,
      lastName: "I.",
      country: "Argentina",
      continent: "Americas",
      age: 35,
      language: "Java",
      question: "Hi, could you please provide your firstName.",
    },
    <ICuriousDeveloper>{
      firstName: "Lukas",
      lastName: "X.",
      country: "Croatia",
      continent: "Europe",
      age: 35,
      language: null,
      question: "Hi, could you please provide your language.",
    },
  ]);
});

test("case #5", () => {
  let arr = [
    <ICuriousDeveloper>{
      firstName: "Sofia",
      lastName: "I.",
      country: "Argentina",
      continent: "Americas",
      age: 35,
      language: "Java",
    },
    <ICuriousDeveloper>{
      firstName: "Lukas",
      lastName: "X.",
      country: "Croatia",
      continent: "Europe",
      age: 35,
      language: "Python",
    },
    <ICuriousDeveloper>{
      firstName: "Madison",
      lastName: "U.",
      country: "United States",
      continent: "Americas",
      age: 32,
      language: "Ruby",
    },
  ];

  let result = afmd(arr);
  expect(result).toStrictEqual([]);
});
