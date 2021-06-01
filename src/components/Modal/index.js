import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeLoginModal } from "../../redux/actions/user";

export default function Modal(props) {
  const { className, component: Component } = props;

  const dispatch = useDispatch();
  const handleShade = () => {
    dispatch(activeLoginModal(false));
  };

  return (
    <div className={`modal-container ${className}`} onClick={handleShade}>
      <div className="modal-box">
        <Component />
      </div>
    </div>
  );
}
