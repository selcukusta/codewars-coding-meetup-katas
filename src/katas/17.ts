import { IDeveloper } from "../interfaces/IDeveloper";

function sortByLanguage(list: IDeveloper[]): IDeveloper[] {
  if (!list || list.length === 0) {
    return [];
  }
  return list.sort((a, b) =>
    a.language < b.language
      ? -1
      : a.language > b.language
      ? 1
      : a.firstName < b.firstName
      ? -1
      : a.firstName > b.firstName
      ? 1
      : 0
  );
}

export default sortByLanguage;
