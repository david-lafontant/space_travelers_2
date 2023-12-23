import React from 'react';
import RocketType from "../../types/rocket";
import DetailButton from '../detailsButton/DetailButton';

interface RocketProps {
  rocket: RocketType
}

const Rocket: React.FC<RocketProps> = ({ rocket }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg" src={rocket.flickr_images[0]} alt="rocket picture" />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {rocket.name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {rocket.description}
        </p>

        <DetailButton url={rocket.wikipedia} />
      </div>
    </div>

  );
};

export default Rocket