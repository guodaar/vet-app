import React from "react";
import styled from "styled-components";
import CustomButton from "../../components/CustomButton";
import TopBar from "../../components/TopBar/TopBar";
import { mainAccent } from "../../const/colors";

const Component = styled.div`
  color: black;
`;

const Pets = () => {
  const props = { fontColor: "white", buttonColor: mainAccent };
  return (
    <Component>
      <TopBar />
      <CustomButton buttonColor={props.buttonColor} fontColor={props.fontColor}>
        Add pet
      </CustomButton>
      <CustomButton>Remove pet</CustomButton>
    </Component>
  );
};

export default Pets;
