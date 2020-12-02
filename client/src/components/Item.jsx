import React, { Fragment, useState, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import Window from "./Window";
import ITEM_TYPE from "../data/types";
import CreateIcon from "@material-ui/icons/Create";
import AddNewTaskWindow from "./AddNewTaskWindow";

const Item = ({ item, index, moveItem, status, editItem }) => {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: ITEM_TYPE,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoveredRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
      const mousePosition = monitor.getClientOffset();
      const hoverClientY = mousePosition.y - hoveredRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    item: { type: ITEM_TYPE, ...item, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [show, setShow] = useState(false);
  const onOpen = () => setShow(true);
  const onClose = () => setShow(false);

  const [showEdit, setShowEdit] = useState(false);
  const onOpenEdit = () => setShowEdit(true);
  const onCloseEdit = () => setShowEdit(false);

  drag(drop(ref));

  return (
    <Fragment>
      <div ref={ref} style={{ opacity: isDragging ? 0 : 1 }} className={"item"}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: "80%" }} onClick={onOpen}>
            <div
              className={"color-bar"}
              style={{
                backgroundColor: item.priorityColor,
                display: "inline-block",
              }}
            />
            <span> {item.assignedPerson}</span>
            <p className={"item-title"}>{item.title}</p>
          </div>

          <div onClick={onOpenEdit}>
            <CreateIcon />
          </div>
        </div>
      </div>
      <Window item={item} onClose={onClose} show={show} />
      <AddNewTaskWindow
        show={showEdit}
        onClose={onCloseEdit}
        addItem={() => console.log("n/a")}
        editItem={editItem}
        currentTaskInfo={{
          id: item.id,
          name: item.title,
          assignedBy: item.assignedPerson,
          description: item.content,
          startDate: item.startDate,
          endDate: item.endDate,
          priorityColor: item.priorityColor,
        }}
      />
    </Fragment>
  );
};

export default Item;
