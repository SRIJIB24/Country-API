import React from "react";

const SelectMenu = ({setRegion}) => {
  return (
    <div className="filter">
      <select className="filter-region" onChange={(e)=>setRegion(e.target.value)}>
        <option hidden="">Filter By Region</option>
        <option value="Asia">Asia</option>
        <option value="Africa">Africa</option>
        <option value="Europe">Europe</option>
        <option value="Americas">America</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};
export default SelectMenu;
