import SalesChart from "../Components/SalesChart";
import { useData } from "../Context/DataContext";

const Summary = () => {
  const { data } = useData();

  if (data === null) return null;

  return (
    <section>
      <div className="summary flex">
        <div className="box">
          <h2>Sales</h2>
          <span>
            {data
              .filter((sale) => sale.status !== "falha")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("en-US", { style: "currency", currency: "USD" })}
          </span>
        </div>
        <div className="box">
          <h2>Received</h2>
          <span>
            {data
              .filter((sale) => sale.status === "pago")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("en-US", { style: "currency", currency: "USD" })}
          </span>
        </div>
        <div className="box">
          <h2>Processing</h2>
          <span>
            {data
              .filter((sale) => sale.status === "processando")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("en-US", { style: "currency", currency: "USD" })}
          </span>
        </div>
      </div>
      <div className="box mb">
        <SalesChart data={data} />
      </div>
    </section>
  );
};

export default Summary;
