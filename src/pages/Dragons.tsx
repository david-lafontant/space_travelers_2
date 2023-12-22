import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from "../app/hooks";
import type { RootState } from '../app/store';
import { fetchDragons } from '../app/dragons/dragonsSlice';
import Dragon from '../type/dragon';

function Dragons() {
  const dispatch = useAppDispatch();
  const dragonsList = useAppSelector((state: RootState) => state.dragons.dragons)
  const loading = useAppSelector((state: RootState) => state.dragons.status);
  const error = useAppSelector((state: RootState) => state.dragons.error);

useEffect(()=>{
  dispatch(fetchDragons());
},[dispatchEvent])


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