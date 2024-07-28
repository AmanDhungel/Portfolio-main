import { GiLoveMystery } from "react-icons/gi"

const Footer = () => {
  return (
    <div className="flex justify-center flex-col items-center mt-10 mb-10">
        <h1 className="text-xl text-white flex gap-3 italic"> Made with <GiLoveMystery className="text-center text-[2.2rem] text-red-700"/>  By <span className="text-amber-400">&copy;AmanDhungel</span></h1>
        <h2 className="text-xl text-white">@2024</h2>

    </div>
  )
}

export default Footer