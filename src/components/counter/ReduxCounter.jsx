import "./ReduxCounter.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
const Counter = () => {
  const colorChange = () => {
    count > 0 ? "green" : count === 0 ? "gray" : "red";
  };
  return (
    <div className="app">
      <h1 className="counter-title">Counter Redux</h1>
      <h1>
        Counter:<span>0</span>
      </h1>
      <div className="buttons">
        <button className="count-button INC">
          <AddCircleOutlineIcon />
        </button>
        <button className="count-button RES">
          <RestartAltIcon />
        </button>
        <button className="count-button DEC">
          <RemoveCircleOutlineIcon />
        </button>
      </div>
    </div>
  );
};
export default Counter;
