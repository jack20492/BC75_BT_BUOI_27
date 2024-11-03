import Navbar from "./navbar";
import Body from "./body";
import data from "./data.json";
import { useState } from "react";

export default function Index() {
  const [state, setState] = useState({
    shoes: data,
  });

  const renderListShoes = () => {
    const { shoes } = state;
    const newShoes = shoes.map((item) => {
      return <Body key={item.id} data={item} />;
    });
    return newShoes;
  };

  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="grid grid-cols-3 gap-5 m-20">{renderListShoes()}</div>
    </div>
  );
}
