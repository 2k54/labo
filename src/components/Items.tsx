//Items.tsx

import { useState } from "react";
import { useSortItems } from "../../hooks/useSortItems";
import { ItemType } from "../../types/item";
import { Item } from "./Item";
import { useFilterItemsByDevice } from "../../hooks/useFilterItemsByDevice";
import { useFilterAndSortItems } from "../../hooks/useFilterAndSortItems";

type Props = {
  items: ItemType[];
};

export const Items: React.FC<Props> = ({ items }) => {
  const [deviceType, setDeviceType] = useState("");
  // const sortedItems = useSortItems(items, deviceType);
  // const filteredItems = useFilterItemsByDevice(items, deviceType);
  const processedItems = useFilterAndSortItems(items, deviceType);
  return (
    <>
      <div>
        {processedItems.map((item: ItemType) => {
          return <Item key={item.id} item={item} />;
        })}
      </div>
      <button onClick={() => setDeviceType("iphone")}>iPhone</button>
      <button onClick={() => setDeviceType("android")}>Android</button>
      <button onClick={() => setDeviceType("")}>All</button>
    </>
  );
};
