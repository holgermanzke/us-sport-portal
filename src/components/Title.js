import React from "react";
import styled from "@emotion/styled";

const Title = styled.h1`
  font-family: "Ubuntu", sans-serif;
  color: #eeeeee;
  letter-spacing: 2px;
  font-size: 1.6rem;
  padding-left: 25px;
`;

export default function CreateTitle({ text }) {
  return <Title>{text}</Title>;
}
