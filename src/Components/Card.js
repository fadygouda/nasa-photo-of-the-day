import React, { useState, useEffect} from "react";
import axios from "axios"
import CardContent from "./CardContent"

const Card = () => {
    const [info, setInfo] = useState([])
    console.log([info]);

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(response => {
            console.log(response)
            setInfo(response.data)
        })
        .catch(error => console.log("Error", error));
    }, []);
    return (
        <div className ="card">
            <CardContent key={info.service_version} info={info} />
        </div>
    )
};


export default Card;