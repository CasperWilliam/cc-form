import React from "react";
import "./inputBase.css";

export const InputBase = (props) => (
  <label>
    <input className="input-root" {...props} />
  </label>
);
export default InputBase;
