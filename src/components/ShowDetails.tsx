import * as React from "react";

import { Show } from "@/interfaces";
import DetailsHeader from "./DetailsHeader";
import ShowInfo from "./ShowInfo";

type ShowDetailProps = {
  item: Show;
};

const ShowDetails = () => (
  <>
    <DetailsHeader />
    <ShowInfo />
  </>
);

export default ShowDetails;
