import { useState } from "react";
import { CheckboxContainer, StyledCheckbox } from "./InputCheckbox.Styled";

interface ICheckbox {
  onChange: (isChecked: boolean) => void;
  isCheck: boolean;
}

const Checkbox = ({ onChange,isCheck }: ICheckbox) => {
  const [isChecked, setIsChecked] = useState(isCheck);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onChange(!isChecked);
  };

  return (
    <CheckboxContainer>
      <StyledCheckbox
        type="checkbox"
        checked={isChecked}
        disabled={isChecked}
        onChange={handleCheckboxChange}
      />
    </CheckboxContainer>
  );
};

export default Checkbox;
