import React from "react";
import Move from './Move'
import Turn from './Turn'
import AntiClockTurn from './AntiClockTurn'
import GoTo from './GoTo'
import PointTo from './PointTo'
import Say2Sec from "./Say2Sec";
import ThinkSay from './ThinkSay'
import ChangeColor from './ChangeColor'
import ChangeSize from './ChangeSize'
import Hide from "./Hide";
import Show from './Show'
import WhenClicked from './WhenClicked'
import Wait from "./Wait";

export default function Sidebar(props) {

  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
       <div className="font-bold"> {"Motion"} </div>
      <Move/>  
      <Turn/>
      <AntiClockTurn/>
      <GoTo/> 
      <PointTo/> 
      <div className="font-bold"> {"Looks"} </div>
      <Say2Sec/> 
      <ThinkSay say="Say"/> 
      <ThinkSay say="Think"/> 
      <Hide/>
      <Show/>
      <ChangeColor/>
      <ChangeSize/>
      <div className="font-bold"> {"Events"} </div>
      <WhenClicked/>
    
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"When this sprite clicked"}
      </div>
      <div className="font-bold"> {"Control"} </div>

      <Wait/>

      <div className="flex flex-row flex-wrap bg-red-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        <button  >{"repeat"} </button>
      </div>
      <div className="flex flex-row flex-wrap bg-red-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        <button >{"Forever"} </button>
      </div>
   
    </div>
  );
}
