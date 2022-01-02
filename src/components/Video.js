import React from 'react'
import video from '../assets/videos/ad.mp4'

function Video() {
    return (
        <div>
            <video src={video} autoPlay loop muted></video>
        </div >
    )
}

export default Video
