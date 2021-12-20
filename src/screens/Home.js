import React from "react";
import { Box, Center } from "@chakra-ui/react";
import {
    NavigationBar,
    TheProblem,
    ProblemVideos,
    TheSolution,
    SolutionVideos,
    Team,
    Footer,
} from "../components/index";
import { Trans } from "react-i18next";
import {realshort, storefront} from "../assets/images/index";


export default function Home() {
  return (
    <Box>
        <Box background="rgba(0,0,0,1)">
            <NavigationBar/>
            <img src={storefront}></img>
        </Box>
        <Box background="rgba(0,0,0,0.5)">
            <video className='videoTag' autoPlay loop muted
                   style={{
                       opacity: "20%",
                       objectFit: "cover",
                       position: "absolute",
                       minHeight: "100vh",
                       minWidth: "100%"
                   }}>
                <source src={realshort} type='video/mp4' />
            </video>
            <TheProblem/>
        </Box>

        <Box background = "linear-gradient(10deg, rgba(74,155,208,1) 0%, rgba(232,142,67,1) 100%)">
            <Box h="15vh"/>
            <ProblemVideos />
            <Box h="25vh"/>
            <TheSolution/>
            <Box h="10vh"/>
            <SolutionVideos/>

            <Box mt="40vh">
                <Team />
            </Box>
            <Box h="35vh">

            </Box>
            <Footer/>
        </Box>
    </Box>
  );
}
