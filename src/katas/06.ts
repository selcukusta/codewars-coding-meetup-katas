import { IDeveloper } from "../interfaces/IDeveloper";

function isSameLanguage(list: IDeveloper[]): boolean {
  if (!list || list.length === 0) {
    return false;
  }
  return new Set(list.map((item) => item.language)).size === 1;
}

export default isSameLanguage;
