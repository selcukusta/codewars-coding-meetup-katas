import { IDeveloper } from "../interfaces/IDeveloper";

function countLanguages(list: IDeveloper[]): { [k: string]: string } {
  if (!list || list.length == 0) {
    return null;
  }

  return list.reduce((total, developer) => {
    const lang = Object.keys(developer).find((x) => x === "language"),
      key = developer[lang];
    total[key] = total[key] || 0;
    total[key]++;
    return total;
  }, {});
}

export default countLanguages;
