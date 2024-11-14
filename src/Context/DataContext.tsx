import React, { createContext, PropsWithChildren } from "react";
import useFetch from "../Hooks/useFetch";

type IDataContext = {
  loading: boolean;
  error: string | null;
  data: ISale[] | null;
};

type ISale = {
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

export const DataContextProvider = ({ children }: PropsWithChildren) => {
  const { data, loading, error } = useFetch<ISale[]>(
    "https://data.origamid.dev/vendas/"
  );

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};
