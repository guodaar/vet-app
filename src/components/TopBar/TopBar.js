import React, { useContext } from "react";
import styled from "styled-components";
import logo from "../../assets/vet-bee-logo.JPG";
import darkLogo from "../../assets/vet-bee-logo-dark.jpg";
import {
  getMainColor,
  getMainAccent,
  getBorderColor,
  getHoverColor,
} from "../../const/colors";
import { ThemeContext } from "../../context/ThemeContext";
import { PETS, MEDICATIONS } from "../../routes/pageRoutes";
import { FaMoon, FaSun } from "react-icons/fa";
import CustomButton from "../CustomButton";
import Modal from "react-modal";
import { closeModal, openModal } from "../../utils/modal";

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
  margin-left: -20px;
`;

const Navigation = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;
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

const ToggleTheme = styled.p`
  cursor: pointer;
  padding-top: 6px;
  margin: 0 20px;
  font-size: 1.3rem;
  color: ${(props) => getMainAccent(!props.darkMode)};
  transition: 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

const ModalStyle = styled.div`
  min-height: 18rem;
  margin: 2rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 0.25rem;
`;

const OverlayStyle = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3500;
  background: #212b3277;
`;

const TopBar = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <Container darkMode={darkMode}>
      <Logo src={darkMode ? darkLogo : logo} />
      <Navigation>
        <NavItem darkMode={darkMode} href={PETS}>
          Pets
        </NavItem>
        <NavItem darkMode={darkMode} href={MEDICATIONS}>
          Medications
        </NavItem>
        <ToggleTheme darkMode={darkMode} onClick={toggleDarkMode}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </ToggleTheme>
        <CustomButton onClick={() => openModal(setIsOpen)}>Donate</CustomButton>
      </Navigation>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => closeModal(setIsOpen)}
        className="_"
        overlayClassName="_"
        contentElement={(props, children) => (
          <ModalStyle {...props}>{children}</ModalStyle>
        )}
        overlayElement={(props, contentElement) => (
          <OverlayStyle {...props}>{contentElement}</OverlayStyle>
        )}
      >
        <h2>Hello</h2>
        <button onClick={() => closeModal(setIsOpen)}>close</button>
        <form>
          <input />
          <CustomButton>Donate</CustomButton>
        </form>
      </Modal>
    </Container>
  );
};

export default TopBar;
