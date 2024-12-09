import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";





export default function Profile() {
  return (
    <div className="rounded-xl text-white bg-gray-500 justify-center items-center flex gap-5 px-5 h-fit w-fit m-5">
        <div className="rounded-full bg-gray-400 text-white p-1"><FaChevronLeft />
        </div>
        <div className="justify-center items-center flex-col text-center p-5">
            <div >
                <strong>Today Available</strong>
                <p>From: Fortis Hospital</p>
            </div>
            <div className="justify-center items-center flex m-5">
            <div className="rounded-full h-20 w-20 bg-white p-1 object-cover overflow-hidden"> <img src="https://th.bing.com/th/id/OIP.at6t_BEWYqb5J4CsbyRYCgHaLH?rs=1&pid=ImgDetMain" className="h-20 w-20" alt="" /></div>
            </div>
            <div>
            <strong>Dr. Dazy Leen</strong>
            <p className="text-sm">Orthopedist 11:00AM-03:00PM</p>
            </div>
        </div>
        <div className="rounded-full bg-gray-400 text-white p-1"><FaChevronRight />
        </div>
    </div>
  )
}
