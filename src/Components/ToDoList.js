import React, { Component } from "react";
import ToDoItem from "./ToDoItem";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  //fonction add
  handleAdd = () => {
    const toDo = document.querySelector("#todo");
    const toDoText = document.querySelector("#todo");
    if (toDoText.value === "") return;
    else {
      const items = [...this.state.items];
      items.push({
        itemText: toDoText.value,
        isChecked: false,
        id: this.lastId() + 1
      });
      this.setState({ items });
    }
    toDo.value = "";
  };

  //function delete
  handleDelete = itemId => {
    this.setState({
      items: this.state.items.filter(item => item.id !== itemId)
    });
    console.log("deleted");
  };

  lastId() {
    const items = [...this.state.items];
    return items.reduce((max, item) => (item.id > max ? item.id : max), 0);
  }

  handleCheckChange = item => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };
    items[index].isChecked = !items[index].isChecked;
    this.setState({ items });
  };

  render() {
    return (
      <div className="container-fluid my-3 col-md-4">
        <header className="bg-primary text-center lead">Informatique</header>
        <div>
          <input
            type="text"
            className="form-control mt-2"
            id="todo"
            placeholder="add a to do "
          />
        </div>
        <div className="to-do-list container bg-light p-3">
          {this.state.items.map((item, i) => (
            <ToDoItem
              key={i}
              itemText={item.itemText}
              isChecked={item.isChecked}
              onDelete={this.handleDelete}
              id={item.id}
              onCheckChange={this.handleCheckChange}
              onClick={this.handleCheckChange}
              item={item}
            />
          ))}
        </div>
        <footer>
          <button className="btn btn-lg w-100" onClick={this.handleAdd}>
            Add
          </button>
        </footer>
      </div>
    );
  }
}

export default ToDoList;
