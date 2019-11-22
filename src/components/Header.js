import React from "react";
import styled from "@emotion/styled";
import Title from "./Title";
import SearchField from "./Search";

const AppBar = styled.header`
  background: #2b2758;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export default function Header() {
  return (
    <AppBar>
      <Title text="Bundesliga DB"></Title>
      <SearchField />
    </AppBar>
  );
}
