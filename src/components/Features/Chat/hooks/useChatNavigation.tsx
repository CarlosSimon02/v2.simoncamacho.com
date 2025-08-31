// hooks/useChatNavigation.ts
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";

const useChatNavigation = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const navigateWithQuery = useCallback(
    (query: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (query.trim()) {
        params.set("query", query);
      } else {
        params.delete("query");
      }

      router.push(`?${params.toString()}`);
    },
    [searchParams, router]
  );

  const currentQuery = searchParams.get("query");
  const hasQuery = useMemo(() => {
    return !!currentQuery?.trim();
  }, [currentQuery]);

  return {
    navigateWithQuery,
    currentQuery,
    hasQuery,
    searchParams,
  };
};

export default useChatNavigation;
