import React from 'react'
import { Link } from 'react-router-dom'

export default function WelcomePage(){



    return (
        <div className='flex w-full min-h-[100vh] bg-gray-700'>
            <div>
                <h1>Welcome page</h1>
                <Link to='/auth/login' className="hover:font-bold border-2 border-black">Login</Link>
                <Link to='/auth/signup' className="hover:font-bold border-2 border-black">SignUp</Link>
                <Link to='/admin/users' className="hover:font-bold border-2 border-black">Admin Users</Link>
            </div>
            
        </div>
    )
}