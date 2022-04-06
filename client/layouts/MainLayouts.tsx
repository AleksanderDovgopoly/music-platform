import React from "react";
import {Container} from "@mui/material";
import Navbar from "../components/Navbar";
import Player from "../components/Player";
import Head from "next/head";

interface MainLayoutProps {
    title?: string;
    description?: string;
}


const MainLayouts: React.FC<MainLayoutProps> = ({children, title, description}) => {
    return (
        <>
            <Head>
                <title>{title || "Music platform"}</title>
                <meta name="description" content={`Its free music platform` + description}/>
                <meta name="robots" content="index, follow"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <Navbar/>
            <Container style={{margin: '90px 0'}}>
                {children}
            </Container>
            <Player/>
        </>
    )
}

export default MainLayouts