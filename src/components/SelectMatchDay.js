import React from "react";
import styled from "@emotion/styled";

const SelectField = styled.select`
  background: #eeeeee;
  outline: none;
  height: 80%;
  border-radius: 20px;
  font-family: "News Cycle", sans-serif;
  font-size: 1rem;
  padding-left: 15px;
  flex-grow: 1;
  margin: 5px 20px;
`;

export default function SelectMatchDay({ selectedValue, onChange }) {
  return (
    <SelectField
      value={selectedValue}
      onChange={event => {
        onChange(Number(event.target.value));
      }}
    >
      <option value="1">1. Spieltag</option>
      <option value="2">2. Spieltag</option>
      <option value="3">3. Spieltag</option>
      <option value="4">4. Spieltag</option>
      <option value="5">5. Spieltag</option>
      <option value="6">6. Spieltag</option>
      <option value="7">7. Spieltag</option>
      <option value="8">8. Spieltag</option>
      <option value="9">9. Spieltag</option>
      <option value="10">10. Spieltag</option>
      <option value="11">11. Spieltag</option>
      <option value="12">12. Spieltag</option>
      <option value="13">13. Spieltag</option>
      <option value="14">14. Spieltag</option>
      <option value="15">15. Spieltag</option>
      <option value="16">16. Spieltag</option>
      <option value="17">17. Spieltag</option>
      <option value="18">18. Spieltag</option>
      <option value="19">19. Spieltag</option>
      <option value="20">20. Spieltag</option>
      <option value="21">21. Spieltag</option>
      <option value="22">22. Spieltag</option>
      <option value="23">23. Spieltag</option>
      <option value="24">24. Spieltag</option>
      <option value="25">25. Spieltag</option>
      <option value="26">26. Spieltag</option>
      <option value="27">27. Spieltag</option>
      <option value="28">28. Spieltag</option>
      <option value="29">29. Spieltag</option>
      <option value="30">30. Spieltag</option>
      <option value="31">31. Spieltag</option>
      <option value="32">32. Spieltag</option>
      <option value="33">33. Spieltag</option>
      <option value="34">34. Spieltag</option>
    </SelectField>
  );
}
