import { useEffect, useState } from "react";
import { ItemType } from "../types/item";

export const useFilterItemsByDevice = (
  items: ItemType[],
  deviceType: string
) => {
  const [filteredItems, setFilteredItems] = useState<ItemType[]>([]);

  useEffect(() => {
    const newFilteredItems = items.filter((item) => item.device === deviceType);
    setFilteredItems(newFilteredItems);
  }, [items, deviceType]);

  return filteredItems;
};
