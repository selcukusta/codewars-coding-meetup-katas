import { IDeveloper } from "../interfaces/IDeveloper";

function addUsername(list: IDeveloper[], year?: number): IDeveloper[] {
  return list.map((x) => {
    const today = new Date(),
      birthDate = (year || today.getFullYear()) - x.age;
    return {
      ...x,
      username: `${x.firstName.toLowerCase()}${x.lastName
        .substr(0, x.lastName.length - 1)
        .toLowerCase()}${birthDate}`,
    };
  });
}

export default addUsername;
