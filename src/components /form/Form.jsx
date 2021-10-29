import React from "react";
import InputBase from "../inputBase/inputBase";
import "./Form.css";

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      cardData: {
        card: "",
        cardHolder: "",
        expiry: "",
        securityCode: "",
      },
      maxLength: 19,
    };
  }
  render() {
    const inputData = [
      { label: "Card Number", name: "card", type: "text" },
      { label: "CardHolder's Name", name: "cardHolder", type: "text" },
      { label: "Expiry Date (MM/YY)", name: "expiry", type: "text" },
      { label: "Security Code", name: "securityCode", type: "text" },
    ];

    return (
      <div>
        <h1>Add New Card</h1>
        <form>
          {inputData.map((item) => (
            <InputBase
              placeholder={item.label}
              type={item.type}
              value={this.state.cardData && this.state.cardData[item.name]}
              onChange={this.handleInputData}
              autoComplete="off"
              maxLength={this.state.maxLength}
              name={item.name}
            />
          ))}
          <div className="btn-wrapper">
            <InputBase type="submit" value="Add Card" />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
