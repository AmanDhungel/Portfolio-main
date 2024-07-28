import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { CiLinkedin } from "react-icons/ci"
import { FaTwitter } from "react-icons/fa"
import { FaGithub } from "react-icons/fa6"
import { MdOutlinePhoneEnabled } from "react-icons/md"
import { SiGmail } from "react-icons/si"

const About = () => {
    useGSAP(()=> {
     gsap.to('#about', {
      duration: 1,
      opacity: 1,
      y: 15,
      ease: "power2.inOut"
     })
    }, [])

  return (
    <>
    <div className="opacity-0 translate-y-[10rem] overflow-hidden max-sm:mt-6 xl:mt-10" id="about">
    <div className="text-white flex flex-col justify-center items-center mt-10">
        <h1 className="text-3xl font-bold">Aman Dhungel</h1>
        <hr className="border-amber-500 w-[20rem] drop-shadow-2xl shadow-amber-500 mt-3"/>
        <div className="flex gap-3 mt-5 max-sm:flex-col">
            <a href="tel: 9867806220" className="underline underline-offset-8 gap-2  flex"><MdOutlinePhoneEnabled className="text-2xl"/>+977 9867806220</a> |
            <a href="mailto: dhungelaman2000@gmail.com" className="underline underline-offset-8 gap-2  flex"><SiGmail className="text-2xl"/>@Mail Me</a> |
            <a href="https://www.linkedin.com/in/aman-dhungel-1a4773187/" target="_blank" className="underline underline-offset-8 gap-2 text-blue-500 flex"><CiLinkedin className="text-2xl"/>LinkedIn</a> |
            <a href="https://github.com/AmanDhungel" target="_blank" className="underline underline-offset-8 gap-2 flex"><FaGithub className="text-2xl"/>Github</a> |
            <a href="https://x.com/dhungel_aman" target="_blank" className="underline underline-offset-8 gap-2 flex"><FaTwitter className="text-2xl text-white"/>Twitter</a> 
        </div>
    </div>
        <div className="flex flex-col gap-5 mt-10 ml-5 items-center text-start justify-start mb-10">
        <h1 className="text-3xl font-bold text-white text-start">Education</h1>
        <hr className="border-amber-500 w-11/12 drop-shadow-2xl shadow-amber-500 mt-3"/>
        <div className="flex flex-col w-11/12">
        <h3 className="text-xl italic font-bold text-white flex justify-between max-sm:flex-col max-sm:gap-9"><span className="flex flex-col italic">ISMT(University of Sunderland) <span className="text-gray-500 text-lg italic">B. Sc. IT</span></span> <span className="flex flex-col gap-3">Tinkune,Kathmandu<span>2019-2023</span></span></h3>
        </div>
        <h1 className="text-3xl font-bold text-white text-start mt-10 capitalize">Experiences</h1>
        <hr className="border-amber-500 w-11/12 drop-shadow-2xl shadow-amber-500 mt-3"/>
        <div className="flex flex-col w-11/12">
        <h3 className="text-xl italic font-bold text-white flex justify-between"><span className="flex flex-col italic">SS Store & Suppliers — Frontend Developer <span className="text-gray-500 text-lg italic">Bardibas, Mohattari</span></span> <span>2023-2024(Contract)</span></h3>
        <p className="text-white italic w-10/12 mt-3"> Through the SS Store & Suppliers, I had the privilege of contributing my technical expertise to a store that provide 
            individual with the availability of products. In this project, I collaborated with a SS Store to create a digital
            platform that seamlessly bridges the availability of the Store and Store Presence in Online Market. From designing an
            intuitive user interface, every aspect was meticulously crafted to ensure a smooth and secure experience.</p>
        <h3 className="text-xl italic font-bold text-white flex justify-between mt-10"><span className="flex flex-col italic">Hotel Royal Sen — Frontend Developer <span className="text-gray-500 text-lg italic">Bardibas, Mohattari</span></span><span>2022 (Contract)</span></h3>
        <p className="text-white italic w-10/12 mt-3">Designed and made whole website using SASS, custom Css, HTML and JavaScript making it a smooth and friendly
        experience for users searching hotel in bardibas</p>
        </div>
        <h1 className="text-3xl font-bold text-white text-start mt-10 capitalize">Projects</h1>
        <hr className="border-amber-500 w-11/12 drop-shadow-2xl shadow-amber-500 mt-3"/>
        <div className="flex flex-col w-11/12">
        <h3 className="text-xl italic font-bold text-white flex justify-between"><span className="flex gap-5 italic  max-sm:flex-col">Real Estate  |<span className="text-gray-500 text-lg italic max-sm:w-40">React.js, Node.js, Express.js, Prisma ORM, MongoDB</span></span> <span className="underline underline-offset-8"><a href="https://github.com/AmanDhungel/RealEState">Link</a></span></h3>
        <p className="text-white italic w-10/12 mt-3">   Real Estate project using the MERN stack and Prisma ORM. Backend development included MongoDB with 
        Prisma ORM, Node.js, Express.js, user session management, authentication, and CRUD operations. Frontend 
        development utilized React, Axios, JWT tokens, Leaflet maps, React Router DOM, hooks (useEffect, useState), 
        Context API, image uploads, Quill text editor, and implemented security measures for data handling.
         </p>
        <h3 className="text-xl italic font-bold text-white flex justify-between mt-10"><span className="flex gap-5 italic max-sm:flex-col">Fun Olympic |<span className="text-gray-500 text-lg italic max-sm:w-40"> PHP, MySQL, HTML, CSS, SASS, JavaScript</span></span> <span className="underline underline-offset-8"><a href="https://github.com/AmanDhungel/SportsfunOlympic" target="_blank">Link</a></span></h3>
        <p className="text-white italic w-10/12 mt-3">  Developed Fun Olympic, a Full Stack Web Application in collaboration with the University of Sunderland in 
        London. The app features sport news and includes a live section for viewing games upon login.
         </p>
        <h3 className="text-xl italic font-bold text-white flex justify-between mt-10"><span className="flex gap-5 italic max-sm:flex-col">Chat - App |<span className="text-gray-500 text-lg italic max-sm:w-40"> Full-Stack, React.js, Firebase</span></span> <span className="underline underline-offset-8"><a href="https://github.com/AmanDhungel/Real-time-Chat-App" target="_blank">Link</a></span></h3>
        <p className="text-white italic w-10/12 mt-3">  Real-time Chat App: Revolutionizing communication with a seamless user experience and real-time messaging. 
            Features include dynamic chat lists, emoji picker, image support, and Zustand for efficient state management. 
            Ensures privacy, handles blocked users, and delivers real-time notifications across devices. Experience enhanced 
            connectivity and engagement with our cutting-edge platform.</p>
        <h3 className="text-xl italic font-bold text-white flex justify-between mt-10"><span className="flex gap-5 italic max-sm:flex-col">iPhone WebApp |<span className="text-gray-500 text-lg italic max-sm:w-40"> React.js, Tailwind, Gsap, THREE.js</span></span> <span className="underline underline-offset-8"><a href="https://github.com/AmanDhungel/iPhone" target="_blank">Link</a></span></h3>
        <p className="text-white italic w-10/12 mt-3"> Specializing in Three.js, I enhance visual appeal through advanced lighting and camera optimization, and create 
            immersive environments. Proficient in GSAP animations, I use gsap.to and gsap.from for seamless transitions 
            with expertise in duration, ease, and stagger effects. I ensure code maintainability through pre-defined JSON 
            data and integrate Sentry for efficient error tracking. Skilled in Tailwind CSS, I deliver responsive designs and 
            intuitive user experiences. I also implement interactive video components and carousels, utilizing useRef, 
            useState, and useEffect for effective state management and DOM manipulation.
         </p>
  
        </div>

        <h1 className="text-3xl font-bold text-white text-start mt-10 capitalize">Certifications</h1>
        <hr className="border-amber-500 w-11/12 drop-shadow-2xl shadow-amber-500 mt-3"/>
        <div className="flex flex-col w-11/12">
        <h3 className="text-xl italic font-bold text-white flex justify-between "><span className="flex gap-5 italic max-sm:flex-col max-sm:w-52 max-sm:gap-0">Complete JavaScript Course |<span className="text-gray-500 text-lg italic"> 2023</span></span> <span className="underline underline-offset-8"><a href="" target="_blank">Link</a></span></h3>
        <p className="text-white italic w-10/12 mt-3">  I have extensively studied and applied JavaScript, mastering its fundamental concepts and advanced features. My expertise 
        includes manipulating the Document Object Model (DOM), handling asynchronous operations with promises and 
        async/await, and utilizing modern ES6+ syntax such as arrow functions, template literals, and destructuring. I have 
        implemented data structures and algorithms in JavaScript, gaining proficiency in functional programming principles and 
        design patterns. Additionally, I have experience with frameworks/libraries like React and Node.js, using JavaScript for both 
        frontend and backend development to create scalable and efficient web applications.
         </p>
        <h3 className="text-xl italic font-bold text-white flex justify-between mt-10"><span className="flex gap-5 italic max-sm:flex-col max-sm:w-52 max-sm:gap-0">Responsive Web Design Certification |<span className="text-gray-500 text-lg italic"> 2023</span></span> <span className="underline underline-offset-8"><a href="" target="_blank">Link</a></span></h3>
        <p className="text-white italic w-10/12 mt-3">   Through FreeCodeCamp, I have gained proficiency in responsive web design, mastering techniques using HTML and CSS. I 
        learned to create fluid layouts that adapt seamlessly to various screen sizes and devices. Utilizing CSS media queries, I 
        implemented responsive design principles to ensure optimal viewing experiences across desktops, tablets, and mobile 
        devices. Techniques such as flexible grids, responsive images, and viewport meta tags were integral in achieving this. This 
        knowledge enables me to build websites that are accessible and user-friendly across different platforms.
         </p>
        </div>
        </div>
    </div>

    </>

  )
}

export default About