import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from "../../services/hooks";
import type { RootState } from '../../services/store';
import { fetchDragons } from '../../services/dragons/dragonsSlice';
import DragonType from '../../types/dragon';
import Dragon from '../../components/dragon/Dragon';

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




  return (
    <>
    Dragon page
    {dragonsList && dragonsList.map((dragon: DragonType) => {
          return <Dragon key={dragon.name} dragon={dragon} />
        })}
    </>
  )











}
}

export default Dragons