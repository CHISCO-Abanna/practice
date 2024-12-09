import { FaChevronDown } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";





export default function Nav() {
  return (
    <div className="bg-red-950 text-white flex justify-end items-end text-end gap-10 h-20 py-4 px-5">
        <div className="gap-2 flex justify-center items-center text-center border-l border-gray-300 pl-2 h-full">
            {/* <div className="borederr h-10  bg-gray-400"></div> */}
            <div className="flex gap-1 justify-center items-center ">
                <strong>ENG</strong>
                <div><FaChevronDown /></div>
            </div>
        </div>
        <div className="gap-3 flex justify-center items-center border-l border-gray-300 pl-3 h-full">
        {/* <div className="borederr h-10  bg-gray-400"></div> */}
            <div><FaRegBell />
            </div>
        </div>
        <div className="gap-3 flex justify-center items-center text-center border-l border-gray-300 pl-3 h-full">
        {/* <div className="borederr h-10  bg-gray-400"></div> */}
        <div className="rounded-full h-10 w-10 bg-white p-1 object-cover overflow-hidden"> <img src="https://th.bing.com/th/id/OIP.at6t_BEWYqb5J4CsbyRYCgHaLH?rs=1&pid=ImgDetMain" className="h-10 w-10" alt="" /></div>
        <p>Dr. Monica</p>
        <div><FaChevronDown /></div>
        </div>
    </div>
  )
}
