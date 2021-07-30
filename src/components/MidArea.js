import React from "react";
import MidAreaFunc from "./MidAreaFunc";
import Turn from './Turn'
import AntiClockTurn from './AntiClockTurn'
import Move from './Move'
import GoTo from './GoTo'
import PointTo from './PointTo'
import Say2Sec from "./Say2Sec";
import ThinkSay from './ThinkSay'
import ChangeColor from './ChangeColor'
import ChangeSize from './ChangeSize'
import Hide from "./Hide";
import Show from './Show'
import WhenClicked from './WhenClicked'
import Draggable from 'react-draggable';
import { useDispatch,useSelector } from "react-redux";
import {  move,hide,show } from './Reducer'
import Wait from "./Wait";


export default function MidArea() {

  const [items, setItems] = React.useState([]);
  const dispatch = useDispatch();
 
  const itemDropped = item => setItems([...items,item]);
  const [Cords, setCords] = React.useState({x:0,y:0})
  const [whileState, setwhileState] = React.useState({x:0,y:0,items:[]})
  const [waitState, setwaitState] = React.useState({x:0,y:0,items:[]})


 const handleDrag = (ev,ui,item) => {
  if(item=="When"){
    setwhileState({
      ...whileState,
       x: ui.x,
       y: ui.y,
   });
  }else
    if(item=="Wait"){
      setwaitState({
        ...waitState,
        x:ui.x,
        y:ui.y
      })
    }else{
    setCords({
      ...Cords,
      x: ui.x,
      y:ui.y,
    })
  }

  };
  const handleStop = (item,key) => {
      if(item!="While" && whileState.x==Cords.x && !whileState.items.includes(item)) {
        setwhileState({
          ...whileState,
           items:[...whileState.items,item]
       });  
      }
      if(item!="Wait" && waitState.x==Cords.x && !waitState.items.includes(item)){
        setwaitState({
          ...waitState,
          items:[item]
        })
      }
  };
 
  //console.log("New Cords",Cords,whileState)

  return (
      <MidAreaFunc onItemDropped={itemDropped} dropEffect="copyLink">
              {
              items.map( (item,key) => (
                <Draggable key={key} 
                bounds={{ top: 0, left: 0, right: 200, bottom: 800 }}
                onDrag={(ev,ui)=>handleDrag(ev,ui,item)}
                onStop={()=>handleStop(item,key)} 
                allowAnyClick={ true }
                grid={ [10,10] }
                  ><div key={key}>
                      { (item=="Move Steps") ?
                        <Move prop={"Disable DragDrop"}/> 
                       :
                      null
                      }{ (item=="Turn clockwise") ?
                      <Turn prop={"Disable DragDrop"}/>
                      :
                      null
                    }{ (item=="Turn Anticlockwise") ?
                        <AntiClockTurn prop={"Disable DragDrop"}/>
                    :
                    null
                    }{ (item=="GoTo") ?
                        <GoTo prop={"Disable DragDrop"}/>
                    :
                    null
                    }{
                      (item=="PointTo") ?
                        <PointTo prop={"Disable DragDrop"}/>
                    :
                    null
                    }{
                      (item=="Say") ?
                        <Say2Sec prop={"Disable DragDrop"}/>
                    :
                    null
                    }{
                      (item=="Say text") ?
                      <ThinkSay say="Say" prop={"Disable DragDrop"}/> 
                    :
                    null
                    }{
                      (item=="Think") ?
                      <ThinkSay say="Think" prop={"Disable DragDrop"}/> 
                    :
                    null
                    }{
                      (item=="Hide")  ?
                     <Hide prop={"Disable DragDrop"}/>
                      : null
                    }{
                      (item=="Show")?
                     <Show prop={"Disable DragDrop"} />
                      :null
                    }{
                      (item=="Change Color")?
                     <ChangeColor prop={"Disable DragDrop"}/>
                      :null
                    }{
                      (item=="Change Size")?
                     <ChangeSize prop={"Disable DragDrop"}/>
                      :null
                    }{
                      (item=="When")?
                     <WhenClicked prop={"Disable DragDrop"} items={whileState.items}/>
                      :null
                    }{
                      (item=="Wait")?
                       <Wait prop={"Disable DragDrop"} items={waitState.items} />
                      :null
                    }

                </div>
                </Draggable> 
              ))}

      </MidAreaFunc>
  );
};

