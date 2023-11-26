import React, { memo, useEffect, useState } from "react";
import { z } from "zod";
import { Episode, EpisodeSchema } from "@/interfaces";
import Header from "./Header";
import List from "./List";

const Dashboard: React.FC = ({ data }: any) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [items, setItems] = useState<Episode[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://api.tvmaze.com/schedule");
        const data = await res.json();
        const shows = z.array(EpisodeSchema).parse(data);
        setItems(shows);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header />

      <List items={items} loading={loading} />
    </div>
  );
};

export default memo(Dashboard);
