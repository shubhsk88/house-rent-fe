import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHouse, resetHouse } from '../../actions';
import { getHouse, isLoggedIn, getUserId, getUserList } from '../../selectors';
import { AiOutlineLeft, AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import StyledDescription from './style';
import { publicFetch } from '../../utils';
import { Loading } from '../../components/common';

const Description = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const house = useSelector(getHouse);
  const isAuthenticate = useSelector(isLoggedIn);
  const userId = useSelector(getUserId);
  const houseList = useSelector(getUserList);

  const [checkFavourite, setCheckFavourite] = useState(false);

  const isLoading = useSelector((state) => state.houses.isHouseLoading);

  useEffect(() => {
    dispatch(fetchHouse(id));
    return () => {
      dispatch(resetHouse());
    };
  }, [dispatch, id]);

  const addTofavourite = async () => {
    const userCredentials = { user_id: userId, house_id: id };
    try {
      await publicFetch.post('/favourites', userCredentials);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    let check = !!houseList.find((house) => house.id === Number(id));
    console.log(houseList, id, check);
    if (check) {
      setCheckFavourite(true);
    }
  }, [houseList, id]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <StyledDescription image={house.img_url}>
          <div className="flex justify-around mt-2 ">
            <Link to="/" className="mx-4 my-4">
              <AiOutlineLeft size="20" />
            </Link>
            <h2 className="text-lg mb-2">{house.title}</h2>
          </div>
          <div className="image-container ">
            <div className="flex justify-around">
              <div className="host">
                <div className="host-avatar"></div>
                <div className="host-title">Sara Drasner</div>
              </div>
              <div className="pricing">
                <div className="price">${house.price}</div>
                <div>Per Month</div>
              </div>
            </div>
          </div>
          <div className="p-4">
            <h3 className="py-2 text-lg font-bold">About this listing</h3>
            <p className="p-1">{house.description}</p>
          </div>
          {isAuthenticate && !checkFavourite ? (
            <button onClick={addTofavourite} className="favourite">
              Add To favourite
            </button>
          ) : null}
        </StyledDescription>
      )}
    </>
  );
};

export default Description;
