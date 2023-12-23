import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from "../../services/hooks";
import type { RootState } from '../../services/store';
import { fetchDragons } from '../../services/dragons/dragonsSlice';
import Dragon from '../../types/dragon';

function Dragons() {
  const dispatch = useAppDispatch();
  const dragonsList = useAppSelector((state: RootState) => state.dragons.dragons)
  const loading = useAppSelector((state: RootState) => state.dragons.status);
  const error = useAppSelector((state: RootState) => state.dragons.error);

useEffect(()=>{
  dispatch(fetchDragons());
},[dispatch])


if (loading === 'pending') {
  return <div>Loading...</div>;
}

if (loading === 'failed') {
  return <div>Error: {error}</div>;
}


if (loading === 'succeeded') {


  const dragonItems = dragonsList.map((item: Dragon) =>
    <li key={item.id}>
      {item.name}
    </li>
  );

  return (
    <>
    Dragon page
      <ul>
        {dragonItems}
      </ul>
    </>
  )

}
}

export default Dragons