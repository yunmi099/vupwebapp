import React from "react";
import Header from "./Layout/header";
import styled from "styled-components";
import Menu from "./Layout/menu/menu";
function Layout(props) {
    return(
        <>
        <Header location = {props.location}/>
        <Main >
            <div style={{display:"flex", flexDirection:'column'}}>
            <Menu number={props.number}/>
            {props.children}
            </div>
        </Main>
        </>
    ); 
} 
const Main = styled.main`
    width: 100vw;

`

export default Layout;