import * as React from "react";
import ListItem from "./ListItem";
import { Episode as ShowType } from "../interfaces";

type Props = {
  items: ShowType[];
};

const List = ({ items }: Props) => {
  console.log("IN LIST", { items });
  return (
    <div className="flex flex-wrap w-full -mt-12 p-8 pt-0 gap-8">
      {items.map((item: ShowType) => (
        <ListItem {...item} key={item.id} />
      ))}
    </div>
  );
};
export default List;
