import "./style.css";

export function CircleBtn(props) {
  return (
    <button className="circle-btn" onClick={props.onClick}>
      {props.children}
    </button>
  );
}
