import React from "react";
import { chakra, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const MotionBox = motion(chakra.div);

export default function CaseHero({src}) {
    return (

        <React.Fragment>
                <div style={{padding:'50%', position: 'relative'}}>
                    <iframe src={src}
                            style = {{position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%'}}
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture" title="hest" allowFullScreen>
                    </iframe>
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>
        </React.Fragment>
    );
}