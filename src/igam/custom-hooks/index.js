import React from "react";
import { useHistory } from "react-router-dom";
export function useCustomHistory(path) {
  const history = useHistory();
  const handlePathChange = (event) => {
    history.push(path);
  };

  return handlePathChange;
}
