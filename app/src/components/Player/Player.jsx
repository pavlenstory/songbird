import React from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


let Player = (props) => {
    return (
        <AudioPlayer
            autoPlayAfterSrcChange={false}
            src={props.audio}
        />
    )
};

export default Player;