import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import { RxDropdownMenu } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom"
const Navbar = () => {
    const location  = useLocation();
    const [openNavbar, setOpenNavbar] = useState(false);

    useGSAP(()=> {
        if(window.innerWidth < 500){
        {openNavbar &&
       gsap.to('#navlinks', {
        duration: 0.1,
        y: 0
       })
      }
        {!openNavbar &&
       gsap.to('#navlinks', {
        duration: 0.1,
        y: -300
       })
      }
      
    }
    else{
      gsap.to('#navlinks', {
        duration: 0.1,
        y: 0
      })
    }
    }, [openNavbar])
    
  return (
    <div className="w-full flex justify-between mt-4 max-sm:flex-col max-sm:h-full">
        <div className="flex gap-[5rem] max-sm:justify-between max-sm:mr-3">
        <Link to={'/'} className="text-2xl text-amber-500 glow-effect ml-24 max-sm:ml-8 md:tracking-widest" id="nav-text">Aman Dhungel</Link>
        <RxDropdownMenu className="text-white max-sm:text-[3rem]  max-sm:flex max-xl:hidden xl:hidden" onClick={()=> setOpenNavbar(!openNavbar)}/>
        </div>
        <div className={`flex transition-all max-xl:flex md:translate-y-[300px] duration-500 gap-10 none max-sm:right-0 max-sm:${openNavbar ? 'flex-col' : 'hidden'} max-sm:absolute max-sm:z-10 max-sm:w-full max-sm:mt-20`} id="navlinks">
        <Link 
      to={'/'} 
      className={`text-md mt-auto mb-auto transition-all duration-1000  hover:text-amber-600 hover:underline hover:underline-offset-8  ${location.pathname === '/' ? 'text-amber-500  underline underline-offset-8 underline-amber-500' : 'text-white'}`}
    onClick={()=> setOpenNavbar(!openNavbar)}
    >
   Home
    </Link> 
      <Link 
        to="/about" 
        className={`text-md  mt-auto mb-auto transition-all duration-1000  hover:text-amber-600 hover:underline hover:underline-offset-8 ${location.pathname === '/about' ? 'text-amber-500 underline underline-offset-8 underline-amber-500' : 'text-white'}`}
        onClick={()=> setOpenNavbar(!openNavbar)}
      >
        About
      </Link>
      <Link 
        to="/work" 
        className={`text-md mt-auto mb-auto transition-all duration-1000   hover:text-amber-600 hover:underline hover:underline-offset-8 ${location.pathname === '/work' ? 'text-amber-500  underline underline-offset-8 underline-amber-500' : 'text-white'}`}
        onClick={()=> setOpenNavbar(!openNavbar)}
      >
        Work
      </Link>
      <Link 
        to="/blog" 
        className={`text-md mt-auto mb-auto mr-10  hover:text-amber-600 hover:underline hover:underline-offset-8 ${location.pathname === '/blog' ? 'text-amber-500  underline underline-offset-8 underline-amber-500' : 'text-white'}`}
      >
        </Link>
        </div>
    </div>
  )
}

export default Navbar