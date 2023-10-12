import { useEffect, useState } from "react";
import { ItemType } from "../types/item";

export const useSortItems = (items: ItemType[], deviceType: string) => {
  const [sortedItems, setSortedItems] = useState<ItemType[]>([]);

  useEffect(() => {
    const newSortedItems = [...items].sort((a, b) => {
      if (a.device === deviceType && b.device !== deviceType) {
        return -1;
      }
      if (a.device !== deviceType && b.device === deviceType) {
        return 1;
      }
      return 0;
    });
    setSortedItems(newSortedItems);
  }, [items, deviceType]);

  return sortedItems;
};
