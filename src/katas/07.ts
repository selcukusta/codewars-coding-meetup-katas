import { IDeveloper } from "../interfaces/IDeveloper";

function findSenior(list: IDeveloper[]): IDeveloper[] {
  if (!list || list.length === 0) {
    return null;
  }

  const max = Math.max(...list.map(({ age }) => age));
  return list.filter(({ age }) => age === max);
}

export default findSenior;
