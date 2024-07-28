import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Link } from "react-router-dom"
import pdf from '../assets/AmanDhungel-Resume.pdf'

const Home = () => {
    
    useGSAP(()=> {
        gsap.to('.logo', {
            delay: 0.5,
            duration: 1,
            y: 0,
            opacity: 1,
            ease: "power2.out",
            stagger: 0.3
        })

        gsap.to('#heading', {
            duration: 2,
            opacity: 1,
            ease: "power2.out",
        })
        gsap.to('#buttons', {
            delay: 1,
            opacity: 1,
            x: 0,
            ease: "power2.out",
        })

        gsap.to('.name', {
            duration: 1,
            x: 0,
            ease: "power2.out",
        })
        gsap.to('#fullstack', {
            duration: 3,
            delay:1,
            x: 0,
            text: "Full-Stack Developer Creating a Seamless flow of Webpages",
        })
     

    }, [])
  return (
    <div className="lg:h-[70vh] flex flex-col gap-10 items-center justify-center mt-auto mb-auto opacity-0 max-sm:ml-4 overflow-hidden" id="heading">
     <h1 className="flex gap-3 text-3xl text-white tracking-widest max-sm:flex-col max-sm:mt-10">Hi, I{"'"}m <span className="text-amber-600 translate-x-[100px]  name">Aman Dhungel</span></h1>
     <hr className="border-amber-500 w-[20rem] overflow-hidden max-sm:w-[15rem] max-sm:-ml-2" id="hrtag"/>
     <div className="flex flex-col gap-10">
      <h2 className="text-xl text-white tracking-widest capitalize max-sm:ml-5 italic" id="fullstack">Full-Stack Web Developer Creating a Seamless flow of Webpages</h2>
      <div className="flex gap-28 max-sm:gap-2 max-sm:ml-1 sm:ml-4 sm:gap-5 lg:gap-28">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtTsfaeKMgc-1IYdjrjgD2eWyIS8ZDSPQPFQ&s" className="rounded-xl object-cover shadow-lg shadow-slate-500 logo" width={50} height={50} alt="" />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGx_cXS9Z-WaZKNAEpr-eTnWJb57Rk00U8Ww&s" className="rounded-xl object-cover shadow-lg shadow-slate-500 logo " width={50} height={50} alt="" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" className="shadow-lg shadow-slate-500 rounded-xl object-cover logo" width={50} height={50} alt="" />
      <img src="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png" className="rounded-xl object-contain shadow-lg shadow-slate-500 logo" width={50} height={50} alt="" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/640px-Node.js_logo.svg.png" className="rounded-xl object-contain shadow-lg shadow-slate-500  logo"  width={50} height={50} alt="" />
      </div>
     </div>
     <div className="flex gap-10 translate-x-[100px] opacity-0 max-sm:flex-col" id="buttons">
      <Link to={'/Portfolio-main/about'} className="rounded-xl text-xl text-white text-center bg-slate-900 p-5 tracking-widest w-[15rem] hover:bg-slate-800 transition-all shadow-lg shadow-slate-500">About Me</Link>
      <a href={pdf} className="rounded-xl text-xl text-white bg-slate-900 tracking-wider p-5 w-[15rem] shadow-lg shadow-slate-500  hover:bg-slate-800 transition-all max-sm:mb-10">Download Resume</a>
     </div>
    </div>
  )
}

export default Home