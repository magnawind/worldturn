import { Fade } from "./index";
import React from "react";

export default function Iframe({src}){
    return(
        <Fade delay={0.5}>
            <div align="center">
                <iframe
                    src={src}
                    frameBorder="0" width="80%" height="800px%" allowFullScreen="true" mozallowfullscreen="true"
                    webkitallowfullscreen="true">
                </iframe>
            </div>
        </Fade>
    )
}

