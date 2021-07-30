import React from "react";
import { useDispatch } from 'react-redux'
import { turn, updateCordinates } from './Reducer'
import { useState,useEffect } from "react";


export default function PointTo(props){
 
    const dispatch = useDispatch()
    const [steps, setsteps] = useState({degree:0})
 
    const handleChange=(event)=>{
      setsteps({...steps,degree:parseInt(event.target.value)})
    }
    useEffect(() => {
      dispatch(updateCordinates(steps))
    }, [steps])
   
    const handleMove= () =>{
        dispatch(turn(steps))
    } 
    const dragItemComp="PointTo"
    const startDrag=(ev)=>{
        ev.dataTransfer.setData("DragItem",dragItemComp)
        ev.dataTransfer.effectAllowed='link'
      }
    return (
        <>
        {       (props.prop=="Disable DragDrop")?   
              <div  style={{width:'50%',height:'50%',border: '1px solid rgba(0, 0, 0, 1)'}}
              className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
              <button onClick={() => handleMove()}
              > Point In Direction </button>
                <select onChange={(event)=> handleChange(event)} style={{ marginLeft:5, marginRight:5, width:30,color:'black'}}>      
                    <option value="0">0</option>
                    <option value="90">90</option>
                    <option value="180">180</option>
                    <option value="270">270</option>
                    <option value="360">360</option>
          </select>
            </div>
        :
              <div draggable onDragStart={startDrag}   
              className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
              <button onClick={() => handleMove()}
              > Point In Direction </button>
                <select onChange={(event)=> handleChange(event)} style={{ marginLeft:5, marginRight:5, width:30,color:'black'}}>      
                    <option value="0">0</option>
                    <option value="90">90</option>
                    <option value="180">180</option>
                    <option value="270">270</option>
                    <option value="360">360</option>
          </select>
            </div>
          }
            </>
    )
}