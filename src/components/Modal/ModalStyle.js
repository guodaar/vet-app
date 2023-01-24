import React from "react";
import styled from "styled-components";
import CustomButton from "../CustomButton";

const Modal = styled.div`
  min-height: 18rem;
  margin: 2rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 0.25rem;
`;

const ModalStyle = ({ onClick }) => {
  <Modal>
    <h2>Hello</h2>
    <button onClick={onClick}>close</button>
    <form>
      <input />
      <CustomButton>Donate</CustomButton>
    </form>
  </Modal>;
};

export default ModalStyle;
