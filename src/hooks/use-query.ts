import { NextRouter } from "next/router";

export const useQuery = (router: NextRouter): { [param: string]: string } =>
  Object.entries(router.query).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: typeof value === "string" ? value : "",
    }),
    {}
  );
