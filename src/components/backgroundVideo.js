import React from "react";

import classes from './BackgroundVideo.module.css';

const BackgroundVideo = () => {
    const videoSource = "https://www.w3schools.com/tags/movie.mp4"
    return (
        <div className={classes.Container}>
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video}>
                <source src={videoSource} type="video/mp4" />
                Your browser sucks
            </video>

        </div>
    )
}

export default BackgroundVideo()