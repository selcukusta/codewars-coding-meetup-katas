import { IDeveloper } from "../interfaces/IDeveloper";

function allContinents(list: IDeveloper[]): boolean {
  if (!list || list.length === 0) {
    return false;
  }

  return ["Africa", "Americas", "Asia", "Europe", "Oceania"].every((i) =>
    list.some((y) => y.continent === i)
  );
}

export default allContinents;
