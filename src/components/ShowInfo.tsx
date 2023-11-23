import React from "react";
import { Show } from "../interfaces";
import Info from "./Info";
import { formatDurationFromMinutes } from "@/utils";

const ShowInfo = ({ schedule, runtime, genres, status }: Show) => {
  return (
    <div className="flex flex-col">
      <h3>Show info</h3>
      <ul className="space-y-5 mt-5 md:mt-10 text-sm md:text-base">
        /
        {schedule.days.length > 0 && (
          <Info title="Days scheduled" value={schedule.days.join(", ")} />
        )}
        <Info title="Time" value={schedule.time} />
        {runtime && (
          <Info title="Runs for" value={formatDurationFromMinutes(runtime)} />
        )}
        <Info title="Status" value={status} />
        {genres.length > 0 && <Info title="Genres" value={genres.join(", ")} />}
      </ul>
    </div>
  );
};

export default ShowInfo;
