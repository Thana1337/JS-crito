import React, { useEffect, useState } from 'react'

const ScrollToTop = () => {

    const [position, setPosition] = useState(0)
    
    useEffect(()=>{
        window.addEventListener('scroll', () => setPosition(window.scrollY))
        return() => window.removeEventListener('scroll',()=>{})
    },[])

    const ScrollTop =() => {
        window.scrollTo({ 
            top: 0
        })
    }

  return (
    <>
        <button onClick={ScrollTop} className={`ScrollToTop ${position < 150 ? 'hide': ''}`} ><i className="fa-solid fa-arrow-up"></i></button>
    </>


  )
}
 
export default ScrollToTop