
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from "../../services/hooks";
import type { RootState } from '../../services/store';
import { fetchMissions } from '../../services/missions/missionsSlice';
import MissionType from '../../types/mission';
import Mission from '../../components/mission/Mission';

function Missions() {
  const dispatch = useAppDispatch();
  const missionsList = useAppSelector((state: RootState) => state.missions.missions)
  const loading = useAppSelector((state: RootState) => state.missions.status);
  const error = useAppSelector((state: RootState) => state.missions.error);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch])


  if (loading === 'pending') {
    return <div>Loading...</div>;
  }

  if (loading === 'failed') {
    return <div>Error: {error}</div>;
  }


  if (loading === 'succeeded') {
    return (
  
<div className="relative overflow-x-auto shadow-md sm:rounded-lg px-8 py-11">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Description
                </th>
                <th scope="col" className="px-6 py-3">
                    Detail
                </th>
            </tr>
        </thead>
        <tbody>      
  
        {missionsList && missionsList.map((mission: MissionType) => {
          return <Mission key={mission.mission_name} mission={mission} />
        })}
      
        </tbody>
    </table>
</div>
    
    )

  }
}

export default Missions;
