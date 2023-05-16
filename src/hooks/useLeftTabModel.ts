// import {useDispatch, useSelector} from 'react-redux';

import {useContext} from 'react';
import {LeftTabNewContext} from '../context/LeftTabNewContext';

// export const useLeftTabModel = () => {
//   const {data, loading, reset, deleteItem} = useContext(LeftTabContext);
//   return {data, loading, reset, deleteItem};
// };

// export const useLeftTabModel = () => {
//   const dispatch = useDispatch();
//   const {data, loading} = useSelector(state => state.leftTab);

//   const remove = deleteItem(data, dispatch);
//   return {data, loading, reset: reset(dispatch), deleteItem: remove};
// };

// export const useLeftTabModel = () => {
//   const {
//     state: {data, loading},
//     reset,
//     deleteItem,
//   } = LeftTabStoreInstance;
//   return {data, loading, reset, deleteItem};
// };

// export const useLeftTabModel = () => {
//   const [{data, loading, refetch}, setHook] = useAtom(leftStateAtom);

//   const reset = async () => {
//     setHook({
//       data: undefined,
//       loading: true,
//       refetch: () => {},
//     });
//     const response = await new Promise<Data['data']>(resolve => {
//       resolve(repeated);
//     });

//     setHook({
//       data: response,
//       loading: false,
//       refetch: () => reset(),
//     });
//   };

//   const deleteItem = async (planet: string) => {
//     const filtered = data?.filter(i => planet !== i.planet);
//     const response = await new Promise<Data['data']>(resolve => {
//       resolve(filtered);
//     });
//     setHook({
//       data: response,
//       loading: false,
//       refetch: () => reset(),
//     });
//   };

//   return {data, loading, reset, deleteItem};
// };

export const useLeftTabModel = () => {
  const context = useContext(LeftTabNewContext);
  return context;
};
