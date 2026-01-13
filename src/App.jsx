import MovieSelector from "./components/MovieSelector";
import "./App.css";
import Seat from "./components/Seat";

const rows = {
  row0: [0, 1, 2, 3, 4, 5, 6, 7],
  row1: [0, 1, 2, 3, 4, 5, 6, 7],
  row2: [0, 1, 2, 3, 4, 5, 6, 7],
  row3: [0, 1, 2, 3, 4, 5, 6, 7],
  row4: [0, 1, 2, 3, 4, 5, 6, 7],
  row5: [0, 1, 2, 3, 4, 5, 6, 7],
};

function App() {
  return (
    <>
      <MovieSelector />
      <div className="container">
        <div className="screen"></div>
        <div className="row">
          {rows.row0.map((seat) => {
            return (
              
                <Seat />


            );
          })}
        </div>
        <div className="row">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat occupied"></div>
          <div className="seat occupied"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
        </div>
        <div className="row">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat occupied"></div>
          <div className="seat occupied"></div>
        </div>
        <div className="row">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
        </div>
        <div className="row">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat occupied"></div>
          <div className="seat occupied"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
        </div>
        <div className="row">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat occupied"></div>
          <div className="seat occupied"></div>
          <div className="seat occupied"></div>
          <div className="seat"></div>
        </div>
      </div>
      <p className="text">
        You have selected <span id="count">0</span> seats for a price of $
        <span id="total">0</span>
      </p>
    </>
  );
}

export default App;
