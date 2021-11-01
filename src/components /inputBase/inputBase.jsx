import React from "react";
import "./inputBase.css";
import { CARD, CARDICON } from "../constants";

export const InputBase = ({ errorM, error, cardType, isCard, ...props }) => (
  <label>
    <input className="input-root" {...props} />
    {errorM && <div className="error">{errorM} </div>}
    {(!error || !error.cardError) && isCard && CARD.includes(cardType) && (
      <img
        style={{
          position: "absolute",
          top: "5px",
          right: "10px",
          width: "50px",
          height: "33px",
        }}
        src={CARDICON[cardType]}
        alt="card"
      />
    )}
  </label>
);
export default InputBase;
