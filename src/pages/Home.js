import React, { useEffect } from 'react';
import { FiMenu, FiSearch } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { getHouses } from '../actions';
import { getHousesData } from '../selectors';
import Card from '../components/Card';
const Home = () => {
  const dispatch = useDispatch();
  const houses = useSelector(getHousesData);

  useEffect(() => {
    dispatch(getHouses());
  }, [dispatch]);

  return (
    <div className>
      <div className="flex justify-around">
        <FiMenu />
        <h2 className="text-lg font-bold">Houses</h2>
        <FiSearch />
      </div>
      <div className="my-8 p-2 flex flex-col items-center">
        {houses.length !== 0
          ? houses.map((house) => <Card house={house} />)
          : null}
      </div>
    </div>
  );
};

export default Home;
