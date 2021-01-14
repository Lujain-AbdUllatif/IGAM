import React, { useState } from "react";
import SubTitleInfo from "../SubTitleInfo";
import AddForm from "../AddForm";
export default function StockMiniForm(props) {
  const [value, setValue] = useState(200);

  return (
    <div className="packges-info-control">
      <SubTitleInfo
        className={props.subTitleClassName}
        text={props.subTitleText}
        value={value}
      />
      <AddForm
        placeholder={props.inputPlaceholder}
        handleAdd={(v) => {
          setValue((c) => Number(c) + Number(v));
        }}
      />
    </div>
  );
}
