import React from "react";
import { useDispatch } from 'react-redux'
import { turn,updateCordinates } from './Reducer'
import { useState,useEffect } from "react";


export default function Turn(props){
 
    const dispatch = useDispatch()
    const [steps, setsteps] = useState({degree:0})
    const dragItemComp = "Turn Anticlockwise"
    const startDrag=(ev)=>{
        ev.dataTransfer.setData("DragItem",dragItemComp)
        ev.dataTransfer.effectAllowed='link'
      }
 
     const handleMove= () =>{
         dispatch(turn(steps))
     }
     useEffect(() => {
      dispatch(updateCordinates(steps))
    }, [steps])
   
     const handleChange = (ev) =>{
      const degree=ev.target.value
      setsteps({...steps,degree:parseInt(-degree)})
    }

    return (
      <>
      {  (props.prop=="Disable DragDrop")?   
              <div   style={{width:'50%',height:'50%',border: '1px solid rgba(0, 0, 0, 1)'}}
              className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
              <button onClick={() => handleMove()}
              > Turn </button>
              <input type='text' style={{color:'black',width:'40%',marginLeft:'5%'}} onChange={(ev)=>handleChange(ev)} name="turn" ></input>
            <p>AntiClockwise</p>
            </div>
            :
              <div draggable onDragStart={startDrag}   
              className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
              <button onClick={() => handleMove()}
              > Turn </button>
               <input type='text' style={{color:'black',width:'40%',marginLeft:'5%'}} onChange={(ev)=>handleChange(ev)} name="turn" ></input>
            <p>AntiClockwise</p>       
            </div>    
            }
            </>
    )
}