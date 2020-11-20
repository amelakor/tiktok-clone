import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video({
  url,
  channel,
  description,
  song,
  likes,
  shares,
  messages,
  _id,
}) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const handleVideoPlay = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <iframe
        onClick={handleVideoPlay}
        ref={videoRef}
        className="video_player"
        loop
        src={url}
        title={_id}
      />

      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
    // VideoFooter

    // VideoSidebar
  );
}

export default Video;
