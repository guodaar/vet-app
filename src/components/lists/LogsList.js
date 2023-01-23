import React from "react";
import { props } from "../../const/colors";
import ItemCard from "../Cards/ItemCard";
import CustomButton from "../CustomButton";
import { useNavigate } from "react-router-dom";
import { Container } from "../containers/CardsWrap";

const LogsList = ({ logsList }) => {
  console.log(logsList);
  return (
    <Container>
      {logsList.map((log) => (
        <ItemCard
          key={log.id}
          title={log.name}
          subtitle={log.client_email}
          date={log.dob}
        >
          <CustomButton>view log</CustomButton>
          <CustomButton>delete</CustomButton>
        </ItemCard>
      ))}
    </Container>
  );
};

export default LogsList;
