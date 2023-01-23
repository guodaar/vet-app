import React from "react";
import MainContainer from "../../components/containers/MainContainer";
import TitleWrap from "../../components/containers/TitleWrap";
import CustomButton from "../../components/CustomButton";
import TopBar from "../../components/TopBar/TopBar";
import { props } from "../../const/colors";
import { useEffect, useState } from "react";
import { medsAPI } from "../../routes/apiRoutes";
import MedsList from "../../components/lists/MedsList";

const Medications = () => {
  const [medsList, setMedsList] = useState(undefined);
  useEffect(() => {
    fetch(medsAPI)
      .then((resp) => resp.json())
      .then((response) => {
        setMedsList(response);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <TopBar />
      <MainContainer>
        <TitleWrap title="Medications">
          <CustomButton>Add a medication</CustomButton>
        </TitleWrap>
        {medsList && <MedsList medsList={medsList} />}
      </MainContainer>
    </div>
  );
};

export default Medications;
