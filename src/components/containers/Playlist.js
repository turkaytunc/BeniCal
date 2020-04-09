import React from "react";
import PlaylistHeader from "../PlaylistHeader";
import PlaylistItems from "../containers/PlaylistItems";
import Nightmode from "../Nightmode";
import StyledPlaylist from "../styles/StyledPlaylist";

const Playlist = ({ videos, active, nightModeCallback, nightMode }) => {
  return (
    <>
      <StyledPlaylist>
        <Nightmode
          nigtModeCallback={nightModeCallback}
          nightMode={nightMode}
        ></Nightmode>
        <PlaylistHeader active={active} total={videos.length}></PlaylistHeader>
        <PlaylistItems video={videos} active={active}></PlaylistItems>
      </StyledPlaylist>
    </>
  );
};

export default Playlist;
