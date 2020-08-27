import React, { useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHouses, signoutUser, fetchUserList } from '../actions';
import { getHousesData, isLoggedIn, getUserList, getToken } from '../selectors';
import { Link, useHistory } from 'react-router-dom';
import Card from '../components/Card';
import { ButtonMain, LoginButton } from '../components/common';

const Home = () => {
  const dispatch = useDispatch();
  const houses = useSelector(getHousesData);
  const isAuthenticate = useSelector(isLoggedIn);
  const [housesList, setHousesList] = useState(houses);
  const token = useSelector(getToken);
  const userList = useSelector(getUserList);

  const history = useHistory();
  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);
  const onLogout = () => {
    dispatch(signoutUser());
    history.push('/');
  };
  console.log(housesList);
  const onFavourite = () => {
    dispatch(fetchUserList(token));
    setHousesList(userList);
  };
  return (
    <div className="mt-6">
      <div className="flex justify-around">
        {isAuthenticate ? (
          <ButtonMain onClick={onFavourite} text="My Favourites" />
        ) : (
          <FiMenu />
        )}

        <h2 className="text-lg font-bold">HouseMon</h2>
        {isAuthenticate ? (
          <ButtonMain text="Logout" onClick={onLogout} />
        ) : (
          <LoginButton />
        )}
      </div>
      <div className="my-8 p-2 flex flex-col items-center">
        {housesList.length !== 0
          ? housesList.map((house) => (
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
