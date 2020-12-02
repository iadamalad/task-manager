import React from "react";
import Modal from "react-modal";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import { data } from "../data";

Modal.setAppElement("#app");

const AddNewTaskWindow = ({
  show,
  onClose,
  addItem,
  editItem,
  currentTaskInfo,
}) => {
  const [taskInfo, setTaskInfo] = React.useState({
    id: currentTaskInfo.id,
    name: currentTaskInfo.name,
    assignedBy: currentTaskInfo.assignedBy,
    priority:
      currentTaskInfo.priorityColor === "#ff0000"
        ? "high"
        : currentTaskInfo.priorityColor === "#ff8c00"
        ? "medium"
        : currentTaskInfo.priorityColor === "#ffff00"
        ? "low"
        : "",
    description: currentTaskInfo.description,
  });

  const [selectedStartDate, setSelectedStartDate] = React.useState(
    currentTaskInfo.startDate
  );

  const [selectedEndDate, setSelectedEndDate] = React.useState(
    currentTaskInfo.endDate
  );

  const handleStartDateChange = (date) => {
    setSelectedStartDate(new Date(date));
  };

  const handleEndDateChange = (date) => {
    setSelectedEndDate(new Date(date));
  };

  const submitAdd = () => {
    addItem({
      id: data.length + 1,
      status: "To-Do",
      title: taskInfo.taskInfo.name,
      content: taskInfo.taskInfo.description,
      assignedPerson: taskInfo.taskInfo.assignedBy,
      priorityColor:
        taskInfo.taskInfo.priority === "high"
          ? "#ff0000"
          : taskInfo.priority === "medium"
          ? "#ff8c00"
          : taskInfo.priority === "low"
          ? "#ffff00"
          : "",
      startDate: selectedStartDate,
      endDate: selectedEndDate,
    });
    onClose();
  };

  const submitEdit = () => {
    editItem({
      id: taskInfo.id,
      status: "To-Do",
      title: taskInfo.name,
      content: taskInfo.description,
      assignedPerson: taskInfo.assignedBy,
      priorityColor:
        taskInfo.priority === "high"
          ? "#ff0000"
          : taskInfo.priority === "medium"
          ? "#ff8c00"
          : taskInfo.priority === "low"
          ? "#ffff00"
          : "",
      startDate: selectedStartDate,
      endDate: selectedEndDate,
    });
    onClose();
  };

  return (
    <Modal
      isOpen={show}
      onRequestClose={onClose}
      className={"modal"}
      overlayClassName={"overlay"}
      style={{ marginTop: "30px" }}
    >
      <form noValidate autoComplete="off">
        <div style={{ textAlign: "center" }}>
          <h1 className="task-info-text" style={{ marginBottom: "5%" }}>
            {taskInfo.name ? "Edit Task" : "Create New Task"}
          </h1>
        </div>

        <div className="task-info" style={{ marginBottom: "3%" }}>
          <div className="item-test">
            <h2 className="task-info-text">Task Info </h2>
            <div>
              <TextField
                id="standard-basic"
                label="Task Name"
                variant="outlined"
                value={taskInfo.name}
                onChange={(event) => {
                  const taskNameInput = event.target.value;
                  setTaskInfo((prevState) => ({
                    taskInfo: {
                      ...prevState.taskInfo,
                      name: taskNameInput,
                    },
                  }));
                }}
                style={{ marginBottom: "3px" }}
              />
            </div>
            <div>
              <TextField
                id="standard-basic"
                label="Assigned by"
                value={taskInfo.assignedBy}
                variant="outlined"
                onChange={(event) => {
                  const assignedByInput = event.target.value;
                  setTaskInfo((prevState) => ({
                    taskInfo: {
                      ...prevState.taskInfo,
                      assignedBy: assignedByInput,
                    },
                  }));
                }}
              />
            </div>
          </div>

          <div className="item-test">
            <h2 className="task-info-text">Priority Level</h2>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="Priority"
                name="priority"
                defaultValue={taskInfo.priority}
                onClick={(event) => {
                  const priorityInput = event.target.value;
                  setTaskInfo((prevState) => ({
                    taskInfo: {
                      ...prevState.taskInfo,
                      priority: priorityInput,
                    },
                  }));
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FormControlLabel
                    value="low"
                    control={<Radio />}
                    label="Low"
                  />
                  <div
                    style={{
                      width: "40px",
                      height: "10px",
                      borderRadius: "5px",
                      backgroundColor: "#ffff00",
                    }}
                  ></div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FormControlLabel
                    value="medium"
                    control={<Radio />}
                    label="Medium"
                  />
                  <div
                    style={{
                      width: "40px",
                      height: "10px",
                      borderRadius: "5px",
                      backgroundColor: "#ff8c00",
                    }}
                  ></div>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <FormControlLabel
                    value="high"
                    control={<Radio />}
                    label="High"
                  />
                  <div
                    style={{
                      width: "40px",
                      height: "10px",
                      borderRadius: "5px",
                      backgroundColor: "#ff0000",
                    }}
                  ></div>
                </div>
              </RadioGroup>
            </FormControl>
          </div>
        </div>

        <div className="task-info" style={{ marginBottom: "5%" }}>
          <div className="item-test">
            <h2 className="task-info-text">Start Date:</h2>
            <TextField
              id="datetime-local"
              type="datetime-local"
              defaultValue={selectedStartDate}
              onChange={(event) => {
                const startDateValue = event.target.value;
                setSelectedStartDate(startDateValue);
              }}
              InputLabelProps={{
                shrink: true,
              }}
              style={{ marginRight: "2%" }}
            />
          </div>

          <div className="item-test">
            <h2 className="task-info-text">End Date:</h2>
            <TextField
              id="datetime-local"
              type="datetime-local"
              defaultValue={selectedEndDate}
              onChange={(event) => {
                const endDateValue = event.target.value;
                setSelectedEndDate(endDateValue);
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
        </div>

        <div style={{ marginBottom: "5%" }}>
          <h2 className="task-info-text">Description:</h2>
          <div>
            <TextField
              id="standard-basic"
              variant="outlined"
              value={taskInfo.description}
              style={{ width: "100%" }}
              onChange={(event) => {
                const descriptionInput = event.target.value;
                setTaskInfo((prevState) => ({
                  taskInfo: {
                    ...prevState.taskInfo,
                    description: descriptionInput,
                  },
                }));
              }}
            />
          </div>
        </div>

        <Button
          variant="contained"
          color="primary"
          style={{
            width: "100%",
            height: "40px",
            fontFamily: "Quicksand, sans-serif",
            fontWeight: "700",
            fontSize: "18px",
          }}
          onClick={taskInfo.id ? submitEdit : submitAdd}
        >
          {taskInfo.name ? "Edit" : "Add"}
        </Button>
      </form>
    </Modal>
  );
};

export default AddNewTaskWindow;
