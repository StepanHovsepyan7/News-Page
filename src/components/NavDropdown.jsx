import React, { useState } from 'react'

function NavDropdown({title,items}) {

    const [open,setOpen] = useState(false)

  return (
    <>
        <li 
            onMouseEnter={() => setOpen(true)} 
            onMouseLeave={() => setOpen(false)} 
            className='cursor-pointer relative'>

            <div className='cursor-pointer flex items-center'>
                <span className='title'>{title}</span>
                <img className='w-[8px] h-[4px] ml-[6px]' src="/arrow.png" alt={title} />
            </div>

            {open && (
                <ul className='dropwdown absolute text-start top-full left-[20px] py-5 w-[176px] bg-white shadow-md'>
                    {items.map((e,i)=>{
                        return(
                            <li className='dropdown-list px-4 py-2 text-[13px]' key={i}>
                                {e}
                                <hr />
                            </li>
                        )
                    })}
                </ul>
        )}
        </li>
    </>
  )
}

export default NavDropdown