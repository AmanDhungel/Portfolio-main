import { useParams } from "react-router-dom"
import { work } from "../utils/work";

const SingleWork = () => {
    const {id} = useParams();


  const oneWork =  work.find(w => w.id === parseInt(id));

  return (
    <div className="flex flex-col justify-center items-center gap-10 mb-10 max-sm:mt-10">
        <img src={oneWork.img} alt="" className="flex rounded-2xl w-1/2 max-sm:w-11/12" />
        <div className="items-center text-center">
            <h1 className="text-2xl font-bold text-amber-500">{oneWork.title}</h1>
            <p className="text-lg text-white w-3/4 ml-auto mr-auto mt-10">{oneWork.descriptionLong}</p>
        </div>
            <a href={oneWork.link} id="worklink" target="_blank" className="text-xl rounded-2xl text-white bg-green-950 shadow-lg shadow-green-500 p-3 px-8">Visit Website</a>
    </div>
  )
}

export default SingleWork