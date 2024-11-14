import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import { ISale } from "../Context/DataContext";
import Loading from "../Components/Loading";

type SaleWithoutDate = Omit<ISale, "data">;

const Sale = () => {
  const { id } = useParams();
  const { data, loading } = useFetch<SaleWithoutDate>(
    `https://data.origamid.dev/vendas/${id}`
  );

  if (loading === true) return <Loading />;
  if (data === null) return null;
  return (
    <div>
      <div className="box mb">ID: {data.id}</div>
      <div className="box mb">Name: {data.nome}</div>
      <div className="box mb">
        Price:{" "}
        {data.preco.toLocaleString("en-us", {
          style: "currency",
          currency: "USD",
        })}
      </div>
      <div className="box mb">Status: {data.status}</div>
      <div className="box mb">Payment: {data.pagamento}</div>
    </div>
  );
};

export default Sale;
