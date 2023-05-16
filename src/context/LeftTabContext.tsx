import React, {useState} from 'react';
import uuid from 'react-native-uuid';

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

export const LeftTabContext = React.createContext<ListContextType>(
  {} as ListContextType,
);

const space = [
  {
    planet: 'Mercury',
    image:
      'https://images.nike.com/is/image/DotCom/PDP_COPY/555088_105/air-jordan-1-retro-high-og-shoe.png',
  },
  {
    planet: 'Venus',
    image:
      'https://images.nike.com/is/image/DotCom/PDP_COPY/CK9183_102/jordan-zoom-92-shoe.png',
  },
  {
    planet: 'Earth',
    image:
      'https://images.nike.com/is/image/DotCom/PDP_COPY/CT8527_112/air-jordan-4-retro-shoe.png',
  },
  {
    planet: 'Mars',
    image:
      'https://images.nike.com/is/image/DotCom/PDP_COPY/378037_100/air-jordan-11-retro-shoe.png',
  },
  {
    planet: 'Jupiter',
    image:
      'https://images.nike.com/is/image/DotCom/PDP_COPY/CW0916_100/jordan-delta-2-shoe.png',
  },
  {
    planet: 'Saturn',
    image:
      'https://images.nike.com/is/image/DotCom/PDP_COPY/DA2552_001/jordan-ma2-shoe.png',
  },
  {
    planet: 'Uranus',
    image:
      'https://images.nike.com/is/image/DotCom/PDP_HERO/CT0979_007_A/jordan-one-take-ii-basketball-shoe.png',
  },
  {
    planet: 'Neptune',
    image:
      'https://images.nike.com/is/image/DotCom/PDP_THUMB_RETINA/555088_603/air-jordan-1-high-og-light-fusion-red-shoe.jpg',
  },
  {
    planet: 'Pluto',
    image:
      'https://images.nike.com/is/image/DotCom/PDP_THUMB_RETINA/CT5342_007/air-jordan-4-retro-se-shoe.jpg',
  },
];

export const repeated = [].concat(...Array(100).fill(space)).map(i => {
  return {...i, id: uuid.v4()};
});

export const LeftTabContextProvider = (props: {children: React.ReactNode}) => {
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

  const LeftTabContextValue = () => ({
    data,
    loading,
    refetch,
    reset,
    deleteItem,
    createItem,
  });

  return (
    <LeftTabContext.Provider value={LeftTabContextValue()}>
      {props.children}
    </LeftTabContext.Provider>
  );
};
