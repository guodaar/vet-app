import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 300;
`;

const TitleWrap = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Container>{children}</Container>
    </Container>
  );
};

export default TitleWrap;
