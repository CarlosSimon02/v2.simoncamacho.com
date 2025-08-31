// hooks/useChatNavigation.ts
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo } from "react";

type UseChatNavigationProps = {
  onQueryChange?: (newQuery?: string | null) => void;
};

const useChatNavigation = ({ onQueryChange }: UseChatNavigationProps = {}) => {
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

  useEffect(() => {
    onQueryChange?.(currentQuery);
  }, [currentQuery, onQueryChange]);

  return {
    navigateWithQuery,
    currentQuery,
    hasQuery,
    searchParams,
  };
};

export default useChatNavigation;
