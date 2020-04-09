import React from "react";
import PlaylistHeader from "../PlaylistHeader";
import PlaylistItems from "../containers/PlaylistItems";
import Nightmode from "../Nightmode";

const Playlist = (props) => {
  return (
    <>
      <Nightmode></Nightmode>
      <PlaylistHeader></PlaylistHeader>
      <PlaylistItems></PlaylistItems>
    </>
  );
};

export default Playlist;
