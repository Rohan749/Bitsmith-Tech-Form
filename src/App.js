import Description from "./Description/Description";
import Modal from "./InputModal/Modal";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="desc-box">
        {/* Left side of the page*/}
        <Description />
      </div>
      {/* Right side of the page */}
      <div className="modal-box">
        <Modal />
      </div>
    </div>
  );
}

export default App;
