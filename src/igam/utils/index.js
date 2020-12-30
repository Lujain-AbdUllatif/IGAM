export function handleFormDisplay(formRef, toggledClass) {
  return (event) => {
    console.log(formRef.current);
    formRef.current.classList.toggle(toggledClass);
  };
}
