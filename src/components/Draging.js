import { useState, useEffect } from "react";
import {useSelector } from 'react-redux'

export default function useDraggable(el) {

  const currCords=useSelector((state)=>state)

  const [cords, setOffset] = useState({ dx: currCords.counter.dx, dy: currCords.counter.dy });

  useEffect(() => {
    const handleMouseDown = event => {
      const startX = event.pageX - cords.dx;
      const startY = event.pageY - cords.dy;

      const handleMouseMove = event => {
        const newDx = event.pageX - startX;
        const newDy = event.pageY - startY;
        setOffset({ ...cords,  dx: newDx, dy: newDy });
      };
      
      document.addEventListener("mousemove", handleMouseMove);

      document.addEventListener(
        "mouseup",
        () => {
          document.removeEventListener("mousemove", handleMouseMove);
        
        },
        { once: true }
      );
    };

    el.current.addEventListener("mousedown", handleMouseDown);

    return () => {
      el.current.removeEventListener("mousedown", handleMouseDown);
    };
  }, [cords.dx,cords.dy]);
  
  useEffect(() => {
    el.current.style.transform = `translate3d(${cords.dx}px, ${cords.dy}px, 0)`;
  }, [cords.dx,cords.dy]); 

  //dispatch(updateCordinates(cords))
  //console.log("In Drgagging",cords.dx,cords.dy,el)
 
}
