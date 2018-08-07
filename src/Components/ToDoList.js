import React, { Component } from "react";
import ToDoItem from "./ToDoItem";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rand: 0 + Math.random() * (8 - 0),
      items: [
        /*{
          id: 0,
          itemText: "learn react",
          isChecked: false
        }*/
      ],

      colors: [
        "#74b9ff",
        "#a29bfe",
        "#fab1a0",
        "#fd79a8",
        "#55efc4",
        "#fab1a0",
        "#fdcb6e",
        "#00cec9",
        "#00b894"
      ]
    };
  }

  //fonction add item
  handleAdd = event => {
    //chaque input de list a sa propr classe reliée de son id
    let selector = ".input" + this.props.id;
    console.log(selector);
    const toDo = document.querySelector(selector);
    const toDoText = document.querySelector(selector);
    // if input vide so nothing
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

  //function delete item
  handleDelete = itemId => {
    this.setState({
      items: this.state.items.filter(item => item.id !== itemId)
    });
  };
  //find the last id
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

  //when press enter key add item without click to button add
  handleEnterPress = e => {
    if (e.key === "Enter") {
      this.handleAdd();
    }
  };

  render() {
    return (
      <div className=" bg-light p-0 " id={this.props.id}>
        <header
          className="text-center lead"
          style={{
            backgroundColor: this.state.colors[Math.floor(this.state.rand)]
          }}
        >
          {this.props.name}
        </header>
        <div>
          <input
            type="text"
            className={"form-control mt-2 rounded input" + this.props.id}
            placeholder="add a to do "
            onKeyPress={this.handleEnterPress}
          />
        </div>
        <div className="to-do-list bg-light p-3 ">
          {this.state.items.map((item, i) => (
            <ToDoItem
              key={i}
              onDelete={this.handleDelete}
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
