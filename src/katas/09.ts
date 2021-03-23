import { IDeveloper } from "../interfaces/IDeveloper";

function isAgeDiverse(list: IDeveloper[]): boolean {
  if (!list || list.length === 0) {
    return false;
  }

  return [
    { min: 0, max: 19 },
    { min: 20, max: 29 },
    { min: 30, max: 39 },
    { min: 40, max: 49 },
    { min: 50, max: 59 },
    { min: 60, max: 69 },
    { min: 70, max: 79 },
    { min: 80, max: 89 },
    { min: 90, max: 99 },
    { min: 100, max: 199 },
  ].every((r) => list.some((y) => y.age >= r.min && y.age <= r.max));
}

export default isAgeDiverse;
