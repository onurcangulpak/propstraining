import React from "react";
import visaImage from "../assets/images/visa.png";
import masterCardImg from "../assets/images/master-card.svg";
import "./CreditCard.css";
const CreditCard = (props) => {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;
  const cardLogo = type.toLowerCase() === "visa" ? visaImage : masterCardImg;
  const cardNumber = number.slice(12);

  return (
    <div className="credit-card-container">
      <div
        className="credit-card"
        style={{
          backgroundColor: bgColor,
          color: color,
          width: 350,
          height: 200,
        }}
      >
        <div className="logo">
          <img src={cardLogo} alt="card logo" />
        </div>
        <div className="card-number">
          <p>•••• •••• •••• {cardNumber}</p>
        </div>
        <div className="expires">
          <p>
            Expires {expirationMonth}/{expirationYear} {bank}
          </p>
        </div>
       
        <div className="owner">
          <p>{owner}</p>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
