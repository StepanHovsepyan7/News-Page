import React from 'react'

function Cards({tags,title,autor,date,views,img,text,onClick}) {
  return (
    <>
            <div className='cursor-pointer card' onClick={onClick}>
                <img className='w-[360px] h-[230px]' src={img} alt={title} />
                <span className='mt-[13px] text-[13px] text-[#EB0028] font-bold leading-[13px]'>{tags}</span>
                <h2 className='mt-[16px] max-w-[360px] font-bold text-[24px] leading-[30px]'>{title}</h2>
               <div className='mt-[16px] flex gap-[13px] items-center'>
                <span className='text-[12px] leading-[12px] author'>{autor}</span>
                <span className='text-[#9B9B9B] text-[12px] leading-[12px] date'>{date}</span>
                <span className='text-[#9B9B9B] text-[12px] leading-[12px] date'>{views}</span>
               </div>
                <p className='mt-[16px] text-[#9B9B9B] text-[14px] date leading-[20px] max-w-[360px] '>{text}</p>
            </div> 
    </>
  )
}

export default Cards