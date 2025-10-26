import { useState, useEffect } from "react";
import CountryCard from "./CountryCard";
import CardContainerShimmer from "./CardContainerShimmer";

const CardContainer = ({ query,region}) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,cca3"
    )
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  return (
    <>
    {!countries.length ? (<CardContainerShimmer/> ) :
    (<div className="card-container">
      {countries
        .filter((country) => country.name.common.toLowerCase().includes(query) &&
          (region === "" || country.region === region))
        .map((country) => {
          return (
            <CountryCard
              key={country.cca3}
              name={country.name.common}
              population={country.population}
              flag={country.flags.svg}
              region={country.region}
              capital={country.capital ? country.capital[0] : "N/A"}
            />
          );
        })}
    </div>)}
    </>
  );
};

export default CardContainer;
