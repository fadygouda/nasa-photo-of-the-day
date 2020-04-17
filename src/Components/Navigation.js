import React from "react"
import styled from "styled-components"

const Nav = styled.nav`
    display: flex;
    max-width: 25%;
    justify-content: space-between;
    margin: 0 auto;
    

`;
const Nasa = styled.a`
    text-decoration: none;
    color: black;

`;
const Github = styled.a`
    text-decoration: none;
    color: black;
    
`;
const MyWebsite = styled.a`
text-decoration: none;
    color: black;
    `;

const NavigationBar = () => {
    return (
        <div>
            <Nav>
                <Nasa href= "https://www.nasa.gov/">NASA</Nasa>
                <Github href = "https://github.com/fadygouda">My Github</Github>
                <MyWebsite href = "https://fady-gouda.com">Contributors</MyWebsite>
            </Nav>
        </div>
    )
}
export  default NavigationBar;