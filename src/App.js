import { SideBar } from "./Sidebar";
import { Modal } from "./Modal";
import { useState } from "react";
// css
import "./App.css";

function App() {
  const [isModalShowing, setIsModalShowing] = useState(false);

  return (
    <div className="App">
      <SideBar />
      <button onClick={() => setIsModalShowing(true)} className="showModal">
        Show Modal
      </button>

      <Modal
        isModalShowing={isModalShowing}
        setIsModalShowing={setIsModalShowing}
      />
    </div>
  );
}

export default App;
