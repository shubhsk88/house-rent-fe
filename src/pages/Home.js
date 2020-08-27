import React, { useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Carousel, {
  slidesToShowPlugin,
  slidesToScrollPlugin,
} from '@brainhubeu/react-carousel';
import { fetchHouses, signoutUser, fetchUserList } from '../actions';
import {
  getHousesData, isLoggedIn, getUserList, getToken,
} from '../selectors';
import Card from '../components/Card';
import { ButtonMain, LoginButton, Loading } from '../components/common';
import '@brainhubeu/react-carousel/lib/style.css';

const Home = () => {
  const dispatch = useDispatch();
  const houses = useSelector(getHousesData);
  const isAuthenticate = useSelector(isLoggedIn);
  const [favourite, setFavourite] = useState(false);
  const [housesList, setHousesList] = useState(houses);
  const token = useSelector(getToken);
  const userList = useSelector(getUserList);
  const isLoaded = useSelector(state => state.houses.isHousesLoading);

  const history = useHistory();
  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);
  const onLogout = () => {
    dispatch(signoutUser());
    setHousesList(houses);
    history.push('/');
  };

  useEffect(() => {
    if (favourite) {
      setHousesList(userList);
    } else {
      setHousesList(houses);
    }
  }, [userList, houses, favourite]);

  const onFavourite = () => {
    setFavourite(true);
    dispatch(fetchUserList(token));
    history.push('/');
    // setHousesList(userList);
  };
  const onHome = () => {
    setFavourite(false);
  };

  return (
    <div className="mt-6">
      <div className="flex justify-around">
        {isAuthenticate ? (
          <ButtonMain
            onClick={favourite ? onHome : onFavourite}
            text={favourite ? 'Home' : 'My Favourite'}
          />
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
      {isLoaded ? (
        <Loading />
      ) : (
        <div className="my-8 p-2 ">
          <Carousel
            plugins={[
              'centered',
              'infinite',
              'arrows',
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 3,
                },
              },
              {
                resolve: slidesToScrollPlugin,
                options: {
                  numberOfSlides: 3,
                },
              },
            ]}
            offset={-120}
          >
            {housesList.length !== 0
              ? housesList.map(house => (
                <Link key={house.id} to={`/houses/${house.id}`}>
                  <Card house={house} />
                </Link>
              ))
              : null}
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default Home;
