import cd from "../src/katas/01";

import { IDeveloper } from "../src/interfaces/IDeveloper";

test("can have zero", () => {
  let arr = [
    <IDeveloper>{
      firstName: "Maia",
      lastName: "S.",
      country: "Tahiti",
      continent: "Oceania",
      age: 28,
      language: "JavaScript",
    },
  ];

  let result = cd(arr);
  expect(result).toBe(0);
});

test("can have one with parameters", () => {
  let arr = [
    <IDeveloper>{
      firstName: "Maia",
      lastName: "S.",
      country: "Tahiti",
      continent: "Oceania",
      age: 28,
      language: "JavaScript",
    },
  ];

  let result = cd(arr, "JavaScript", "Oceania");
  expect(result).toBe(1);
});

test("can have one item", () => {
  let arr = [
    <IDeveloper>{
      firstName: "Noah",
      lastName: "M.",
      country: "Switzerland",
      continent: "Europe",
      age: 19,
      language: "JavaScript",
    },
    <IDeveloper>{
      firstName: "Maia",
      lastName: "S.",
      country: "Tahiti",
      continent: "Oceania",
      age: 28,
      language: "JavaScript",
    },
    <IDeveloper>{
      firstName: "Shufen",
      lastName: "L.",
      country: "Taiwan",
      continent: "Asia",
      age: 35,
      language: "HTML",
    },
    <IDeveloper>{
      firstName: "Sumayah",
      lastName: "M.",
      country: "Tajikistan",
      continent: "Asia",
      age: 30,
      language: "CSS",
    },
  ];

  let result = cd(arr);
  expect(result).toBe(1);
});
