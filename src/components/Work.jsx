import { Link } from "react-router-dom";
import { work } from "../utils/work";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Work = () => {
  useGSAP(()=>{
   gsap.to('#work', {
    duration: 1,
    opacity: 1,
    x: 0,
    ease: 'power2.out',
    stagger:0.3
   })
  }, [])

  return (
    <div className="overflow-hidden">
      <h1 className="text-xl italic font-bold text-amber-500 flex justify-center items-center mt-10">
        Aman Dhungel - Work
      </h1>
      <hr className="border-amber-500 w-11/12 ml-auto mr-auto mt-3 items-center" />

      <div className="flex flex-col gap-10 mb-10 justify-between">
        {work.map((item) => (
          <div className="flex w-11/12 ml-[5rem] mt-5 text-white opacity-0 translate-x-[20rem] max-sm:flex-col max-sm:ml-5 max-sm:gap-6" id="work" key={item.id}>
            <div className=" overflow-hidden rounded-2xl">
              <img
                src={item.img}
                className="object-center w-[35rem] h-[18rem]"
                alt={item.title}
              />
            </div>
            <div className="flex flex-col ml-10 gap-5">
              <h2 className="text-2xl font-bold text-amber-200 italic">{item.title}</h2>
              <p className="text-xl w-10/12">{item.description}</p>
              <Link to={`/work/${item.id}`} className="shadow-2xl shadow-slate-700 p-5 rounded-xl bg-amber-950 w-40 text-center">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
