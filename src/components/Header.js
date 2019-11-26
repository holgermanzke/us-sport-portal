import React from "react";
import styled from "@emotion/styled";
import Title from "./Title";
import SelectField from "./SelectMatchDay";
import SelectButton from "./SelectButton";

const AppBar = styled.header`
  background: #2b2758;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export default function Header({ selectMatchDay, onSelectChangeValue }) {
  const [showSearch, setShowSearch] = React.useState(false);
  return (
    <AppBar>
      {!showSearch && <Title text="Bundesliga" />}
      {showSearch && (
        <SelectField value={selectMatchDay} onChange={onSelectChangeValue} />
      )}
      <SelectButton
        active={showSearch}
        onClick={() => setShowSearch(!showSearch)}
      />
    </AppBar>
  );
}
