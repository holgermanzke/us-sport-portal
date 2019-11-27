import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const TestDiv = styled.div``;

export default function Goalgetter() {
  return (
    <TestDiv>
      <Link to="/">Home</Link>
      <ol>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ol>
    </TestDiv>
  );
}
