import React from 'react'
import {useEffect, useState} from 'react';
const Scrolltop = () => {
    const [display, setdisplay] = useState(false);
    useEffect(()=>{
  
      const scrolling=()=>{
        let position = document.documentElement.scrollTop;
       if(position >=200 ){
        setdisplay(true);
       } else {setdisplay(false)}
      }
      console.log(display);
      window.addEventListener('scroll', scrolling);
  
      // return(()=>{
      //   window.removeEventListener('scroll', scrolling);
      // })
    },[])
    const backToTop=()=>{
      window.scrollTo({
        top:0, behavior:'smooth'
      })
    }
  return (
   <>
   {display && <button 
    onClick={backToTop} 
    style={{width:'35px',height:'35px',background:'inherit',position:'fixed',bottom:'20px', right:'15px',borderRadius:'50%',border:'2px solid black', fontSize:'30px',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <i class='bx bx-up-arrow-alt'></i>
        </button>}
   </>
  )
}

export default Scrolltop;