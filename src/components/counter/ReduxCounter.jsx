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
      <h2 className="counter-title">Counter Redux</h2>
      <h1>
        Counter:<span>0</span>
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
      </h1>
    </div>
  );
};
export default Counter;
