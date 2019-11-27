import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { getGoalgetters } from "../api/goalgetters";

const GoalgettersWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Goalgetter = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function Goalgetters() {
  const [goalgetters, setGoalgetters] = React.useState([]);

  async function refreshGoalgetters() {
    const foundGoalGetters = await getGoalgetters();
    setGoalgetters(foundGoalGetters);
    return goalgetters;
  }
  refreshGoalgetters();
  return (
    <GoalgettersWrapper>
      <Link to="/">Home</Link>
      <Goalgetter>
        {goalgetters.map(goalgetter => (
          <div key={goalgetter.GoalGetterId}>{goalgetter.GoalGetterName}</div>
        ))}
        <ol>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ol>
      </Goalgetter>
    </GoalgettersWrapper>
  );
}
