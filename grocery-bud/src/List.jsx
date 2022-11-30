import React from "react";
import Notes from "./Notes";

const List = ({ items, removeItem, editItem }) => {
  return (
    <div className="grocery-list">
      {items.map((item) => (
        <Notes item={item} removeItem={removeItem} editItem={editItem} />
      ))}
    </div>
  );
};

export default List;
