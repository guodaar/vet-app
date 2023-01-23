import React from "react";
import styled from "styled-components";
import { props } from "../../const/colors";
import ItemCard from "../Cards/ItemCard";
import CustomButton from "../CustomButton";
import { useNavigate } from "react-router-dom";
import { Container } from "../containers/CardsWrap";

const PetsList = ({ petList }) => {
  const navigate = useNavigate();
  const handleClick = (id) => navigate(`/logs/${id}`);
  console.log(petList);
  return (
    <Container>
      {petList.map((pet) => (
        <ItemCard
          key={pet.id}
          title={pet.name}
          subtitle={pet.client_email}
          date={pet.dob}
        >
          <CustomButton onClick={() => handleClick(pet.id)}>
            view log
          </CustomButton>
          <CustomButton>delete</CustomButton>
        </ItemCard>
      ))}
    </Container>
  );
};

export default PetsList;
