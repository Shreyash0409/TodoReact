import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";

const List = (props) => {
  return (
    <>
      <div className="todo_style">
        <li>{props.text}</li>
        <Tooltip title="Delete">
          <Fab
            className="deleteBtn"
            aria-label="add"
            size="small"
            onClick={() => {
              props.onSelect(props.id);
            }}
          >
            <DeleteIcon />
          </Fab>
        </Tooltip>
      </div>
    </>
  );
};
export default List;
