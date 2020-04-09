import React from "react";
import PlaylistHeader from "../PlaylistHeader";
import PlaylistItems from "../containers/PlaylistItems";
import Nightmode from "../Nightmode";
import StyledPlaylist from "../styles/StyledPlaylist";

const Playlist = (props) => {
  return (
    <>
      <StyledPlaylist>
        <Nightmode></Nightmode>
        <PlaylistHeader></PlaylistHeader>
        <PlaylistItems></PlaylistItems>
      </StyledPlaylist>
    </>
  );
};

export default Playlist;
