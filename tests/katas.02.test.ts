import gd from "../src/katas/02";

import { IDeveloper } from "../src/interfaces/IDeveloper";

test("can have greeting message", () => {
  let arr = [
    {
      firstName: "Sofia",
      lastName: "I.",
      country: "Argentina",
      continent: "Americas",
      age: 35,
      language: "Java",
    } as IDeveloper,
  ];

  let result = gd(arr);
  expect(result[0]).toEqual(
    expect.objectContaining({
      greeting: "Hi Sofia, what do you like the most about Java?",
    })
  );
});
