import React, { useEffect } from 'react';
import { FiMenu, FiSearch } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHouses } from '../actions';
import { getHousesData } from '../selectors';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
const Home = () => {
  const dispatch = useDispatch();
  const houses = useSelector(getHousesData);

  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);

  return (
    <div className="mt-6">
      <div className="flex justify-around">
        <FiMenu />
        <h2 className="text-lg font-bold">Houses</h2>
        <FiSearch />
      </div>
      <div className="my-8 p-2 flex flex-col items-center">
        {houses.length !== 0
          ? houses.map((house) => (
              <Link key={house.id} to={`/houses/${house.id}`}>
                {' '}
                <Card house={house} />
              </Link>
            ))
          : null}
      </div>
    </div>
  );
};

export default Home;
