import * as React from "react";
import ListItem from "@/components/ListItem";
import { Show } from "@/interfaces";

type Props = {
  items: Show[];
};

const List = ({ items }: Props) => (
  <div className="flex flex-wrap w-full -mt-4 p-8 pt-0 gap-8">
    {items.map((item) => (
      <ListItem data={item} key={item.id} />
    ))}
  </div>
);

export default List;
