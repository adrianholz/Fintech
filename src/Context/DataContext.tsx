import React, { createContext, PropsWithChildren, useState } from "react";
import useFetch from "../Hooks/useFetch";

type IDataContext = {
  loading: boolean;
  error: string | null;
  data: ISale[] | null;
  initial: string;
  end: string;
  setInitial: React.Dispatch<React.SetStateAction<string>>;
  setEnd: React.Dispatch<React.SetStateAction<string>>;
};

export type ISale = {
  id: string;
  nome: string;
  preco: number;
  status: "pago" | "processando" | "falha";
  pagamento: "boleto" | "pix" | "cartao";
  data: string;
  parcelas: number | null;
};

const DataContext = createContext<IDataContext | null>(null);

export const useData = () => {
  const context = React.useContext(DataContext);
  if (!context)
    throw new Error("useData needs to be inside DataContextProvider");
  return context;
};

function getDate(n: number) {
  const date = new Date();
  date.setDate(date.getDate() - n);
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
}

export const DataContextProvider = ({ children }: PropsWithChildren) => {
  const [initial, setInitial] = useState(getDate(14));
  const [end, setEnd] = useState(getDate(0));

  const { data, loading, error } = useFetch<ISale[]>(
    `https://data.origamid.dev/vendas/?inicio=${initial}&final=${end}`
  );

  return (
    <DataContext.Provider
      value={{ data, loading, error, initial, setInitial, end, setEnd }}
    >
      {children}
    </DataContext.Provider>
  );
};
