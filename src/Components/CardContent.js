import React from "react";
import styled from "styled-components"

const Title = styled.h1`
    font-size: 25px;
    font-weight: bolder;
    color: #b4e39;
    max-width: 70%;
    text-align: left;
    margin: 0 auto;
    margin-bottom: 30px;
  
`;
const Copyrights = styled.p`
    font-size: 12px;
    font-weight: light;
`;

const Image = styled.img`
    max-width: 70%;
    margin-bottom: 30px;
    
    

`;
const PicInfo = styled.p`
    max-width: 70%;
    text-align: left;
    margin: 0 auto;
    color: #b4e39;
`;
const CardContent = (props) => {
    return (
        <div>
            <Image className="photo" src = {props.info.url} />
            <Title>{props.info.title} -  {props.info.date}</Title>       
            <PicInfo>{props.info.explanation}</PicInfo>
            <Copyrights>{props.info.copyright}</Copyrights>
        </div>
    )
}
export default CardContent;