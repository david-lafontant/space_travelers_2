
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from "../app/hooks";
import type { RootState } from '../app/store';
import { fetchMissions } from '../app/missions/missionsSlice';
import Mission from '../type/mission';

function Missions() {
  const dispatch = useAppDispatch();
  const dragonsList = useAppSelector((state: RootState) => state.missions.missions)
  const loading = useAppSelector((state: RootState) => state.missions.status);
  const error = useAppSelector((state: RootState) => state.missions.error);

useEffect(()=>{
  dispatch(fetchMissions());
},[dispatchEvent])


if (loading === 'pending') {
  return <div>Loading...</div>;
}

if (loading === 'failed') {
  return <div>Error: {error}</div>;
}


if (loading === 'succeeded') {


  const missionItems = dragonsList.map((item: Mission) =>
    <li key={item.mission_id}>
      {item.mission_name}
    </li>
  );

  return (
    <>
    Dragon page
      <ul>
        {missionItems}
      </ul>
    </>
  )

}
}

export default Missions;
