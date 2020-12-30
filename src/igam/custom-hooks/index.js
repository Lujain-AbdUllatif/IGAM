import { useRef } from "react";
import { useHistory } from "react-router-dom";
export function useCustomHistory(path) {
  const history = useHistory();
  const handlePathChange = (event) => {
    history.push(path);
  };

  return handlePathChange;
}

export function useFormRef() {
  const formRef = useRef();
  const handleFormDisplay = (event) => {
    formRef.current.classList.toggle("black-form-container-show");
  };
  return [formRef, handleFormDisplay];
}
