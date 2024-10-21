import React from 'react'

const SectionHeader = ({title_part1,title_part2,description}) => {
  return (
    <div className='flex flex-col py-8 items-center '>
       
      <div className='flex flex-row gap-[5px] justify-center  items-center w-full text-gray-700'>
        <h1 className=' gap-[5px] uppercase  text-3xl  md:text-2xl font-signature '><span className='text-gray-500'>{title_part1} </span>{title_part2}</h1>
        <hr className='text-gray-700 w-10 border-gray-700 items-center font-extrabold '/>
      </div>
      
      <p className='max-w-screen-lg text-center text-gray-800'>{description}</p>
    </div>
  )
}

export default SectionHeader
