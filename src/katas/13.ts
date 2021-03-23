import { IDeveloper } from "../interfaces/IDeveloper";

function isLanguageDiverse(list: IDeveloper[]): boolean {
  if (!list || list.length === 0) {
    return false;
  }

  const langSum = list.reduce((total, developer) => {
      const lang = Object.keys(developer).find((x) => x === "language"),
        key = developer[lang];
      total[key] = total[key] || 0;
      total[key]++;
      return total;
    }, {}),
    arr = Object.values(langSum);
  return arr.filter((x) => arr.find((y) => x > <number>y * 2)).length <= 0;
}

export default isLanguageDiverse;
