import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

// Root Wrapper for the all routes
const Root = () => {
  return (
    <div className='w-screen h-screen flex'>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Root;
