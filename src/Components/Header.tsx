import React, { useEffect, useState } from "react";
import DateRange from "./DateRange";
import Months from "./Months";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [title, setTitle] = useState("Summary");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") setTitle("Summary");
    else if (location.pathname === "/sales") setTitle("Sales");
  }, [location]);

  return (
    <header className="mb">
      <div className="daterange mb">
        <DateRange />
        <h1 className="box bg-3">{title}</h1>
      </div>
      <Months />
    </header>
  );
};

export default Header;
