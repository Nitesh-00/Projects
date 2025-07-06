import { assets } from '../assets/assets.js';

const NavBar = ({setToken}) => {
  return (
    <div className='flex items-center justify-between  py-2 px-[4%]'>
      <img src={assets.logo} alt="Logo" className='w-[max(10%,80px)]' />
      
      <button onClick={()=>setToken("")} className='bg-gray-500 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full'>
        Logout
      </button>
    </div>
  );
};

export default NavBar;
