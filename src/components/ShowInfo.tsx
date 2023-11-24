import { Show } from "@/interfaces";
import Info from "./Info";

const ShowInfo = ({ schedule, genres, status, network }: Show) => {
  return (
    <div>
      <h3 className="text-2xl mb-5">Show Info</h3>
      <ul className="grid grid-cols-2 sm:grid-cols-1 sm:divide-y divide-black text-sm md:text-lg">
        <Info title="Schedule" value={schedule?.days?.join(", ") || ""} />
        <Info title="Streamed on" value={network?.name || ""} />
        <Info title="Status" value={status} />
        <Info title="Genres" value={genres?.join(", ") || ""} />
      </ul>
    </div>
  );
};

export default ShowInfo;
