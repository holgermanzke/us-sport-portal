import React from "react";
import styled from "@emotion/styled";
import Title from "./Title";
import SelectField from "./SelectMatchDay";
import SelectButton from "./SelectButton";

const AppBar = styled.header`
  /* background: #2b2758; */
  background: ${props => props.theme.secondarycolor};
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export default function Header({ matchDay, onMatchDayChange }) {
  const [showSearch, setShowSearch] = React.useState(false);
  return (
    <AppBar>
      {!showSearch && <Title text="Bundesliga" />}
      {showSearch && (
        <SelectField value={matchDay} onChange={onMatchDayChange} />
      )}
      <SelectButton
        active={showSearch}
        onClick={() => setShowSearch(!showSearch)}
      />
    </AppBar>
  );
}
