import react, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { CountryDetailShimmer } from './CountryDetailShimmer';

const CountryDetail = () => {
  const { countryName } = useParams();

  const [countryData, setCountryData] = useState({})
  const [notFound, setNotFound] = useState(false)
  const [loading, setLoading] = useState(true);

  useEffect(()=> { 
    fetch(`https://restcountries.com/v3.1/name/${countryName}/?fullText=true`)
    .then(res => res.json())
    .then(([data]) =>{
      console.log(data)
      setCountryData({
        image : data.flags.svg,
        nativeName : Object.values(data.name.nativeName)[0].common,
        name : data.name.common,
        capital : data.capital,
        population : data.population,
        region : data.region,
        currencies : Object.values(data.currencies).map((currency) =>currency.name).join(','),
        language : Object.values(data.languages).join(',')
      })
      setLoading(false);
    })
    .catch(() => {
    setNotFound(true);
    setLoading(false);
    })
  },[countryName])

  if(notFound){
  return <div> Country Not Found</div>
  }

  if (loading) {
  return <CountryDetailShimmer />;
  }

  return (
    <main>
      <div className="country-details-container">
        <span className="back-button" onClick={()=> history.back()}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img src={countryData.image} alt={`${countryData.name} flag`}/>
          <div className="details-text-container">
            <h1>{countryData.name}</h1>

            <div className="details-text">
              <p>
                <b>Native Name:{countryData.nativeName} </b>
                <span className="native-name"></span>
              </p>
              <p>
                <b>Population:{countryData.population} </b>
                <span className="population"></span>
              </p>
              <p>
                <b>Region: {countryData.region}</b>
                <span className="region"></span>
              </p>
              <p>
                <b>Capital: {countryData.capital}</b>
                <span className="capital"></span>
              </p>
              <p>
                <b>Currencies: {countryData.currencies}</b>
                <span className="currencies"></span>
              </p>
              <p>
                <b>Language: {countryData.language}</b>
                <span className="language"></span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </main> 
  );
};
export default CountryDetail;
