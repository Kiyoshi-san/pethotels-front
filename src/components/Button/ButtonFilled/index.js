import React from "react";

export default function ButtonFilled(props) {
  const { label, ...rest } = props;
  console.log(rest);
  return (
    <div>
      <button {...rest} className={`button-filled ${rest.className}`}>
        {label}
      </button>
    </div>
  );
}
