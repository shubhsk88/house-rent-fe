import React, { useEffect } from 'react';
import { FiMenu } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHouses } from '../actions';
import { getHousesData, isLoggedIn } from '../selectors';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

const Home = () => {
  const dispatch = useDispatch();
  const houses = useSelector(getHousesData);
  const isAuthenticate = useSelector(isLoggedIn);
  console.log(isAuthenticate);
  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);

  return (
    <div className="mt-6">
      <div className="flex justify-around">
        <FiMenu />
        <h2 className="text-lg font-bold">HouseMon</h2>
        
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
