"use server";

import { listHanuriesByYear, PAGE_SIZE } from "../queries";

export async function loadMoreHanuries(year: string, cursor: string) {
  const items = await listHanuriesByYear(year, cursor);

  return {
    items,
    hasMore: items.length === PAGE_SIZE,
  };
}
