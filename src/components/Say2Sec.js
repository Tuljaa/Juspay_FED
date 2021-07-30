import React from "react";
import { useDispatch } from 'react-redux'
import { say2Sec,updateCordinates } from './Reducer'
import { useState,useEffect } from "react";

export default function Say2Sec(props){
 
    const dispatch = useDispatch()
 
    const [steps, setsteps] = useState({str:"",time:0})

    const dragItemComp = "Say"
    const startDrag=(ev)=>{
        ev.dataTransfer.setData("DragItem",dragItemComp)
        ev.dataTransfer.effectAllowed='link'
      }
 
    const handleChange=(event)=>{
            if(event.target.name=="str"){
              setsteps({...steps,str:event.target.value})
            }else{
              setsteps({...steps,time:parseInt(event.target.value)})
            }
    }
    useEffect(() => {
//dispatch(updateCordinates(steps))
    }, [steps])
   
    const handleMove= () =>{
        dispatch(say2Sec(steps))
    }
    return (

      <>{
        (props.prop=="Disable DragDrop")?   
        <div   style={{width:'50%',height:'50%',border: '1px solid rgba(0, 0, 0, 1)'}}
        className="flex flex-row flex-wrap bg-pink-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
          <button onClick={() => handleMove()} > Say </button>
          <input type="text"
          style={{ marginLeft:5, marginRight:5, width:60,color:'black'}}
          name="str" onChange={(event) => handleChange(event)} ></input>
          To
          <input type="text"  
           style={{ marginLeft:5, marginRight:5, width:30,color:'black'}}
          name="time" onChange={(event) => handleChange(event)} ></input> Sec
        </div>
        :
      <div draggable onDragStart={startDrag}   
      className="flex flex-row flex-wrap bg-pink-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        <button onClick={() => handleMove()} > Say </button>
        <input type="text" 
        style={{ marginLeft:5, marginRight:5, width:60,color:'black'}}
        name="str" onChange={(event) => handleChange(event)} ></input>
        To
        <input type="text" 
         style={{ marginLeft:5, marginRight:5, width:30,color:'black'}}
        name="time" onChange={(event) => handleChange(event)} ></input>Sec
      </div>
      }
      </>
    )
}