import React from "react";
import { MdRestartAlt } from "react-icons/md";

function RestartButton({ restart }) {
  return (
    <div className="d-flex justify-content-end" style={{ marginTop: "-54px" }}>
      <MdRestartAlt size={30} onClick={restart} />
      <br />
    </div>
  );
}

export default RestartButton;
