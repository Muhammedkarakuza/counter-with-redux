import "./ReduxCounter.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  //? cosuming
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const colorChange = () =>
    count > 0 ? "green" : count === 0 ? "gray" : "red";

  return (
    <div className="app">
      <div className="main-container">
        <h1 className="counter-title" style={{ color: colorChange() }}>
          Counter Redux
        </h1>
        <h1>
          Counter:<span style={{ color: colorChange() }}>{count}</span>
        </h1>
        <div className="buttons">
          <button
            className="count-button INC"
            onClick={() => dispatch({ type: "INC" })}
          >
            <AddCircleOutlineIcon />
          </button>
          <button
            className="count-button RES"
            onClick={() => dispatch({ type: "RES" })}
          >
            <RestartAltIcon />
          </button>
          <button
            className="count-button DEC"
            onClick={() => dispatch({ type: "DEC" })}
          >
            <RemoveCircleOutlineIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Counter;
