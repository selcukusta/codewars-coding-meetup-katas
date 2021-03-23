import { IDeveloper } from "../interfaces/IDeveloper";

function isRubyComing(list: IDeveloper[], lang = "Ruby"): boolean {
  return list.findIndex((x) => x.language === lang) !== -1;
}

export default isRubyComing;
