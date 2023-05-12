import React from "react";
import { BiCodeAlt } from "react-icons/bi";
import FunFactCard from "./FunFactCard";

const FunFact = () => {
  return (
    <div className="px-0 grid grid-cols-2 md:grid-cols-4 pb-10">
      <FunFactCard icon={<BiCodeAlt />} des="Ubuntu with WSL Certificate " />
      <FunFactCard icon={<BiCodeAlt />} des="JavaScript Advanced" />
      <FunFactCard icon={<BiCodeAlt />} des="Responsive Web Design " />
      <FunFactCard icon={<BiCodeAlt />} des="Reactjs Certificate" />
    </div>
  );
};

export default FunFact;
