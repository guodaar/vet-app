import React from "react";
import styled from "styled-components";
import { props } from "../../const/colors";
import ItemCard from "../Cards/ItemCard";
import CustomButton from "../CustomButton";
import { Container } from "../containers/CardsWrap";

const MedsList = ({ medsList }) => {
  console.log(medsList);
  return (
    <Container>
      {medsList.map((med) => (
        <ItemCard key={med.id} title={med.name} subtitle={med.description}>
          <CustomButton
            buttonColor={props.buttonColor}
            fontColor={props.fontColor}
            buttonHover={props.buttonHover}
          >
            view log
          </CustomButton>
          <CustomButton>delete</CustomButton>
        </ItemCard>
      ))}
    </Container>
  );
};

export default MedsList;
