import React from "react";
import styled from "styled-components";
import logo from "../../assets/vet-bee-logo.JPG";
import {
  mainAccent,
  mainAccentHover,
  borders,
  mainFont,
} from "../../const/colors";
import { PETS, MEDICATIONS } from "../../routes/pageRoutes";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10vw;
  border-bottom: 0.5px solid ${borders};
`;

const Logo = styled.img`
  width: 200px;
`;

const Navigation = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavItem = styled.a`
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 300;
  text-decoration: none;
  color: ${mainAccent};
  &:hover {
    color: ${mainAccentHover};
    text-decoration: underline;
  }
`;

const TopBar = () => {
  return (
    <Container>
      <Logo src={logo} />
      <Navigation>
        <NavItem href={PETS}>Pets</NavItem>
        <NavItem href={MEDICATIONS}>Medications</NavItem>
      </Navigation>
    </Container>
  );
};

export default TopBar;
