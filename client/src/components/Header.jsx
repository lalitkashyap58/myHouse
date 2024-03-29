import {FaSearch} from 'react-icons/fa'
import { Link ,useNavigate} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
const Header = () => {
  const {currentUser}=useSelector(state=>state.user.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    <header className=" bg-violet-50 shadow-md h-[10vh]">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap ">
          <span className="text-slate-500 font-serif  ">Your</span>
          <span className="text-slate-700 font-serif">Place</span>
        </h1>
        <form onSubmit={handleSubmit} className="bg-slate-100 p-3 rounded-lg flex items-center ">
          <input type="text " placeholder="Search ..." className="focus:outline-transparent bg-transparent w-24 sm:w-64" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
          <button>
          <FaSearch   className='text-slate-600 ml-[3px]'  />

          </button>
        </form>
        <ul className='flex gap-4 '>
            <Link to='/' element={<Home/>}>
            <li className='hidden sm:inline text-slate-700 hover:underline cursor-pointer font-serif font-semibold'>Home</li>
            </Link>
         <Link to="/about" element={<About/>}>
         <li className='hidden sm:inline text-slate-700 hover:underline cursor-pointer font-serif font-semibold'>About</li>
         </Link>
         <Link to='/profile'>

            {currentUser ? (
              <img
                className='rounded-full h-7 w-7 object-cover'
                src={currentUser.avatar}
                alt='profile'
              />              
            ) : (
              <Link to='/signin'>
              <li className=' text-slate-700 hover:underline'> Sign in</li>
              </Link>
            )}
                          </Link>

            
           
        </ul>
      </div>
    </header>
  );
};

export default Header;
