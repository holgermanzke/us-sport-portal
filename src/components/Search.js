import React from "react";
import styled from "@emotion/styled";

const SearchField = styled.input`
  background: #eeeeee;
  outline: none;
  height: 80%;
  border-radius: 20px;
  font-family: "News Cycle", sans-serif;
  font-size: 1rem;
  padding-left: 5px;
`;

export default function Search() {
  return <SearchField placeholder="search..." />;
}
