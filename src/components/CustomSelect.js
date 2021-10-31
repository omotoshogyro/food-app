import React from "react";
import { ReactComponent as DropdownIcon } from "../assets/icons/arrowdropdown-icon.svg";

function CustomSelect({opt1, opt2, opt3}) {
  return (
    <div className="choosebtn__dropdown">
      <DropdownIcon />
      <select name="choosebtn__dish" className="choosebtn__dropdown--select">
        <option value={opt1}>{opt1}</option>
        <option value={opt2}>{opt2}</option>
        <option value={opt3}>{opt3}</option>
      </select>
    </div>
  );
}

export default CustomSelect;
