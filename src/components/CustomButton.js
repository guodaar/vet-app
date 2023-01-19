import React from "react";
import styled from "styled-components";
import { mainAccent } from "../const/colors";

const CustomButton = styled.button`
  background-color: ${(props) => props.buttonColor || "white"};
  color: ${(props) => props.fontColor || mainAccent};
  font-size: 0.8rem;
  letter-spacing: 1.5px;
  font-weight: 800;
  text-transform: uppercase;
  padding: 10px 20px;
  border: 2px solid ${mainAccent};
  border-radius: 5px;
`;

export default CustomButton;
