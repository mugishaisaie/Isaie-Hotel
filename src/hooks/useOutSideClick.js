import React, { useEffect, useRef } from 'react'

function useOutSideClick(close) {
    const ref= useRef();
    
      useEffect(()=>{
        function handleClick(e){
          if(ref.current  && !ref.current.contains(e.target)){
            console.log("clicked outside");
            close();
          }
    
        }
           document.addEventListener("click",handleClick,true);
    
    
       return ()=>document.removeEventListener("click",handleClick,true);
      },[close])
  return ref;
  
}

export default useOutSideClick
