import {useEffect, useState, useTransition} from "react";
import {getCountryData, getCountryIndivData} from "../api/postApi.jsx";
import {Loader} from "../components/UI/Loader.jsx";
import {CountryCard} from "../components/UI/CountryCard.jsx";

export const Country = () => {
    const [isPending, startTransition] = useTransition();
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryData()
            setCountries(res.data)
        })
    }, []);

    if (isPending) return <Loader/>;

    return <section className="country-section">
        <ul className="grid grid-four-cols">
            {
                countries.map((country) => {
                    return <CountryCard country={country} key={country.id}/>
                })
            }
        </ul>
    </section>
}