import React, {useState} from 'react';
import uuid from 'react-native-uuid';
import {repeated} from './LeftTabContext';

type Space = {
  planet: string;
  image: string;
  id: string;
};

type Data = {
  data?: Space[];
  loading: boolean;
  refetch: () => void;
};

type ListContextType = Data & {
  reset: () => void;
  deleteItem: (title: string) => void;
  createItem: (planet: string, image: string) => void;
};

export const RightTabContext = React.createContext<ListContextType>(
  {} as ListContextType,
);

export const RightTabContextProvider = (props: {children: React.ReactNode}) => {
  const [{data, loading, refetch}, setHook] = useState<Data>({
    data: undefined,
    loading: true,
    refetch: () => {},
  });

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

  const createItem = async (planet: string, image: string) => {
    const created = [
      ...(data || []),
      {
        planet,
        image,
        id: uuid.v4(),
      },
    ];
    const response = await new Promise<Data['data']>(resolve => {
      resolve(created);
    });
    setHook({
      data: response,
      loading: false,
      refetch: () => reset(),
    });
  };

  const RightTabContextValue = () => ({
    data,
    loading,
    refetch,
    reset,
    deleteItem,
    createItem,
  });

  return (
    <RightTabContext.Provider value={RightTabContextValue()}>
      {props.children}
    </RightTabContext.Provider>
  );
};
