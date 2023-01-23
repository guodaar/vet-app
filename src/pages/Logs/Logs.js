import React from "react";
import MainContainer from "../../components/containers/MainContainer";
import TitleWrap from "../../components/containers/TitleWrap";
import CustomButton from "../../components/CustomButton";
import TopBar from "../../components/TopBar/TopBar";
import { props } from "../../const/colors";
import { useEffect, useState } from "react";
import { logsAPI } from "../../routes/apiRoutes";
import LogsList from "../../components/lists/LogsList";
import { useParams } from "react-router-dom";

const Logs = () => {
  const { id } = useParams();
  console.log(id);

  const [petName, setPetName] = useState(undefined);
  useEffect(() => {
    fetch(`https://glittery-dull-snickerdoodle.glitch.me/v1/pets/${id}`)
      .then((resp) => resp.json())
      .then((response) => {
        setPetName(response);
      })
      .catch((error) => console.error(error));
  }, []);

  console.log(petName);

  const [logsList, setLogsList] = useState(undefined);
  useEffect(() => {
    fetch(`https://glittery-dull-snickerdoodle.glitch.me/v1/logs/${id}`)
      .then((resp) => resp.json())
      .then((response) => {
        setLogsList(response);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <TopBar />
      <MainContainer>
        <TitleWrap title={`${petName}: Health Records`}>
          <CustomButton>Add prescription</CustomButton>
          <CustomButton>Add a log</CustomButton>
        </TitleWrap>
        {logsList && <LogsList logsList={logsList} />}
      </MainContainer>
    </div>
  );
};

export default Logs;
