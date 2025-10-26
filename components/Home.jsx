import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CardContainer from "./CardContainer";
import { useState } from "react";

const Home = () => {
  const [query, setQuery] = useState("");
   const [region, setRegion] = useState("");
  return (
    <main className="middle">
      <div className="Search-Filter-Container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu setRegion={setRegion}/>
      </div>
      <CardContainer query={query} region={region} />
    </main>
  );
};
export default Home;
