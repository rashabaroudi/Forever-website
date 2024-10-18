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

        <div onClick={()=>{setShowNav(!showNav)}} className='z-10 md:hidden cursor-pointer'>
           {showNav ? <img src={crossIcon} width={25} height={25}/> : <img src={menuIcon}  width={25} height={25}/>} 
          </div>


          {/* sidebar menu for small devices */}
             {showNav && (
        
               <ul className=' flex flex-col  items-center  absolute gap-[40px] bg-fuchsia-300
                 text-gray-950 right-0 bottom-0 transition-all overflow-hidden h-screen '>
              <div className='flex flex-row items-center justify-center gap-4 '>

                <Link  to='login' className=' cursor-pointer text-center items-center  m-10'>
                        
                        <img src={profileIcon} width={65} height={65} className='border rounded-full p-2' />
                        <span>profile</span>
                  
                </Link>
             
              </div>
            

                    {links.map(({id,link,route}) => (
                  <NavLink to={route} className=' flex flex-col  w-[100%] items-center px-4 py-4  border-b  cursor-pointer hover:scale-105 duration-200'>
                  <p className='text-3xl text-gray-950 font-thin font-signature uppercase '>{link}</p>
                  

                  </NavLink>
                  
                ))}

               </ul>

               

               
            )}

         
   

  </nav>
      
   
  )
}

export default Navbar
