import { useState } from "react";

const useToggle = (initialState: boolean = false) => {
  const [bool, setBool] = useState(initialState);

  const toggle = () => {
    setBool((v) => !v);
  };

  return [bool, toggle] as [boolean, () => void];
};

export default useToggle;
