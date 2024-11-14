import SaleItem from "../Components/SaleItem";
import { useData } from "../Context/DataContext";

const Sales = () => {
  const { data } = useData();

  if (data === null) return null;
  return (
    <ul>
      {data.map((sale) => (
        <li key={sale.id}>
          <SaleItem sale={sale} />
        </li>
      ))}
    </ul>
  );
};

export default Sales;
