import React, { useRef, useEffect, useState } from "react";
import { Container } from "shared/components/Auth/common";
import styled from "styled-components";
import videojs, { VideoJsPlayerOptions, VideoJsPlayer } from "video.js";
import "video.js/dist/video-js.css";

const HomeContainer = styled(Container)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

interface Props {
  awsvideoconfig: {
    awsOutputLiveLL: string;
  };
}

const usePlayer = (settings: VideoJsPlayerOptions) => {
  const videoRef = useRef(null);
  const [player, setPlayer] = useState<VideoJsPlayer | null>(null);

  useEffect(() => {
    const vjsPlayer = videojs(videoRef.current, settings);
    setPlayer(vjsPlayer);

    return () => {
      if (player !== null) {
        player?.dispose();
      }
    };
  }, [player, settings]);

  useEffect(() => {
    if (player !== null) {
      player.src(settings.src ||'');
    }
  }, [settings, player]);

  return videoRef;
};

const UsersView = ({ awsvideoconfig }: Props) => {
  const videoJsOptions: VideoJsPlayerOptions = {
    autoplay: true,
    controls: true,
    sources: [
      {
        src: awsvideoconfig.awsOutputLiveLL,
      },
    ],
    width: 1280,
    height: 720,
    preload: "auto",
    html5: {
      hls: {
        enableLowInitialPlaylist: true,
        smoothQualityChange: true,
        overrideNative: true,
      },
    },
  };
  const playerRef = usePlayer(videoJsOptions);

  return (
    <HomeContainer>
      <video ref={playerRef} className="video-js" />
    </HomeContainer>
  );
};

export default UsersView;
