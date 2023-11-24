import { listItems } from "@/utils";
import { Episode as ShowType } from "@/interfaces";
import ListItem from "./ListItem";

type Props = {
  items: ShowType[];
  loading: boolean;
};

const List = ({ items, loading }: Props) => {
  return (
    <div className="sm:w-[unset] w-full mt-0 p-8 sm:p-0 mb-10 sm:-mt-28 sm:mx-[6.25rem]">
      <h1 className="mb-4 text-xl">
        {loading ? "Loading..." : "Last Added Shows"}
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-6 sm:gap-8 gap-6">
        {loading ? (
          <>
            {listItems(12).map((_, index) => (
              <div
                className="w-full bg-gray-400 h-[240px] animate-pulse"
                key={index}
              />
            ))}
          </>
        ) : (
          <>
            {items.map((item: ShowType) => (
              <ListItem {...item} key={item.id} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default List;
