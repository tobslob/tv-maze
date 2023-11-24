import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DetailsHeader from "@/components/DetailsHeader";
import ShowInfo from "@/components/ShowInfo";
import Cast from "@/components/Staring";
import { listItems } from "@/utils";

const ShowPage = () => {
  const router = useRouter();
  const id = router.query.id as string;

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [items, setItems] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) {
        return;
      }

      try {
        const res = await fetch(
          `https://api.tvmaze.com/shows/${id}?embed=cast`
        );
        const resJson = await res.json();
        setItems(resJson);
      } catch (err: any) {
        setError(err.message);
        console.log('error ', err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const cast = items?._embedded?.cast.slice(0, 5);
  return (
    <div>
      <DetailsHeader {...items} />
      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-6 sm:gap-8 gap-6 w-4/5 container">
          {listItems(12).map((_, index) => (
            <div
              className="w-full bg-gray-400 h-[240px] animate-pulse"
              key={index}
            />
          ))}
        </div>
      ) : (
        <main className="sm:-mt-48 pt-10 sm:pt-40 pb-16 z-10 bg-white">
          <div className="grid lg:grid-cols-2 gap-10 w-full sm:w-auto px-8 sm:px-0 sm:mx-24">
            <ShowInfo {...items} />
            {cast && cast.length > 0 && <Cast cast={cast} />}
          </div>
        </main>
      )}
    </div>
  );
};

export default ShowPage;
