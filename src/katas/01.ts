import { IDeveloper } from "../interfaces/IDeveloper";

function countDevelopers(
  list: IDeveloper[],
  lang = "JavaScript",
  continent = "Europe"
): number {
  return list.filter((i) => i.language === lang && i.continent === continent)
    .length;
}

export default countDevelopers;
