import React from "react";
import StyledNightmode from "./styles/StyledNightmode";

const Nightmode = ({ nigtModeCallback, nightMode }) => {
  return (
    <StyledNightmode>
      <span>Nightmode</span>
      <label className="switch">
        <input
          type="checkbox"
          checked={nightMode}
          onChange={nigtModeCallback}
        />
        <span className="slider round"></span>
      </label>
    </StyledNightmode>
  );
};

export default Nightmode;
