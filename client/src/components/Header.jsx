import {FaSearch} from "react-icons/fa"
import { Link } from "react-router-dom"
import {useSelector} from 'react-redux'
function Header() {
    const {currentUser} = useSelector(state => state.user)
    console.log(currentUser)
      return (
   <header className="bg-sky-200 shadow-md">
    <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500 ">My</span>
            <span className="text-slate-700 ">Home</span>
        </h1>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
            <input type="text" placeholder="Search..." className="bg-transparent focus:outline-none w-24 sm:w-64" />
            <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4">
            <Link to="/" >
            <li className="hidden sm:inline text-slate-700 hover:underline font-semibold">Home</li>
            </Link>
            <Link to="/about" >
            <li className="hidden sm:inline text-slate-700 hover:underline font-semibold ">About</li>
            </Link>
            <Link to="/Profile" >
            {currentUser ? (
                <img
                src={currentUser.avatar} 
                alt="Profile"
                className="rounded-full h-7 w-7 object-cover cursor-pointer" />
                ) : (
                 <li className=" text-slate-700 hover:underline font-semibold ">Sign in </li>
            )}
             </Link>
           </ul>
    </div>
   </header>
  )
}

export default Header