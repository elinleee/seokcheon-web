import React, { useState } from "react";
import YouTube from "react-youtube";
// import resizeLayout from "Components/Layout/ResizeLayout";
// import "./VideoModal.scss";

const VideoModal = ({ video }) => {
    const opts = {
        width: "640",
        height: "390",
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <div className="video-modal-wrapper">
            <YouTube videoId={video.id.videoId} opts={opts} />
        </div>
    );
};

// export default resizeLayout(VideoModal);
export default VideoModal;