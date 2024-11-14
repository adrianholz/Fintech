import React from "react";
import { useData } from "../Context/DataContext";

const Summary = () => {
  const { data } = useData();

  return <div>Summary</div>;
};

export default Summary;
