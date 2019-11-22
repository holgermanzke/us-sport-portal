import React from "react";
import styled from "@emotion/styled";
import Title from "./Title";
import SearchField from "./Search";
import SearchButton from "./SearchButton";

const AppBar = styled.header`
  background: #2b2758;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export default function Header() {
  const [showSearch, setShowSearch] = React.useState(false);
  return (
    <AppBar>
      {!showSearch && <Title text="Bundesliga DB" />}
      {showSearch && <SearchField />}
      <SearchButton
        active={showSearch}
        onClick={() => setShowSearch(!showSearch)}
      />
    </AppBar>
  );
}
