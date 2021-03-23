import { IGithubDeveloper } from "../interfaces/IGithubDeveloper";

function findAdmin(list: IGithubDeveloper[], lang: string): IGithubDeveloper[] {
  if (!list || list.length === 0) {
    return [];
  }

  return list.filter(
    (dev) => dev.language === lang && dev.githubAdmin === "yes"
  );
}

export default findAdmin;
