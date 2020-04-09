import React from "react";
import StyledPlaylistItem from "./styles/StyledPlaylistItem";

const PlaylistItem = ({ video, active, played }) => {
  return (
    <StyledPlaylistItem active={active} played={played}>
      PlaylistItem
    </StyledPlaylistItem>
  );
};

export default PlaylistItem;
