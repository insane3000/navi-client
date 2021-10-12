import React from "react";
import styled from "styled-components";

const VideoSt = styled.div`
  width: 100%;
  height: 100%;
  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: "Roboto 300";
    font-size: 2rem;
    .video {
      width: 90%;
      height: 90%;
    }
  }
`;
const Video = () => {
  return (
    <VideoSt>
      <video className="video" controls controlsList="nodownload">
        <source
          src="https://www.mediafire.com/file/725l2aamowyv925/Jungle_Cruise.mp4/file"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </VideoSt>
  );
};

export default Video;
