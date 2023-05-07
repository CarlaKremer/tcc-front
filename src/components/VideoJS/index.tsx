import React, { useEffect, useRef, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

export const VideoJS = (props: any) => {
  const videoNode = useRef<any>(null);
  const [player, setPlayer] = useState<any>(null);
  useEffect(() => {
    if (videoNode.current) {
      const _player = videojs(videoNode.current, props);
      setPlayer(_player);
      return () => {
        if (player !== null) {
          player.dispose();
        }
      };
    }
  }, []);

  return (
    <div data-vjs-player>
      <video ref={videoNode} className="video-js"></video>
    </div>
  );
};

export default VideoJS;
