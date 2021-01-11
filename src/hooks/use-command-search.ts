import { useRouter } from "next/router";
import { ParsedUrlQueryInput } from "querystring";
import { useEffect } from "react";
import { useDebouncedValue } from "./use-debounced-value";
import { useQuery } from "./use-query";

export const useCommandSearch = (
  additionalQuery: ParsedUrlQueryInput = {}
): [string, string, (updatedInput: string) => void] => {
  const router = useRouter();
  const { search: searchQuery = "" } = useQuery(router);
  const [search, input, setInput] = useDebouncedValue(searchQuery, 300);

  useEffect(() => {
    setInput(searchQuery);
  }, [router.isReady]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!router.isReady) return;

    router.replace(
      {
        pathname: router.pathname,
        query: search !== "" ? { search, ...additionalQuery } : additionalQuery,
      },
      undefined,
      { shallow: true }
    );
  }, [search]); // eslint-disable-line react-hooks/exhaustive-deps

  return [search, input, setInput];
};
