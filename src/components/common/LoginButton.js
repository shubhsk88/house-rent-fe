import React from 'react';

const LoginButton=()=>{
    return (<div className="flex justify-between">
    <Link to="/login" className="px-4 py-2 shadow-lg rounded">
      Login
    </Link>
    <Link to="/signup" className="px-4 py-2 shadow-lg rounded">
      Signup
    </Link>
  </div>)
}