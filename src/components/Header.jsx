import React, {useEffect, useState } from 'react'
import NavDropdown from './NavDropdown'
import { items } from './Nav-items'



function Header() {

  const [showInput, setShowInput] = useState(false)
  const [hidden,setHidden] = useState(false);
  const [lastScroll,setLastScroll] = useState(0)

  useEffect(()=>{

    const handleScroll = () =>{
      const currentScroll = window.scrollY

      if(currentScroll > 200 && currentScroll > lastScroll){
        setHidden(true)
      }else{
        setHidden(false)
      }

      setLastScroll(currentScroll)
    }

    window.addEventListener('scroll',handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)

  },[lastScroll])

  return (
    <>
      <div className={`menu ${hidden ? 'hide' : 'show'}`}>
         <div className='container'>
         <div className='mt-[25px]  w-full flex justify-around items-center sticky'>
            <img className='cursor-pointer' src="/logotype.png" alt="" />
            <div>
              {!showInput ? <img 
              onClick={() => setShowInput(true)} 
              className={ 'show'&& 'h-[17px] w-[17px] cursor-pointer'} 
              src="/search.png" 
              alt="" /> : 
                <input placeholder='Search...' className='inpSearch' type="text" />
              }
            </div>
        </div>
       </div>
        <hr className='mt-[25.5px] bg-[#E9E9E9]' />
      <div className="container">
          <nav className='text-center flex justify-center items-center gap-[32px] pt-[22px]'>
              <NavDropdown items={items} title={'Demo'}/>
              <NavDropdown items={items} title={'Post'}/>
              <NavDropdown items={items} title={'Features'}/>
              <NavDropdown items={items} title={'Categories'}/>
              <NavDropdown items={items} title={'Shop'}/>
              <li className='font-medium cursor-pointer'>Buy Now</li>
        </nav>
        <hr className='mt-[19.5px] bg-[#E9E9E9]'/>
      </div>
      </div>
    </>
  )
}

export default Header