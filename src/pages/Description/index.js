import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHouse, resetHouse } from '../../actions';
import { getHouse } from '../../selectors';
import { AiOutlineLeft, AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import StyledDescription from './style';
const Description = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const house = useSelector(getHouse);
  const isLoading = useSelector((state) => state.houses.isHouseLoaded);
  useEffect(() => {
    dispatch(fetchHouse(id));
    return () => {
      dispatch(resetHouse());
    };
  }, [dispatch, id]);

  return (
    <>
      {!isLoading ? (
        <StyledDescription image={house.img_url}>
          <div className="flex justify-around mt-2">
            <Link to="/">
              <AiOutlineLeft size="20" />
            </Link>
            <h2 className="text-2xl mb-2">Sample Name</h2>
            <AiOutlineSearch size="20" />
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
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
              ratione perferendis hic optio enim facere illo aliquid quam neque
              non recusandae tempora iure. Possimus, labore voluptatibus quae id
              magnam fugit!
            </p>
          </div>
          <button className="favourite">Add To favourite</button>
        </StyledDescription>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
};

export default Description;
