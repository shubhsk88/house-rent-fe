import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ house }) => (
  <div className="overflow-hidden my-4 rounded w-64 shadow-lg ">
    <img className="w-full " src={house.img_url} alt={house.name} />
    <div className="px-6 py-4 h-64 flex justify-around">
      <div className="flex flex-col">
        <h2 className="py-1 text-xl ">{house.title}</h2>
      </div>
      <div className="flex flex-col">
        <h3 className="text-lg">{`$${house.price} `}</h3>
        <h3>per month</h3>
      </div>
    </div>
  </div>
);

export default Card;

Card.propTypes = {
  house: PropTypes.shape({
    name: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    img_url: PropTypes.string,
  }).isRequired,
};
