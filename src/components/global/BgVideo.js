import React from 'react';
import ReactPlayer from 'react-player'
import bgVid from '../../assets/videos/bg-vid.mp4';


const BgVideo = () => {    

    return(
        <ReactPlayer 
            loop={true} 
            url={bgVid} 
            playing={true} 
            volume={0} 
            className='video-js'
            width=''
            height='100vh'
        />
    );
};

export default BgVideo;