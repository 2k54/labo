//Item.tsx

import { ItemType } from "../../types/item";

type Props = {
  item: ItemType;
};
export const Item: React.FC<Props> = ({ item }) => {
  return (
    <>
      <div>
        <div>{item.name}</div>
      </div>
    </>
  );
};
