import { useState } from "react";
interface StarComponentProps {
  size: string;
}

const StarComponent = ({ size }: StarComponentProps) => {
  const [state, stateHandler] = useState([false, false, false, false, false]);

  const clickHandler1 = () => {
    stateHandler([true, false, false, false, false]);
  };
  const clickHandler2 = () => {
    stateHandler([true, true, false, false, false]);
  };
  const clickHandler3 = () => {
    stateHandler([true, true, true, false, false]);
  };
  const clickHandler4 = () => {
    stateHandler([true, true, true, true, false]);
  };

  const clickHandler5 = () => {
    stateHandler([true, true, true, true, true]);
  };

  return (
    <>
      <div>
        <span
          className={state[0] ? "Active" : ""}
          style={{ fontSize: size }}
          onClick={clickHandler1}
        >
          *
        </span>
        <span
          className={state[1] ? "Active" : ""}
          style={{ fontSize: size }}
          onClick={clickHandler2}
        >
          *
        </span>
        <span
          className={state[2] ? "Active" : ""}
          style={{ fontSize: size }}
          onClick={clickHandler3}
        >
          *
        </span>
        <span
          className={state[3] ? "Active" : ""}
          style={{ fontSize: size }}
          onClick={clickHandler4}
        >
          *
        </span>
        <span
          className={state[4] ? "Active" : ""}
          style={{ fontSize: size }}
          onClick={clickHandler5}
        >
          *
        </span>
      </div>
    </>
  );
};

export default StarComponent;
