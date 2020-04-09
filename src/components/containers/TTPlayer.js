import React from "react";
import Video from "../Video";
import Playlist from "../containers/Playlist";
import { ThemeProvider } from "styled-components";
import StyledTTPlayer from "../styles/StyledTTPlayer";

const darkTheme = {
  bgcolor: "#353535",
  bgcolorItem: "#414141",
  bgcolorItemActive: "#405c63",
  bgcolorPlayed: "#526d4e",
  border: "none",
  borderPlayed: "none",
  color: "#fff",
};

const lightTheme = {
  bgcolor: "#fff",
  bgcolorItem: "#fff",
  bgcolorItemActive: "#80a7b1",
  bgcolorPlayed: "#7d9979",
  border: "1px solid #353535",
  borderPlayed: "none",
  color: "#353535",
};

const TTPlayer = () => {
  const nightModeCallback = () => {};
  const endCallback = () => {};
  const progressCallback = () => {};
  return (
    <ThemeProvider theme={state.nightMode ? darkTheme : lightTheme}>
      {state.videos !== null ? (
        <StyledTTPlayer>
          <Video
            active={state.activeVideo}
            autoplay={state.atuplay}
            endCallback={endCallback}
            progressCallback={progressCallback}
          ></Video>
          <Playlist
            videos={state.videos}
            active={state.activeVideo}
            nightModeCallback={nightModeCallback}
            nightMode={state.nightMode}
          ></Playlist>
        </StyledTTPlayer>
      ) : null}
    </ThemeProvider>
  );
};

export default TTPlayer;
