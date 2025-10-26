import React from 'react'
import { Link } from 'react-router-dom'

const CountryCard = ({name,population,flag,region,capital}) => {
  return (
    <Link className="country-card" to={`/${name}`}>
        <img src={flag} alt={name + 'Flag'}/>
        <div className="card-text">
             <h3 className="card-title">{name}</h3>
             <p><b>Population: </b>{population}</p>
             <p><b>Region: </b>{region}</p>
             <p><b>Capital: </b>{capital}</p>
        </div>
    </Link>
  )
}
export default CountryCard
