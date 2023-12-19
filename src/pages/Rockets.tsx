import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from "../app/hooks";
import type { RootState } from '../app/store';
import { fetchRockets } from '../app/rockets/rocketsSlice';
import Rocket from '../type/rocketType';

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


    const rocketItems = rocketList.map((item: Rocket) =>
      <li key={item.id}>
        {item.rocket_name}
      </li>
    );

    return (
      <>
      Rocket page
        <ul>
          {rocketItems}
        </ul>
      </>
    )

  }

}

export default Rockets