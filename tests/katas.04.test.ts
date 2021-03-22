import gfp from "../src/katas/04";

import { IDeveloper } from "../src/interfaces/IDeveloper";

test("case #1", () => {
  let arr = [
    <IDeveloper>{
      firstName: "Mark",
      lastName: "G.",
      country: "Scotland",
      continent: "Europe",
      age: 22,
      language: "JavaScript",
    },
    <IDeveloper>{
      firstName: "Victoria",
      lastName: "T.",
      country: "Puerto Rico",
      continent: "Americas",
      age: 30,
      language: "Python",
    },
    <IDeveloper>{
      firstName: "Emma",
      lastName: "B.",
      country: "Norway",
      continent: "Europe",
      age: 19,
      language: "Clojure",
    },
  ];

  let result = gfp(arr);
  expect(result).toEqual<string>("Victoria, Puerto Rico");
});

test("case #2", () => {
  let arr = [
    <IDeveloper>{
      firstName: "Kseniya",
      lastName: "T.",
      country: "Belarus",
      continent: "Europe",
      age: 29,
      language: "JavaScript",
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

  let result = gfp(arr);
  expect(result).toEqual<string>("There will be no Python developers");
});

test("case #3", () => {
  let arr = [
    <IDeveloper>{
      firstName: "Selçuk",
      lastName: "U.",
      country: "Turkey",
      continent: "Europe",
      age: 33,
      language: "Python",
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

  let result = gfp(arr);
  expect(result).toEqual<string>("Selçuk, Turkey");
});
