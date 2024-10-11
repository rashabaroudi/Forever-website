import React from 'react'

const Navbar = () => {
  return (
   
    <nav className="flex items-center justify-between py-5 font-medium ">


      <div className="flex gap-20 ">

        <img src='/src/assets/logo.png' className="w-36"/>

         <ul className='flex gap-10 text-black'>
          <li className=''>Home</li>
          <li className=''>Collections</li>
          <li className=''>About</li>
          <li className=''>Contact</li>
         </ul>

      </div>

   

  </nav>
      
   
  )
}

export default Navbar
