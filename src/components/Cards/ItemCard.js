import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { getBorderColor } from "../../const/colors";
import { ThemeContext } from "../../context/ThemeContext";

const Container = styled.div`
  border: 0.5px solid ${(props) => getBorderColor(props.darkMode)};
  border-radius: 5px;
  padding: 10px;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 300;
  margin: 10px;
`;

const Text = styled.p`
  font-size: 1rem;
`;

const ItemCard = ({ title, subtitle, date, children }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <Container darkMode={darkMode}>
      <Title>{title}</Title>
      <Text>{date}</Text>
      <Text>{subtitle}</Text>
      {children}
    </Container>
  );
};

export default ItemCard;
