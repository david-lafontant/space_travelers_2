
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from "../../services/hooks";
import type { RootState } from '../../services/store';
import { fetchMissions } from '../../services/missions/missionsSlice';
import Mission from '../../types/mission';

function Missions() {
  const dispatch = useAppDispatch();
  const dragonsList = useAppSelector((state: RootState) => state.missions.missions)
  const loading = useAppSelector((state: RootState) => state.missions.status);
  const error = useAppSelector((state: RootState) => state.missions.error);

useEffect(()=>{
  dispatch(fetchMissions());
},[dispatch])


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
<p>Mission page</p>
      <ul>
        {missionItems}
      </ul>
    </>
  )

}
}

export default Missions;
