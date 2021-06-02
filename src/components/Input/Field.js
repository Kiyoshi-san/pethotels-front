import React from "react";

export default function Field(props) {
  const { ...rest } = props;
  return (
    <div className="field-container">
      {props.icon ? <i className={`icon ${props.icon}`}></i> : <></>}
      <div className="field-box">
        <input {...rest} />
      </div>
    </div>
  );
}
