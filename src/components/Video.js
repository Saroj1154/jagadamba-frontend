import React from 'react'
import video from '../assets/videos/ad.mp4'

function Video() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">

                    <video src={video} autoPlay loop muted style={{ width: "100%", height: "auto" }}></video>
                </div>
            </div>
        </div >
    )
}

export default Video
