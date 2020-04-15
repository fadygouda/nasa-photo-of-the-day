import React from "react";
const CardContent = (props) => {
    return (
        <div>
            <h1>{props.info.title}</h1>
            <p>{props.info.date}</p>
            <h3>{props.info.copyright}</h3>
            <img className="photo" src = {props.info.url} />
            <h5>{props.info.explanation}</h5>
        </div>
    )
}
export default CardContent;