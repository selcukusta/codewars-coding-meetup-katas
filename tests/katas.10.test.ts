import au from "../src/katas/10";

import { IDeveloper } from "../src/interfaces/IDeveloper";

test("case #1", () => {
  let arr = [
    <IDeveloper>{
      firstName: "Emily",
      lastName: "N.",
      country: "Ireland",
      continent: "Europe",
      age: 30,
      language: "Ruby",
    },
  ];

  let result = au(arr, 2020);
  expect(result[0]).toEqual(
    expect.objectContaining({
      username: "emilyn1990",
    })
  );
});

test("case #2", () => {
  let arr = [
    <IDeveloper>{
      firstName: "Nor",
      lastName: "E.",
      country: "Malaysia",
      continent: "Asia",
      age: 20,
      language: "Clojure",
    },
  ];

  let result = au(arr, 2020);
  expect(result[0]).toEqual(
    expect.objectContaining({
      username: "nore2000",
    })
  );
});

test("case #3", () => {
  let arr = [
    <IDeveloper>{
      firstName: "Kseniya",
      lastName: "T.",
      country: "Belarus",
      continent: "Europe",
      age: 29,
      language: "Ruby",
    },
  ];

  let result = au(arr, 2029);
  expect(result[0]).toEqual(
    expect.objectContaining({
      username: "kseniyat2000",
    })
  );
});

test("case #4", () => {
  let arr = [
    <IDeveloper>{
      firstName: "Amar",
      lastName: "V.",
      country: "Bosnia and Herzegovina",
      continent: "Europe",
      age: 32,
      language: "Ruby",
    },
  ];

  let result = au(arr, 2029);
  expect(result[0]).toEqual(
    expect.objectContaining({
      username: "amarv1997",
    })
  );
});

test("case #5", () => {
  let arr = [
    <IDeveloper>{
      firstName: "Selcuk",
      lastName: "U.",
      country: "Turkey",
      continent: "Europe",
      age: 34,
      language: "CSharp",
    },
  ];

  let result = au(arr);
  expect(result[0]).toEqual(
    expect.objectContaining({
      username: "selcuku1987",
    })
  );
});
