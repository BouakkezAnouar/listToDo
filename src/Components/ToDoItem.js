import React, { Component } from "react";

class ToDoItem extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid bg-white border-bottom p-3 my-2  ">
        <div className="row">
          <div className="col-1">
            <input
              type="checkbox"
              checked={this.props.isChecked && "checked"}
              onChange={() => {
                this.props.onCheckChange(this.props.item);
              }}
            />
          </div>
          <div
            className="col-10 lead"
            onClick={() => {
              this.props.onCheckChange(this.props.item);
            }}
            style={{
              textDecoration: this.props.isChecked ? "line-through" : "none",
              color: this.props.isChecked && "grey"
            }}
          >
            {this.props.itemText}
          </div>
          <div className="col-1">
            <button
              className="btn sm-btn btn-danger"
              onClick={() => {
                this.props.onDelete(this.props.id);
              }}
            >
              x
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ToDoItem;

/*  <div className="col-1 ">
            <input
              type="checkbox"
              checked={this.props.isChecked && "checked"}
              className="checkbox mr-2 "
            />
          </div>
          <div>
            <p
              className="col-9"
              className={"checkmark  " + this.props.isChecked && "checked"}
            >
              {this.props.itemText}
            </p>
          </div>
          <div className="col-1">
            <button type="button" className="btn btn-default btn-sm col-2 px-3">
              <span className="glyphicon glyphicon-remove text-center" />x
            </button>
          </div>
          */
