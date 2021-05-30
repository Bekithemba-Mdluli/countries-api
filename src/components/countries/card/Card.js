import React from 'react'
import {
    Link
} from "react-router-dom";

import "./Card.css"

function Country({ image, countryName, population, region, capital, filter }) {

    return (
        <Link to={`/${countryName}`}>

            <div className="card">
                {/* <h1>Card</h1> */}
                <div className="card__img">
                    <img src={image} alt={countryName} />
                </div>
                <div className="card__content">
                    <h2 className="card__content-text">{countryName}</h2>

                    <div className="card__content-stats">
                        <p><span className="stats">Population: </span>{population} </p>
                        <p><span className="stats">Region: </span> {region}</p>
                        <p><span className="stats">Capital: </span> {capital}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}


export default Country
