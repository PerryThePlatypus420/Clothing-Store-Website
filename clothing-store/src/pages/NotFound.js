import React from 'react';
import { CgSmileSad } from "react-icons/cg";

function NotFound() {
  return (
    <div className="container mt-5">
      
      <h1>404 Not Found <CgSmileSad className='mb-2'/></h1>
      <p className="mt-4">
        The page you are looking for does not exist.
      </p>
    </div>
  );
}

export default NotFound;