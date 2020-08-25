import React from 'react';
import { FiMenu, FiSearch } from 'react-icons/fi';
const Home = () => {
  return (
    <div className>
      <div className="flex justify-around">
        <FiMenu />
        <h2 className="text-lg font-bold">Houses</h2>
        <FiSearch />
      </div>
    </div>
  );
};

export default Home;
