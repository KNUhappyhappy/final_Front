import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const NationContext = createContext()

function NationProvider(props) {

    const [nation, setNation] = useState({});

    useEffect(() => {
        axios.get("http://110.165.16.225:8080/nation?idx=183")
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <NationContext.Provider value={nation} >
            {props.children}
        </NationContext.Provider >
    );
}

export default NationProvider;