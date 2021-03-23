import { IDeveloper } from "../interfaces/IDeveloper";

function orderFood(list: IDeveloper[]): IDeveloper[] {
  if (!list || list.length === 0) {
    return null;
  }

  return list.filter((v) => {
    return (
      Array.from(v.firstName).reduce(
        (total, c) => (total += c.charCodeAt(0)),
        0
      ) %
        2 ===
      1
    );
  });
}

export default orderFood;
