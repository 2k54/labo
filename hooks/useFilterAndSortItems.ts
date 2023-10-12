import { useEffect, useState } from "react";
import { ItemType } from "../types/item";

export const useFilterAndSortItems = (
  items: ItemType[],
  deviceType: string
) => {
  const [processedItems, setProcessedItems] = useState<ItemType[]>([]);

  useEffect(() => {
    let newProcessedItems = [...items];
    if (deviceType) {
      newProcessedItems = newProcessedItems.filter(
        (item) => item.device === deviceType
      );
    }
    newProcessedItems.sort((a, b) => a.name.localeCompare(b.name));
    setProcessedItems(newProcessedItems);
  }, [items, deviceType]);

  return processedItems;
};
