import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from "../../services/hooks";
import type { RootState } from '../../services/store';
import { fetchRockets } from '../../services/rockets/rocketsSlice';
import RocketType from '../../types/rocket';
import Rocket from '../../components/rocket/Rocket'

function Rockets() {
  const dispatch = useAppDispatch();
  const rocketList = useAppSelector((state: RootState) => state.rockets.rockets)
  const loading = useAppSelector((state: RootState) => state.rockets.status);
  const error = useAppSelector((state: RootState) => state.rockets.error);

  useEffect(() => {
    dispatch(fetchRockets())
  }, [dispatch]);

  if (loading === 'pending') {
    return <div>Loading...</div>;
  }

  if (loading === 'failed') {
    return <div>Error: {error}</div>;
  }


  if (loading === 'succeeded') {
 
 
    return (
      <>
        Rocket page

        {rocketList && rocketList.map((rocket: RocketType) => {
          return <Rocket key={rocket.name} rocket={rocket} />
        })}

      </>
    )

  }

}

export default Rockets;
