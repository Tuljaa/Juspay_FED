import React from "react";
import { useDispatch,useSelector } from 'react-redux'
import { move, hide, show,turn,updateCordinates,GoToXY, say2Sec} from './Reducer'

export default function WhenClicked(props){
 
    const dispatch = useDispatch()

    const [steps, setsteps] = React.useState({time:0})
    const [display, setdisplay] = React.useState(true)
   

    const dragItemComp = "Wait"
    const startDrag=(ev)=>{
        ev.dataTransfer.setData("DragItem",dragItemComp)
        ev.dataTransfer.effectAllowed='link'
      }


      const counter = useSelector(state => state.counter)
            
      console.log(props)
      var ip

      const handleClick =()=>{
        setsteps({...steps,time:ip })

        props.items.map( (item) => {
            if(item=="Move Steps"){     
              console.log(item,"IN ITEM MOVE",display)
              if(steps.time!==0){
                setTimeout(()=>{
                  setdisplay(false)
               },steps.time)
               }
               if(!display){
                dispatch(move(counter))
               }              
            }
            if(item=="Turn clockwise"){
              dispatch(turn(counter))
            }
            if(item=="Turn Anticlockwise"){
              dispatch(turn(counter))
            }
            if(item=="GoTo"){
              dispatch(GoToXY())
            }
            if(item=="PointTo"){
              dispatch(turn(counter))
            }
            if(item=="Say" || item=="Think"||item=="Say text"){
              dispatch(say2Sec(counter))
            }
            if(item=="Hide"){
              dispatch(hide())
            }
            if(item=="Show"){
              dispatch(show())
            } 
        }
        ) }
        React.useEffect(() => {
            dispatch(updateCordinates(steps))
        }, [steps])

        const handleChange= (event)=> {
            event.preventDefault()
          ip=event.target.value
        }

    return (
      <>
      {
        (props.prop=="Disable DragDrop")? 
        <div  style={{width:'50%',height:'50%',border: '1px solid rgba(0, 0, 0, 1)'}}
         className="flex flex-row flex-wrap bg-red-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
           <button onClick={()=> handleClick()} >{"Wait"} </button>
            <input
            type="text" style={{ marginLeft:5, width:30,color:'black'}}
            onChange={(event)=> handleChange(event)}
            ></input>
         </div>
        :
        <div draggable onDragStart={startDrag}
        className="flex flex-row flex-wrap bg-red-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
          <button onClick={()=> handleClick()} >{"Wait"} </button>
          <input
          type="text" style={{ marginLeft:5, width:30,color:'black'}}
          onChange={(event)=> handleChange(event)}
          ></input>
        </div>
      }
      </>
    )
}