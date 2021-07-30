import React from "react";
import { useDispatch } from 'react-redux'
import { changecolor,updateCordinates } from './Reducer'
import { useState,useEffect } from "react";


export default function ChangeColor(props){
 
    const dispatch = useDispatch()
    const [steps, setsteps] = useState({color:"#FFAB19"})
 
    const handleChange=(event)=>{
        setsteps({...steps,color:event.target.value})
    }
    const handleMove= () =>{
        dispatch(changecolor(steps))
    }

    useEffect(() => {
        dispatch(updateCordinates(steps))
      }, [steps])
     
    const dragItemComp = "Change Color"
    const startDrag=(ev)=>{
        ev.dataTransfer.setData("DragItem",dragItemComp)
        ev.dataTransfer.effectAllowed='link'
      }

    return (
   <>{
    (props.prop=="Disable DragDrop")?   
        <div    style={{width:'50%',height:'50%',border: '1px solid rgba(0, 0, 0, 1)'}}
        className="flex flex-row flex-wrap bg-pink-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        <button onClick={() => handleMove()} >Change Color </button>
        <select onChange={(event)=> handleChange(event)} style={{ marginLeft:5, marginRight:5, width:30,color:'black'}}>      
        <option value="#FFAB19">Default</option>   
        <option value="#FFC0CB">pink</option>
        <option value="#FFFF00">yellow</option>
        <option value="#FF0000">red</option>
        <option value="#0000FF">blue</option>
        <option value="#8F00FF">voilet</option></select>  
        </div>
    :
           <div draggable onDragStart={startDrag}    
           className="flex flex-row flex-wrap bg-pink-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
            <button onClick={() => handleMove()} >Change Color </button>
            <select onChange={(event)=> handleChange(event)} style={{ marginLeft:5, marginRight:5, width:30,color:'black'}}>      
            <option value="#FFAB19">Default</option>   
            <option value="#FFC0CB">pink</option>
            <option value="#FFFF00">yellow</option>
            <option value="#FF0000">red</option>
            <option value="#0000FF">blue</option>
            <option value="#8F00FF">voilet</option></select>  
            </div>
            }</>
    )
}