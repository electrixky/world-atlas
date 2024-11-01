import {useEffect, useTransition} from "react";
import {getCountryData} from "../api/postApi.jsx";

export const Country = () => {
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        getCountryData()
    }, []);

    if (isPending) return <h1>Loading...</h1>;

    return
}