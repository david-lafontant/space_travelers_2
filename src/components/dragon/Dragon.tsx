import React from 'react';
import DragonType from "../../types/dragon";
import DetailButton from '../detailsButton/DetailButton';

interface DragonProps {
  dragon: DragonType
}

const Dragon: React.FC<DragonProps> = ({ dragon }) => {
  return (
    <>
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg" src={dragon.flickr_images[0]} alt="rocket picture" />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {dragon.name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {dragon.description}
        </p>

        <DetailButton url={dragon.wikipedia} />
      </div>
    </div>

    
    </>

  );
};

export default Dragon;