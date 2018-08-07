import React, { Component } from "react";

const ToDoItem = props => {
  return (
    <div className="container-fluid bg-white border-bottom p-2 my-2 item-container">
      <div className="row">
        <div className="col-1">
          <input
            type="checkbox"
            checked={props.item.isChecked && "checked"}
            onChange={() => {
              props.onCheckChange(props.item);
            }}
          />
        </div>
        <div
          className="col-9 lead cursor-pointer text-item"
          onClick={() => {
            props.onCheckChange(props.item);
          }}
          style={{
            textDecoration: props.item.isChecked ? "line-through" : "none",
            color: props.item.isChecked && "grey"
          }}
        >
          {props.item.itemText}
        </div>
        <div className="col-1">
          <img
            className="cursor-pointer"
            src={require("../res/delete.png")}
            onClick={() => {
              props.onDelete(props.item.id);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ToDoItem;
