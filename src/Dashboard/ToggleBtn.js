import { useState } from "react";
import "../Style/Admin.css";

function ToggleBtn() {
  const [btnState, setBtnState] = useState(false);

  function handleClick() {
    setBtnState((btnState) => !btnState);
  }

  //   let toggleClick = btnState ? "active" : " ";

  return (
    <>
      {/* <button className={`toggle ${toggleClick}`} onClick={handleClick}>
        Toggle
      </button> */}

      <button
        onClick={handleClick}
        className={"toggle " + (btnState ? "toggle-close" : "")}
      >
        {btnState ? "close" : "open"}
      </button>
    </>
  );
}

export default ToggleBtn;
