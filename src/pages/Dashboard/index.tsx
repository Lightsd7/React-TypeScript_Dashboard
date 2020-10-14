import React from "react";
import { Container } from "./styles";
import SelectInput from "../../components/SelectInput";
import ContentHeader from "../../components/ContentHeader";

const Dashboard: React.FC = () => {
  const options = [
    { value: "Raphael", label: "Raphael" },
    { value: "Maria", label: "Maria" },
    { value: "Fernando", label: "Fernando" }
  ];

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#FFF">
        <SelectInput options={options} />
      </ContentHeader>
    </Container>
  );
};

export default Dashboard;
