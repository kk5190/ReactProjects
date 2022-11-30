import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const backgroundColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + randomColor;
};

const Notes = ({ item, removeItem, editItem }) => {
  const { id, title } = item;
  return (
    <article
      key={id}
      className="grocery-item"
      style={{ backgroundColor: backgroundColor() }}
    >
      <p className="title">{title}</p>
      <div className="btn-container">
        <button type="button" className="edit-btn" onClick={() => editItem(id)}>
          <FaEdit />
        </button>
        <button
          type="button"
          className="delete-btn"
          onClick={() => removeItem(id)}
        >
          <FaTrash />
        </button>
      </div>
    </article>
  );
};

export default Notes;
