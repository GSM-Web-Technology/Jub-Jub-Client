import React, { useState } from "react";
import { css } from "@emotion/css";

const Button = (props) => {
  const [btnName, setBtnName] = useState(props.children);
  const { backGroundColor } = props;
  const buttonStyle = css`
    width: ${btnName.length > 3 ? `120px` : `100px`};
    background-color: ${backGroundColor};
    font-size: 16px;
    border: 1px solid #ffffff;
    border-radius: 10px;
    padding: 12px 22px;
    text-align: center;
    color: white;
    outline: 0ch;
    &:hover {
      filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
      cursor: pointer;
    }
  `;
  return (
    <button className={buttonStyle} onClick={props.onClick}>
      {btnName}
    </button>
  );
};

export default Button;
