import React from "react";
import Header from "./Layout/header";
import Footer from "./Layout/footer";
import styled from "styled-components";
import Menu from "./Layout/menu";
function Layout({children}) {

    return(
        <>
        <Header/>
        <Main >
            <div style={{display:"flex", flexDirection:'column', height:'100%'}}>
        <Menu/>
            {children}
            </div>
        </Main>
        <Footer/>
        </>
    ); 
} 
const Main = styled.main`
    width: 100vw;
    height: calc(100vh - 13vh);

`

export default Layout;