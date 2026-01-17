import NavDropdown from './NavDropdown'
import { items } from './Nav-items'
import { useEffect } from 'react'

function MobileHeader({open,close}) {
    

  useEffect(()=>{
    if(open){
      document.body.classList.add("menu-open")
    }else{
      document.body.classList.remove("menu-open")
    }
    
    return () => document.body.classList.remove("menu-open")

  },[open])

    if (!open) return null

  return (
    <>
     <div 
        onClick={close}
        className="fixed inset-0 bg-white/50 z-40 cursor-pointer"
      />
       <div className="container">
         <div className='fixed bg-white h-full w-[320px] mobileMenu'>
            <div className='pt-[32px] flex justify-around items-center'>
                <img className='cursor-pointer' src="logotype.png" alt="" />
                <img onClick={close} className='h-[18px] w-[18px] cursor-pointer' src="x.png" alt="" />
            </div>
            <hr className='bg-[#E9E9E9] mt-[1.6rem]' />

            <div className='pl-[20px] pt-[30px]'>
                <NavDropdown  items={items} title={'Demo'}/>
                <hr className='mt-[16px] bg-[#E9E9E9]' />
                <NavDropdown items={items} title={'Post'}/>
                <hr className='mt-[16px] bg-[#E9E9E9]' />
                <NavDropdown items={items} title={'Features'}/>
                <hr className='mt-[16px] bg-[#E9E9E9]' />
                <NavDropdown items={items} title={'Categories'}/>
                <hr className='mt-[16px] bg-[#E9E9E9]' />
                <NavDropdown items={items} title={'Shop'}/>
            </div>
        </div>
       </div>
    </>
  )
}

export default MobileHeader