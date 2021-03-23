import { IDeveloper } from "../interfaces/IDeveloper";

function getFirstPython(list: IDeveloper[], lang = "Python"): string {
  const idx = list.findIndex((x) => x.language === lang);
  if (idx === -1) {
    return `There will be no ${lang} developers`;
  }
  const item = list[idx];
  return `${item.firstName}, ${item.country}`;
}

export default getFirstPython;
