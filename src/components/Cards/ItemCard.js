import React from "react";
import styled from "styled-components";
import { borders } from "../../const/colors";

const Container = styled.div`
  border: 0.5px solid ${borders};
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
  return (
    <Container>
      <Title>{title}</Title>
      <Text>{date}</Text>
      <Text>{subtitle}</Text>
      {children}
    </Container>
  );
};

export default ItemCard;
