import fa from "../src/katas/12";

import { IGithubDeveloper } from "../src/interfaces/IGithubDeveloper";

test("case #1", () => {
  let arr = [];
  let result = fa(arr, "");
  expect(result).toStrictEqual([]);
});

test("case #2", () => {
  let result = fa(undefined, "Python");
  expect(result).toStrictEqual([]);
});

test("case #3", () => {
  let result = fa(null, "JavaScript");
  expect(result).toStrictEqual([]);
});

test("case #4", () => {
  let arr = [
    <IGithubDeveloper>{
      firstName: "Harry",
      lastName: "K.",
      country: "Brazil",
      continent: "Americas",
      age: 22,
      language: "JavaScript",
      githubAdmin: "yes",
    },
    <IGithubDeveloper>{
      firstName: "Kseniya",
      lastName: "T.",
      country: "Belarus",
      continent: "Europe",
      age: 49,
      language: "Ruby",
      githubAdmin: "no",
    },
    <IGithubDeveloper>{
      firstName: "Jing",
      lastName: "X.",
      country: "China",
      continent: "Asia",
      age: 34,
      language: "JavaScript",
      githubAdmin: "yes",
    },
    <IGithubDeveloper>{
      firstName: "Piotr",
      lastName: "B.",
      country: "Poland",
      continent: "Europe",
      age: 128,
      language: "JavaScript",
      githubAdmin: "no",
    },
  ];

  let result = fa(arr, "JavaScript");
  expect(result).toStrictEqual([
    <IGithubDeveloper>{
      firstName: "Harry",
      lastName: "K.",
      country: "Brazil",
      continent: "Americas",
      age: 22,
      language: "JavaScript",
      githubAdmin: "yes",
    },
    <IGithubDeveloper>{
      firstName: "Jing",
      lastName: "X.",
      country: "China",
      continent: "Asia",
      age: 34,
      language: "JavaScript",
      githubAdmin: "yes",
    },
  ]);
});

test("case #5", () => {
  let arr = [
    <IGithubDeveloper>{
      firstName: "Harry",
      lastName: "K.",
      country: "Brazil",
      continent: "Americas",
      age: 22,
      language: "JavaScript",
      githubAdmin: "yes",
    },
    <IGithubDeveloper>{
      firstName: "Kseniya",
      lastName: "T.",
      country: "Belarus",
      continent: "Europe",
      age: 49,
      language: "Ruby",
      githubAdmin: "no",
    },
    <IGithubDeveloper>{
      firstName: "Jing",
      lastName: "X.",
      country: "China",
      continent: "Asia",
      age: 34,
      language: "JavaScript",
      githubAdmin: "yes",
    },
    <IGithubDeveloper>{
      firstName: "Piotr",
      lastName: "B.",
      country: "Poland",
      continent: "Europe",
      age: 128,
      language: "JavaScript",
      githubAdmin: "no",
    },
  ];

  let result = fa(arr, "Python");
  expect(result).toStrictEqual([]);
});

test("case #6", () => {
  let arr = [
    <IGithubDeveloper>{
      firstName: "Harry",
      lastName: "K.",
      country: "Brazil",
      continent: "Americas",
      age: 22,
      language: "JavaScript",
      githubAdmin: "yes",
    },
    <IGithubDeveloper>{
      firstName: "Kseniya",
      lastName: "T.",
      country: "Belarus",
      continent: "Europe",
      age: 49,
      language: "Ruby",
      githubAdmin: "no",
    },
    <IGithubDeveloper>{
      firstName: "Jing",
      lastName: "X.",
      country: "China",
      continent: "Asia",
      age: 34,
      language: "JavaScript",
      githubAdmin: "yes",
    },
    <IGithubDeveloper>{
      firstName: "Piotr",
      lastName: "B.",
      country: "Poland",
      continent: "Europe",
      age: 128,
      language: "JavaScript",
      githubAdmin: "no",
    },
  ];

  let result = fa(arr, "Ruby");
  expect(result).toStrictEqual([]);
});
