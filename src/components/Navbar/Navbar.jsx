import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import searchIcon from '../../assets/search_icon.svg' 
import cartIcon from '../../assets/cart_icon.svg' 
import profileIcon from '../../assets/profile_icon.svg' 
import menuIcon from '../../assets/menu_icon.svg' 
import crossIcon from '../../assets/cross_icon.svg' 

const Navbar = () => {

  const [showNav,setShowNav]=useState(false);

  const links=[
    {
      id:1,
      link:'home',
      route:'/'
    },

      {
        id:2,
        link:'collections',
         route:'/collections'
        
      },
      {
        id:3,
        link:'about',
         route:'/about'
        
      },
      {
        id:4,
        link:'contact',
         route:'/contactus'
        
      }
    
  ];

  return (

   
    <nav className="flex items-center justify-between py-5 font-medium  ">


      <div className="flex gap-20 ">

        <img src='/src/assets/logo.png' className="w-36"/>


      </div>

      <div className='menu'>
            <ul className='hidden md:flex'>
             {links.map(({id,link,route}) => (
              <NavLink to={route} className=' flex flex-col items-center px-4 cursor-pointer hover:scale-125 duration-200'>
               <p className='font-thin font-signature uppercase '>{link}</p>
               <hr className='hidden text-black w-2/4 items-center font-bold'/>

              </NavLink>
              
             ))}
             
             
            </ul>

       </div>
              
      <div className='hidden md:flex flex-row items-center justify-center gap-5'>
      
            <Link  to='collections' className='cursor-pointer'>
        
             <img src={searchIcon} width={20} height={20} />
        
            </Link>

            <Link  to='login' className='cursor-pointer'>
        
            <img src={profileIcon} width={20} height={20} />
      
          </Link>

            <Link  to='cart' className='cursor-pointer relative'>
        
             <img src={cartIcon} width={20} height={20} />
             <p className='absolute text-white bg-black rounded-full right-[-5px] bottom-[-5px] w-5 text-center text-[10px]'>10</p>
        
            </Link>

           
        </div>

        <div onClick={()=>{setShowNav(!showNav)}} className='z-10 md:hidden'>
           {showNav ? <img src={crossIcon} width={25} height={25}/> : <img src={menuIcon} width={25} height={25}/>} 
          </div>
            {showNav && (


                <ul className=' flex flex-col justify-center items-center absolute gap-[20px]  text-gray-950 top-0 left-0 w-1/2 h-1/2 right-[-100px]'>
                {links.map(({id,link,route}) => (
              <NavLink to={route} className=' flex flex-col  items-center px-4 cursor-pointer hover:scale-125 duration-200'>
               <p className='font-thin font-signature uppercase '>{link}</p>
               <hr className='hidden text-black w-2/4 items-center font-bold'/>

              </NavLink>
              
             ))}

                </ul>
            )}
         
   

  </nav>
      
   
  )
}

export default Navbar
