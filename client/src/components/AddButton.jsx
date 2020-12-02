import React, { Fragment, useState, useRef } from "react";
import AddNewTaskWindow from "./AddNewTaskWindow";
import AddIcon from "@material-ui/icons/Add";

const Item = ({ addItem }) => {
  const ref = useRef(null);

  const [show, setShow] = useState(false);

  const onOpen = () => setShow(true);

  const onClose = () => setShow(false);

  return (
    <React.Fragment>
      <div
        ref={ref}
        className={"item"}
        onClick={onOpen}
        style={{ textAlign: "center" }}
      >
        <div
          style={{
            display: "inline-block",
          }}
        />
        <AddIcon />
      </div>

      <AddNewTaskWindow
        onClose={onClose}
        show={show}
        addItem={addItem}
        editItem={() => console.log("n/a")}
        currentTaskInfo={{
          id: "",
          name: "",
          assignedBy: "",
          priorityColor: "#ff8c00",
          description: "",
          startDate: "2020-11-24T10:30",
          endDate: "2020-11-24T10:30",
        }}
      />
    </React.Fragment>
  );
};

export default Item;
