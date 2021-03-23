import { ICuriousDeveloper } from "../interfaces/ICuriousDeveloper";

function askForMissingDetails(list: ICuriousDeveloper[]): ICuriousDeveloper[] {
  if (!list || list.length === 0) {
    return [];
  }

  return list.reduce((response, item) => {
    const missingKey = Object.entries(item).find((v) => v[1] === null);
    if (missingKey !== undefined) {
      response.push({
        ...item,
        question: `Hi, could you please provide your ${missingKey[0]}.`,
      });
    }
    return response;
  }, []);
}

export default askForMissingDetails;
