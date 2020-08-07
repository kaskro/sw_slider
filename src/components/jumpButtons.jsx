import React from "react";
import "./JumpButtons.scss";

const JumpButtons = (props) => {
  const { data, handleJump, active } = props;
  return (
    <div className="slide-btns">
      {data.map((el, index) => {
        return (
          <button
            className={index === active ? "active" : null}
            key={index}
            onClick={() => handleJump(index)}
          />
        );
      })}
    </div>
  );
};

export default JumpButtons;
