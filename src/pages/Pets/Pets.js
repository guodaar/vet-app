import React from "react";
import MainContainer from "../../components/containers/MainContainer";
import TitleWrap from "../../components/containers/TitleWrap";
import CustomButton from "../../components/CustomButton";
import TopBar from "../../components/TopBar/TopBar";
import { props } from "../../const/colors";
import { useEffect, useState } from "react";
import { petsAPI } from "../../routes/apiRoutes";
import PetsList from "../../components/lists/PetsList";

const Pets = () => {
  const [petList, setPetList] = useState(undefined);
  useEffect(() => {
    fetch(petsAPI)
      .then((resp) => resp.json())
      .then((response) => {
        setPetList(response);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <TopBar />
      <MainContainer>
        <TitleWrap title="Pet List">
          <CustomButton>Add a pet</CustomButton>
        </TitleWrap>
        {petList && <PetsList petList={petList} />}
        <CustomButton fontColor={props.fontColor}>Add a pet</CustomButton>
      </MainContainer>
    </div>
  );
};

export default Pets;
