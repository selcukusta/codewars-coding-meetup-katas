import of from "../src/katas/14";

import { IHungryDeveloper } from "../src/interfaces/IHungryDeveloper";

test("case #1", () => {
  let arr = [];
  let result = of(arr);
  expect(result).toStrictEqual(null);
});

test("case #2", () => {
  let result = of(undefined);
  expect(result).toStrictEqual(null);
});

test("case #3", () => {
  let result = of(null);
  expect(result).toStrictEqual(null);
});

test("case #4", () => {
  let arr = [
    <IHungryDeveloper>{
      firstName: "Noah",
      lastName: "M.",
      country: "Switzerland",
      continent: "Europe",
      age: 19,
      language: "C",
      meal: "vegetarian",
    },
    <IHungryDeveloper>{
      firstName: "Anna",
      lastName: "R.",
      country: "Liechtenstein",
      continent: "Europe",
      age: 52,
      language: "JavaScript",
      meal: "standard",
    },
    <IHungryDeveloper>{
      firstName: "Ramona",
      lastName: "R.",
      country: "Paraguay",
      continent: "Americas",
      age: 29,
      language: "Ruby",
      meal: "vegan",
    },
    <IHungryDeveloper>{
      firstName: "George",
      lastName: "B.",
      country: "England",
      continent: "Europe",
      age: 81,
      language: "C",
      meal: "vegetarian",
    },
  ];

  let result = of(arr);
  expect(result).toStrictEqual({ vegetarian: 2, standard: 1, vegan: 1 });
});
