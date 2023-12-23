import React from 'react';

import MissionType from '../../types/mission';
import DetailButton from '../detailsButton/DetailButton';

interface MissionProps {
  mission: MissionType
}

const Mission: React.FC<MissionProps> = ({mission})=>{
  return(
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {mission.mission_name}
                </th>
                <td className="px-6 py-4">
                {mission.description}
                </td>
                <td className="px-6 py-4">
                <DetailButton url={mission.wikipedia} />
                </td>
            </tr>

  )
}

export default Mission;