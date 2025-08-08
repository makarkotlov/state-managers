// context

import {useContext} from 'react';
import {RightTabNewContext} from '../stores/RightTabContext';
import {useAtom} from 'jotai';
import {rightStateAtom} from '../../jotai/stores/rightStore';
import {repeated} from '../stores/LeftTabContext';
import {Data} from '../../redux/stores/rightTabSlice';

// import {useContext} from 'react';
// import {RightTabContext} from '../context/RightTabContext';
// import {RightTabStoreInstance} from '../mobx/rightTabStore';

// import {useContext} from 'react';
// import {RightTabContext} from '../context/RightTabContext';

//redux

// import {useDispatch, useSelector} from 'react-redux';

// import {deleteItem, reset} from '../redux/rightTabSlice';

// export const useRightTabModel = () => {
//   const {data, loading, reset, deleteItem} = useContext(RightTabContext);
//   return {data, loading, reset, deleteItem};
// };

// export const useRightTabModel = () => {
//   const dispatch = useDispatch();
//   const {data, loading} = useSelector(state => state.rightTab);

//   const remove = deleteItem(data, dispatch);
//   return {data, loading, reset: reset(dispatch), deleteItem: remove};
// };

// export const useRightTabModel = () => {
//   const {
//     state: {data, loading},
//     reset,
//     deleteItem,
//   } = RightTabStoreInstance;
//   return {data, loading, reset, deleteItem};
// };

export const useRightTabModel = () => {
  const [{data, loading, refetch}, setHook] = useAtom(rightStateAtom);

  const reset = async () => {
    setHook({
      data: undefined,
      loading: true,
      refetch: () => {},
    });
    const response = await new Promise<Data['data']>(resolve => {
      resolve(repeated);
    });

    setHook({
      data: response,
      loading: false,
      refetch: () => reset(),
    });
  };

  const deleteItem = async (planet: string) => {
    const filtered = data?.filter(i => planet !== i.planet);
    const response = await new Promise<Data['data']>(resolve => {
      resolve(filtered);
    });
    setHook({
      data: response,
      loading: false,
      refetch: () => reset(),
    });
  };

  return {data, loading, reset, deleteItem};
};

// export const useRightTabModel = () => {
//   const context = useContext(RightTabNewContext);
//   return context;
// };
