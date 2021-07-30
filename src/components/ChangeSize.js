import React from "react";
import { useDispatch } from 'react-redux'
import { changesize,updateCordinates } from './Reducer'
import { useState ,useEffect} from "react";

export default function ChangeSize(props){
 
    const dispatch = useDispatch()

     const [steps, setsteps] = useState({size:100})
 
    const handleChange=(event)=>{
      setsteps({...steps,size:parseInt(event.target.value)})
    }
    useEffect(() => {
      dispatch(updateCordinates(steps))
    }, [steps])
   
    const handleMove= () =>{
        dispatch(changesize(steps))
    }
    const dragItemComp = "Change Size"
    const startDrag=(ev)=>{
        ev.dataTransfer.setData("DragItem",dragItemComp)
        ev.dataTransfer.effectAllowed='link'
      }

    return (
      <>{
        (props.prop=="Disable DragDrop")?    
        <div    style={{width:'50%',height:'50%',border: '1px solid rgba(0, 0, 0, 1)'}}
          className="flex flex-row flex-wrap bg-pink-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        <button onClick={() => handleMove()} >{"Change Size"} </button>
        <input type="text" 
            style={{ marginLeft:5, marginRight:5, width:60,color:'black'}}
            name="str" onChange={(event) => handleChange(event)} ></input>
        </div>
        :
           <div draggable onDragStart={startDrag}    
           className="flex flex-row flex-wrap bg-pink-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
            <button onClick={() => handleMove()} >{"Change Size"} </button>
            <input type="text" 
             style={{ marginLeft:5, marginRight:5, width:60,color:'black'}}
              name="str" onChange={(event) => handleChange(event)} ></input>
</div>
 }</>
    )
}