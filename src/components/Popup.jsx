import React from 'react'

function Popup({title,text,close}) {
  return (
    <>
    <div onClick={close} className="fixed inset-0 bg-black/50 z-40 cursor-pointer">
        <div className="container ">
            <div className='flex justify-center items-center text-center pt-[200px]'>
            <div className="bg-white h-[500px] w-[500px] popup flex flex-col items-center pt-[100px]">
                <h2 className="text-lg font-semibold mb-4 text-[30px]">{title}</h2>
                <p className="mb-4 text-[#9B9B9B] text-[20px] pt-3">{text}</p>
            </div>
            </div>
        </div>
    </div>
    </>
)
}

export default Popup