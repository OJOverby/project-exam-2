import { useState, useEffect } from "react";

export function useApi(baseUrl, limit = 100) {
  const [data, setData] = useState({ data: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!baseUrl) return;

    let ignore = false;

    async function getAllData() {
      try {
        setIsLoading(true);
        setIsError(false);

        let page = 1;
        let allEntries = [];
        let hasMore = true;

        while (hasMore) {
          const url = new URL(baseUrl);

          url.searchParams.set("limit", limit);
          url.searchParams.set("page", page);

          const response = await fetch(url);

          if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
          }

          const json = await response.json();
          const entries = json?.data ?? [];

          allEntries = [...allEntries, ...entries];

          hasMore = entries.length === limit;
          page += 1;
        }

        if (!ignore) {
          setData({ data: allEntries });
        }
      } catch (error) {
        console.error(error);

        if (!ignore) {
          setIsError(true);
        }
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    }

    getAllData();

    return () => {
      ignore = true;
    };
  }, [baseUrl, limit]);

  return { data, isLoading, isError };
}