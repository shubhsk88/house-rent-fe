import React, { useState } from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

const Card = ({ house }) => {
  const [isStarClick, setIsStarClick] = useState(false);
  return (
    <div className="overflow-hidden rounded max-w-sm  shadow-lg ">
      <img className="w-full " src={house.img_url} alt={house.name} />
      <div className="px-6 py-4 flex justify-around">
        <div className="flex flex-col">
          <h2 className="py-1 text-xl ">{house.title}</h2>
          {isStarClick ? <AiFillStar /> : <AiOutlineStar />}
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg">{`$${house.price} `}</h3>
          <h3>per month</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
