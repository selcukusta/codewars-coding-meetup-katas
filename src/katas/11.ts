import { IDeveloper } from "../interfaces/IDeveloper";

function getAverageAge(list: IDeveloper[]): number {
  if (!list || list.length === 0) {
    return -1;
  }

  return Math.round(
    list.reduce((total, item) => {
      total += item.age;
      return total;
    }, 0) / list.length
  );
}

export default getAverageAge;
