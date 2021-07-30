import React from "react";
import { useState } from "react";

export default function MidAreaFunc(props) {

    const [isOver, setIsOver] = React.useState(false);
    const [cords, setOffset] = useState({ dx: 0, dy: 0 });

    const dragOver = ev => {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = props.dropEffect;
    };

    const drop = ev => {
        const droppedItem = ev.dataTransfer.getData("DragItem");
        if (droppedItem) {
            props.onItemDropped(droppedItem);
        }
          setIsOver(false);
    };

    const dragEnter = ev => {
        ev.dataTransfer.dropEffect = props.dropEffect;
        setIsOver(true);
    };

    const dragLeave = () => setIsOver(false);

    return (
        <div
            onDragOver={dragOver}
            onDrop={drop}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            style={{width:'100%',height:'100%',cursor:'pointer'}}>
            {props.children}
        </div>
    );
}