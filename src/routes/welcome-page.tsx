import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../routes/route-components/AuthProvider';

export default function WelcomePage() {
  const { decodedAccessToken, signOut } = useAuth();

  console.log("decodedAccessToken", decodedAccessToken);
  const handleLogout = async () => {
    signOut();
  };

  return (
    <div className='flex w-full min-h-[100vh] bg-gray-700'>
      <div>
        <h1>Welcome page</h1>
        {decodedAccessToken.role === 'admin' && <Link to='/admin/users' className="hover:font-bold border-2 border-white text-white">Admin Users</Link>}
        <Link to='/login' className="hover:font-bold border-2 border-white text-white" onClick={handleLogout}>Log Out</Link>
      </div>
    </div>
  );
}