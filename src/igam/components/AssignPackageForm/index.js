import React from "react";
import { CloseIcon } from "../../icons";
import "./style.css";
export default function AssignPackageForm(props) {
  const [clicked, setClicked] = React.useState(false);
  const handleSelectBox = () => {
    console.log("CLICKED!");
    setClicked(!clicked);
  };

  return (
    <div ref={props.formRef} className="black-form-container">
      <form className="assign-package-form">
        <button
          type="button"
          className="close-form-btn assign-package-close-btn"
          onClick={props.onClose}
        >
          <CloseIcon className="agent-form-colse-icon" />
        </button>
        <h4>Assiging Package</h4>
        <br />
        <label>Package</label>

        <input type="number" min="1" max="100" />

        <label>Village</label>

        <select className="village-select">
          <option value="village_1">Village_1</option>
          <option value="village_2">Villlage_2</option>
          <option value="village_3">Villlage_3</option>
          <option value="village_4">Villlage_4</option>
        </select>

        <div class="multiselect">
          <div class="selectBox" onClick={handleSelectBox}>
            <select>
              <option>Select Families</option>
            </select>
            <div class="overSelect"></div>
          </div>
          {clicked && (
            <div id="checkboxes">
              <label>
                <input type="checkbox" id="one" />
                fa_1
              </label>

              <label>
                <input type="checkbox" id="two" />
                fa_2
              </label>

              <label>
                <input type="checkbox" id="three" />
                fa_3
              </label>

              <label>
                <input type="checkbox" id="four" />
                fa_4
              </label>

              <label>
                <input type="checkbox" id="four" />
                fa_5
              </label>

              <label>
                <input type="checkbox" id="four" />
                fa_6
              </label>
            </div>
          )}
        </div>
        <br />
        <br />
        <button className="assign-package-form-btn">Assign</button>
      </form>
    </div>
  );
}
