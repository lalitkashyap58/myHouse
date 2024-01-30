import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import { useSelector } from 'react-redux';
const Header = () => {
  const {currentUser}=useSelector(state=>state.user.user);

  return (
    <header className="bg-slate-200 shadow-md h-[10vh]">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap ">
          <span className="text-slate-500 ">Your</span>
          <span className="text-slate-700">Place</span>
        </h1>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center ">
          <input type="text " placeholder="Search ..." className="focus:ouline-none bg-transparent w-24 sm:w-64"/>
          <FaSearch   className='text-slate-600 ml-[3px]'  />
        </form>
        <ul className='flex gap-4 '>
            <Link to='/' element={<Home/>}>
            <li className='hidden sm:inline text-slate-700 hover:underline cursor-pointer'>Home</li>
            </Link>
         <Link to="/about" element={<About/>}>
         <li className='hidden sm:inline text-slate-700 hover:underline cursor-pointer'>About</li>
         </Link>
            {currentUser ? (
              <Link to='/profile'>
              <img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt='profile' />
              </Link>
              
            ) : (
              <Link to='/signin'>
              <li className=' text-slate-700 hover:underline'> Sign in</li>
              </Link>
            )}
            
           
        </ul>
      </div>
    </header>
  );
};

export default Header;
