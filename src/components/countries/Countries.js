import React, { useState, useEffect } from 'react'
import axios from "axios"

import { Search } from '@material-ui/icons'

import Card from './card/Card'

import "./Countries.css"

function Countries() {
    const [countries, setCountries] = useState([])
    const [regionSelected, SetRegionSelected] = useState('')
    const [search, SetSearch] = useState('');
    // const [loading, setLoading] = useState(true)
    // const [countrySearch]

    useEffect(() => {

        async function fetchCountries() {
            const request = await axios.get(`https://restcountries.eu/rest/v2/all`);
            setCountries(request.data)
            // return countries
        }

        fetchCountries()
    }, [])


    return (
        <>
            <div className="filtering container">
                <div className="filtering__input flex flex-ai-c">
                    <Search />
                    <input onChange={e => { SetSearch(e.target.value) }} type="text" placeholder="Serach for a country..." />
                </div>

                <div className="filtering__dropdown flex flex-ai-c">
                    <select className="filtering__select" onChange={e => { SetRegionSelected(e.target.value) }}>
                        <option defaultValue hidden>Filter By Region</option>
                        <option value="Africa">Africa</option>
                        <option value="America">America</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>

                    </select>

                </div>
            </div>
            <div className="countries container">
                {

                    // regionSelected === "" ?
                    countries.filter((val) => {

                        if (regionSelected === "" && search === "") {
                            return val;
                        } else if (val.region.toLocaleLowerCase().includes(regionSelected.toLocaleLowerCase()) && val.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                            return val
                        }
                        // return;
                    }).map(country => (
                        <Card key={country.name} image={country.flag} countryName={country.name} population={country.population} region={country.region} capital={country.capital} />
                    ))

                }

            </div>
        </>

    )
}

export default Countries
