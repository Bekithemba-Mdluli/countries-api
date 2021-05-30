import { ArrowBack } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'

import {
    Link,
    useParams
} from "react-router-dom";

import './Information.css'
function Information() {
    const [country, SetCountry] = useState([])
    const [isLoaded, SetIsLoaded] = useState(false)


    let { id } = useParams();

    useEffect(() => {

        function fetchCountry() {
            // const request = await axios.get(`https://restcountries.eu/rest/v2/name/angola`)
            // SetIsLoaded(true)
            // SetCountry(request.data)
            // setCountryName(this.props.match.params.id)
            const res = fetch(`https://restcountries.eu/rest/v2/name/${id}`);
            res.then(res => res.json())
                .then((result) => {
                    SetIsLoaded(true)
                    SetCountry(result[0])
                })

        }

        fetchCountry()
        console.log(id)
    }, [id])


    if (!isLoaded) {
        return (<div>Loading...</div>)
    } else {
        return (
            <div className="information container">
                <div className="information__button flex flex-ai-c">
                    <ArrowBack />
                    <Link className="information__button-btn" to="/">Back</Link>
                </div>
                <div className="information__desktop">
                    <div className="information__flag">
                        <img src={country?.flag} alt={country?.name} />
                    </div>

                    <div className="information__stats">
                        <div className="information__statsD">
                            <div className="stats__left">
                                <h2 className="iHead">{country?.name}</h2>

                                <p className="iText"><span className="stat">Native Name:</span> {country?.nativeName}</p>
                                <p className="iText"><span className="stat">Population:</span> {country?.population}</p>
                                <p className="iText"><span className="stat">Region:</span> {country?.region}</p>
                                <p className="iText"><span className="stat">Sub Region:</span> {country?.subregion}</p>
                            </div>

                            <div className="stats__right">
                                <h2 className="iHead none">{country?.name}</h2>
                                <p className="iText"><span className="stat">Top Level Domain:</span> {country?.topLevelDomain}</p>
                                <p className="iText"><span className="stat">Currencies:</span> {country?.currencies?.map(c => (
                                    c.name + ", "
                                ))}</p>
                                <p className="iText"><span className="stat">Languages:</span> {country?.languages?.map(c => (
                                    c.name + ", "
                                ))} </p>

                            </div>
                        </div>




                        <div className="information__border">
                            <h2 className="bHead">Border Countries:</h2>
                            <div className="information__border-buttons flex">
                                {country?.borders?.map(c => (
                                    <button className="btn">{c}</button>
                                ))}
                            </div>
                        </div>
                    </div>


                </div>



            </div>
        )
    }
}

export default Information
