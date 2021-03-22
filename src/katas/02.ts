import { IDeveloper } from "../interfaces/IDeveloper";

function greetDevelopers(list: IDeveloper[]): IDeveloper[] {
  return list.map((x) => {
    return {
      ...x,
      greeting: `Hi ${x.firstName}, what do you like the most about ${x.language}?`,
    };
  });
}

export default greetDevelopers;
