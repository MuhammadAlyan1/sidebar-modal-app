import { RiCloseCircleLine } from "react-icons/ri";

import "./Modal.css";

export function Modal({ isModalShowing, setIsModalShowing }) {
  if (!isModalShowing) {
    return;
  }

  return (
    <div className="modal-container">
      <section className="modal-content">
        <h1>Modal Content</h1>
        <button onClick={() => setIsModalShowing(false)} className="closeModal">
          <RiCloseCircleLine />
        </button>
      </section>
    </div>
  );
}
