import React, { useState } from "react";
import Item from "../components/Item";
import DropWrapper from "../components/DropWrapper";
import Col from "../components/Col";
import { data, statuses } from "../data";
import AddButton from "../components/AddButton";

const Homepage = () => {
  const [items, setItems] = useState(data);

  const [remountCount, setRemountCount] = useState(0);
  const refresh = () => setRemountCount(remountCount + 1);

  const onDrop = (item, monitor, status) => {
    const mapping = statuses.find((si) => si.status === status);

    setItems((prevState) => {
      const newItems = prevState
        .filter((i) => i.id !== item.id)
        .concat({ ...item, status, icon: mapping.icon });
      return [...newItems];
    });
  };

  const moveItem = (dragIndex, hoverIndex) => {
    const item = items[dragIndex];
    setItems((prevState) => {
      const newItems = prevState.filter((i, idx) => idx !== dragIndex);
      newItems.splice(hoverIndex, 0, item);
      return [...newItems];
    });
  };

  const addItem = (item) => {
    items.push(item);
    //const mapping = statuses.find((si) => si.status === status);
    refresh();
    //To-Do
  };

  const editItem = (item) => {
    console.log("CALLLLLLLLED!");
    items[item.id - 1] = item;
    refresh();
  };

  return (
    <div className={"row"}>
      {statuses.map((s) => {
        return (
          <div key={status} className={"col-wrapper"}>
            <h2 className={"col-header"}>{s.status.toUpperCase()}</h2>
            <DropWrapper onDrop={onDrop} status={s.status}>
              <Col>
                {items
                  .filter((i) => i.status === s.status)
                  .map((i, idx) => (
                    <Item
                      key={i.id}
                      item={i}
                      index={idx}
                      moveItem={moveItem}
                      editItem={editItem}
                      status={s}
                    />
                  ))}
                {s.status === "To-Do" ? (
                  <AddButton addItem={addItem} />
                ) : (
                  <p></p>
                )}
              </Col>
            </DropWrapper>
          </div>
        );
      })}
    </div>
  );
};

export default Homepage;
