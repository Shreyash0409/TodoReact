import React, { useState } from "react";
import "./Todo.css";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import List from "./List";
import Tooltip from "@material-ui/core/Tooltip";

const Todolist = () => {
  //!Whenever we want to change the state we need to use the Hook in functional component of React
  const [item, setItem] = useState("");
  const [itemList, setItemList] = useState([]);

  const onInputEvent = (event) => {
    setItem((prevItemVal) => {
      return (prevItemVal = event.target.value);
    });
  };

  const addItem = (e) => {
    if (item == "") {
      alert("Please Add an Item First");
    } else {
      setItemList((prevItemListVal) => {
        return [...prevItemListVal, item];
      });
      //!For clearing the input text
      setItem("");
    }
  };

  const deleteItem = (id) => {
    console.log("Deleted");
    setItemList((prevItemList) => {
      return prevItemList.filter((arr, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>ToDo List</h1>
          <input
            input="text"
            placeholder="Add an item"
            onChange={onInputEvent}
            value={item}
          />
          <Tooltip title="Add">
            <Fab
              className="btn"
              aria-label="add"
              size="medium"
              onClick={addItem}
            >
              <AddIcon />
            </Fab>
          </Tooltip>

          <ol>
            {itemList.map((currItem, index) => {
              return (
                <List
                  key={index}
                  id={index}
                  text={currItem}
                  onSelect={deleteItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default Todolist;
