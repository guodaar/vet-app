import React, { useContext } from "react";
import styled from "styled-components";
import logo from "../../assets/vet-bee-logo.JPG";
import darkLogo from "../../assets/vet-bee-logo-dark.jpg";
import {
  mainAccentHover,
  borders,
  getMainColor,
  getMainAccent,
  getBorderColor,
  getHoverColor,
} from "../../const/colors";
import { ThemeContext } from "../../context/ThemeContext";
import { PETS, MEDICATIONS } from "../../routes/pageRoutes";
import { FaMoon, FaSun } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10vw;
  border-bottom: 0.5px solid ${(props) => getBorderColor(props.darkMode)};
  background-color: ${(props) => getMainColor(props.darkMode)};
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
  color: ${(props) => getMainAccent(props.darkMode)};
  &:hover {
    color: ${(props) => getHoverColor(props.darkMode)};
    text-decoration: underline;
  }
`;

const TopBar = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <Container darkMode={darkMode}>
      <Logo src={logo} />
      <Navigation>
        <NavItem darkMode={darkMode} href={PETS}>
          Pets
        </NavItem>
        <NavItem darkMode={darkMode} href={MEDICATIONS}>
          Medications
        </NavItem>
        <div onClick={toggleDarkMode}>
          {darkMode ? <FaSun color="white" /> : <FaMoon />}
        </div>
      </Navigation>
    </Container>
  );
};

export default TopBar;
