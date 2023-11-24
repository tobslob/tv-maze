import { Show } from "../../interfaces";
import ShowInfo from "../../components/ShowInfo";
import DetailsHeader from "../../components/DetailsHeader";
import Cast from "../../components/Staring";

type Props = {
  item?: Show;
  errors?: string;
  params?: any;
};

export const getServerSideProps = async ({ params }: Props) => {
  const res = await fetch(
    `https://api.tvmaze.com/shows/${params.id}?embed=cast`
  );
  const resJson = await res.json();

  return {
    props: {
      params: {
        showId: params.id,
      },
      show: resJson,
    },
  };
};

const ShowPage = ({ show }: any) => {
  const cast = show._embedded?.cast.slice(0, 5);
  return (
    <div className="bg-black">
      <DetailsHeader {...show} />
      <main className="my-5 md:my-10 lg:mt-4 pb-20 lg:mb-20">
        <div className="container grid lg:grid-cols-2 gap-10">
          <ShowInfo {...show} />
          {cast && cast.length > 0 && <Cast cast={cast} />}
        </div>
      </main>
    </div>
  );
};

export default ShowPage;
