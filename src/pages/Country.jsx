import {useEffect, useState, useTransition} from "react";
import {getCountryData, getCountryIndivData} from "../api/postApi.jsx";
import {Loader} from "../components/UI/Loader.jsx";
import {CountryCard} from "../components/UI/CountryCard.jsx";
import {SearchFilter} from "../components/UI/SearchFilter.jsx";

export const Country = () => {
    const [isPending, startTransition] = useTransition();
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState();
    const [filter, setFilter] = useState("All");

    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryData()
            setCountries(res.data)
        })
    }, []);

    if (isPending) return <Loader/>;

    const searchCountry = (country) => {
        if (search) {
            return country.name.common.toLowerCase().includes(search.toLowerCase())
        }
        return country
    }

    const filterRegion = (country) => {
        if (filter === "All") return country
        return country.region === filter
    }

    const filteredCountries = countries.filter((country) => searchCountry(country) && filterRegion(country))

    return <section className="country-section">

        <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter}/>

        <ul className="grid grid-four-cols">
            {
                filteredCountries.map((country) => {
                    return <CountryCard country={country} key={country.id}/>
                })
            }
        </ul>
    </section>
}