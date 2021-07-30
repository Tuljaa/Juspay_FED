import React from "react";
import { useDispatch,useSelector } from 'react-redux'
import {  show } from './Reducer'
export default function Hide(props){
 
    const dispatch = useDispatch()
    
    const dragItemComp = "Show"
    const startDrag=(ev)=>{
        ev.dataTransfer.setData("DragItem",dragItemComp)
             ev.dataTransfer.effectAllowed='link'
      }

    return (
      <>
      {
        (props.prop=="Disable DragDrop")?   
        <div  style={{width:'50%',height:'50%',border: '1px solid rgba(0, 0, 0, 1)'}}
          className="flex flex-row flex-wrap bg-pink-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
           <button onClick={() => dispatch(show())} >{"Show"} </button>
         </div>

        :
        <div draggable onDragStart={startDrag}
          className="flex flex-row flex-wrap bg-pink-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
           <button onClick={() => dispatch(show())} >{"Show"} </button>
         </div>
      }
      </>
    )
}