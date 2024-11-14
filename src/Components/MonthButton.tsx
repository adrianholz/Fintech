import React, { CSSProperties } from "react";
import { useData } from "../Context/DataContext";

const style: CSSProperties = {
  padding: "var(--gap) var(--gap-s)",
  backgroundColor: "var(--color-3)",
  border: "none",
  borderRadius: "var(--gap)",
  color: "var(--color-2)",
  fontWeight: "600",
  textTransform: "capitalize",
};

function monthName(n: number) {
  const date = new Date();
  date.setMonth(date.getMonth() + n);
  return new Intl.DateTimeFormat("en-US", { month: "long" }).format(date);
}

function formatDate(date: Date) {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
}

const MonthButton = ({ n }: { n: number }) => {
  const { setInitial, setEnd } = useData();

  function setMonth(n: number) {
    const date = new Date();
    date.setMonth(date.getMonth() + n);
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    setInitial(formatDate(firstDay));
    setEnd(formatDate(lastDay));
  }
  return (
    <button style={style} onClick={() => setMonth(n)}>
      {monthName(n)}
    </button>
  );
};

export default MonthButton;
