import React, {Dispatch, SetStateAction, useState} from 'react';

type Data = {
  field4?: string;
  setField4: Dispatch<SetStateAction<undefined | string>>;
};

type ListContextType = Data;

export const LeftTabMiniContext4 = React.createContext<ListContextType>(
  {} as ListContextType,
);

export const LeftTabMiniContext4Provider = (props: {
  children: React.ReactNode;
}) => {
  const [field4, setField4] = useState<string>();

  const LeftTabMiniContext4Value = () => ({
    field4,
    setField4,
  });

  return (
    <LeftTabMiniContext4.Provider value={LeftTabMiniContext4Value()}>
      {props.children}
    </LeftTabMiniContext4.Provider>
  );
};
