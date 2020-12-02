import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#app");

const Window = ({ show, onClose, item }) => {
  return (
    <Modal
      isOpen={show}
      onRequestClose={onClose}
      className={"modal"}
      overlayClassName={"overlay"}
    >
      <div className={"close-btn-ctn"}>
        <h1 style={{ flex: "1 90%" }}>{item.title} </h1>
        <button className="close-btn" onClick={onClose}>
          X
        </button>
      </div>
      <div>
        <hr />
        <h2>Task Info</h2>
        <span
          className={"color-bar"}
          style={{
            backgroundColor: item.priorityColor,
            display: "inline-block",
          }}
        />
        <span> {item.assignedPerson}</span>
        <div>
          Status:{" "}
          {`${item.status.charAt(0).toUpperCase()}${item.status.slice(1)}`}
        </div>
        <br />
        <hr />

        <h2>Description </h2>
        <em>Task created on {item.startDate}</em>
        <p>{item.content}</p>
        <br />
        <hr />
        <h2>Due: {item.endDate} </h2>
      </div>
    </Modal>
  );
};

export default Window;
