import React from "react";
import { useDispatch,useSelector } from 'react-redux'
import {  move,updateCordinates } from './Reducer'
import { useState,useEffect } from "react"

export default function Move(props){
 
    const dispatch = useDispatch()
    const [steps, setsteps] = useState({x:0,y:0})

    const handleMove= (event) =>{
      console.log("handleMove")
        dispatch(move(steps))
    } 
    useEffect(() => {
      dispatch(updateCordinates(steps))
    }, [steps])
   
    const dragItemComp = "Move Steps"
    const startDrag=(ev)=>{
        ev.dataTransfer.setData("DragItem",dragItemComp)
        ev.dataTransfer.effectAllowed='copyLink'
      }
      const handleChange = (ev) =>{
        const stepX=ev.target.value
        setsteps({...steps,x:parseInt(stepX)})
      }
      console.log(props)

    return (
      <>
      {
        (props.prop=="Disable DragDrop")?   <>

        <div style={{width:'50%',height:'50%' , border: '1px solid rgba(0, 0, 0, 1)' }}
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        <button onClick={(event) => handleMove(event)}
        > MOVE STEPS</button>
        <input type='text' style={{color:'black',width:'40%',marginLeft:'5%'}} onChange={(ev)=>handleChange(ev)} name="steps" ></input>
      </div> </>
        :
              <div draggable onDragStart={startDrag}  style={{width:'100%',height:'50%'}}
              className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
              <button onClick={(event) => handleMove(event)}
              > MOVE STEPS</button>
                <input type='text' style={{color:'black',width:'40%',marginLeft:'5%'}} onChange={(ev)=>handleChange(ev)} name="steps" ></input>
            </div>
      }
      </>
    )
}