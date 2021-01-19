import React from "react";
import { DragType, DropType } from "../interfaces/DragAndDrop";
import { useDrop } from "react-dnd";
import classNames from "classnames";

export const TrashBin: React.FC = () => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: [DragType.Person, DragType.Role],
    drop: () => ({ name: "Trash", type: DropType.TrashBin }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const classes = classNames({
    "trash-bin": true,
    "drop-target": isOver,
  });

  return <div ref={drop} className={classes} />;
};
