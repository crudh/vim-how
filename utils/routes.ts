export const queryParamAsString = (
  param: string | string[] | undefined
): string => (typeof param === "string" ? param : "");
