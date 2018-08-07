import React, { Component } from "react";
import "./Components/ToDoList";
import ToDoList from "./Components/ToDoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: []
    };
  }

  handleAddList = () => {
    const list = document.querySelector("#list");
    const listText = document.querySelector("#list");
    // if input vide so nothing
    if (listText.value === "") return;
    else {
      const lists = [...this.state.lists];
      lists.push({
        name: listText.value,
        id: this.lastId() + 1
      });
      this.setState({ lists });
    }
    list.value = "";
  };

  //find the last id
  lastId() {
    const lists = [...this.state.lists];
    return lists.reduce((max, list) => (list.id > max ? list.id : max), 0);
  }

  //when press enter key add item without click to button add
  handleEnterPress = e => {
    if (e.key === "Enter") {
      this.handleAddList();
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="fluid-container">
          <div className="row col-md-5 m-2">
            <input
              type="text"
              className="form-control col-4 mt-2 "
              placeholder="Add new List"
              id="list"
              onKeyPress={this.handleEnterPress}
            />
            <div className="col-1 mt-3 cursor-pointer">
              <img
                src={require("./res/add.png")}
                onClick={this.handleAddList}
                id="Addlist"
              />
            </div>
          </div>
        </div>
        <div className="fluid-container m-2">
          <nav class="nav-scroller row">
            {this.state.lists.map((list, i) => (
              <div className="col-sm-3 list-container" key={list.id}>
                <ToDoList name={list.name} id={list.id} />
              </div>
            ))}
          </nav>
        </div>
      </React.Fragment>
    );
  }
}
export default App;
