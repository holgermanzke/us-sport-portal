import React from "react";
import styled from "@emotion/styled";
import search from "../assets/search.svg";
import cancel from "../assets/cancel.svg";

const SelectButton = styled.button`
  outline: none;
  cursor: pointer;
  justify-self: flex-end;
  background: transparent;
  border: none;
`;

const Icon = styled.img`
  width: 35px;
  height: 35px;
`;

export default function Button({ active, onClick }) {
  return (
    <SelectButton onClick={onClick}>
      <Icon src={active ? cancel : search} />
    </SelectButton>
  );
}
