import React from "react";
import styled from "@emotion/styled";
import Title from "./Title";

const AppBar = styled.header`
  background: #2b2758;
  height: 80px;
  display: flex;
`;

export default function Header() {
  return (
    <AppBar>
      <Title text="Bundesliga DB"></Title>
    </AppBar>
  );
}
