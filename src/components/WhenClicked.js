import React from "react";
import { useDispatch,useSelector } from 'react-redux'
import { move, hide, show,turn,updateCordinates,GoToXY, say2Sec} from './Reducer'
import Icon from "./Icon";
import Move from "./Move";

export default function WhenClicked(props){
 
    const dispatch = useDispatch()

    const [clickStatus, setclickStatus] = React.useState(false)
   

    const dragItemComp = "When"
    const startDrag=(ev)=>{
        ev.dataTransfer.setData("DragItem",dragItemComp)
        ev.dataTransfer.effectAllowed='link'
      }


      const counter = useSelector(state => state.counter)
            
      console.log(counter)

      const handleClick =()=>{

        setclickStatus(true)

        props.items.map( (item) => {
            if(item=="Move Steps"){     
              console.log(item,"IN ITEM MOVE")
              dispatch(updateCordinates(counter))   
              dispatch(move(counter))
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
        ) 
     }  
    return (
      <>
      {
        (props.prop=="Disable DragDrop")? 
        <div onClick={()=> handleClick()} style={{width:'50%',height:'50%',border: '1px solid rgba(0, 0, 0, 1)'}}
         className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
           {"When"}
           <Icon name="flag" size={15} className="text-green-600 mx-2" />
           {"clicked"}   
         </div>
        :
        <div draggable onDragStart={startDrag}  
        className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
          {"When"}
          <Icon name="flag" size={15} className="text-green-600 mx-2" />
          {"clicked"}
        </div>
      }
      </>
    )
}