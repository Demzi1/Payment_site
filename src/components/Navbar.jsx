import React,{useState} from 'react'
import {logo, close,menu} from "../assets"
import {navLinks} from "../constants"


const Navbar = () => {
    const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt='bank img' className='w-[124px] h-[32px]' />

      <ul className='list-none sm:flex hidden justify-end items-center flex-1 '>
        {navLinks.map((navlink, index)=>(
          <li key={navlink.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-[white] ${index == navLinks.length -1? 'mr-0' : 'mr-10'}`}>
            <a href={`#${navlink.id}`}>{navlink.title}</a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden  flex flex-1 justify-end items-center'>
        <img src={toggle? close : menu} className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={()=>setToggle((prevToggle)=>!prevToggle)}/>
        <div className={`${toggle? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1 '>
          {navLinks.map((navlink, index)=>(
            <li key={navlink.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-[white] ${index == navLinks.length -1? 'mr-0' : 'mb-4'}`}>
              <a href={`#${navlink.id}`}>{navlink.title}</a>
            </li>
          ))}
          </ul>
        </div>
      </div>

    </nav>
  )
}

export default Navbar