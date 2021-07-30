import React from "react";
import { useDispatch } from 'react-redux'
import { GoToXY,updateCordinates } from './Reducer'
import { useState,useEffect } from "react";


export default function GoTo(props){
 
    const dispatch = useDispatch()

    const [steps, setsteps] = useState({x:0,y:0})
 
    const handleChange=(event)=>{
        if(event.target.name=='dx'){
          setsteps({...steps,x:parseInt(event.target.value)})
        }else{
          setsteps({...steps,y:parseInt(event.target.value)})
        }
    }
    useEffect(() => {
      dispatch(updateCordinates(steps))
    }, [steps])
   
    const handleMove= () =>{
        dispatch(GoToXY())
    }
    const dragItemComp="GoTo"
    const startDrag=(ev)=>{
        ev.dataTransfer.setData("DragItem",dragItemComp)
        ev.dataTransfer.effectAllowed='link'
      }
    return (
        <>{
            (props.prop=="Disable DragDrop")? 
            <div  style={{width:'50%',height:'50%' ,border: '1px solid rgba(0, 0, 0, 1)'}}
            className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
            <button onClick={() => handleMove()}
            > Go To X </button>
              <input type="text" name='dx' style={{ marginLeft:5, marginRight:5, width:30,color:'black'}}
                      onChange={(event)=> handleChange(event)}></input>
            Y
            <input type="text" name='dy' style={{ marginLeft:5, width:30,color:'black'}}
                      onChange={(event)=> handleChange(event)}></input>
          </div>
            
            :
              <div draggable onDragStart={startDrag} 
              className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
              <button onClick={() => handleMove()}
              > Go To X </button>
                <input type="text" name='dx' style={{ marginLeft:5, marginRight:5, width:30,color:'black'}}
                        onChange={(event)=> handleChange(event)}></input>
              Y
              <input type="text" name='dy' style={{ marginLeft:5, width:30,color:'black'}}
                        onChange={(event)=> handleChange(event)}></input>
            </div>
            }
         </>
    )
}