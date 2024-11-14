import React from "react";
import { useData } from "../Context/DataContext";

const Header = () => {
  const { data } = useData();

  return <header>Header</header>;
};

export default Header;
