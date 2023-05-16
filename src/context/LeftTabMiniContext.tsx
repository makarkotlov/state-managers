import React, {Dispatch, SetStateAction, useState} from 'react';

type Data = {
  field1?: string;
  setField1: Dispatch<SetStateAction<undefined | string>>;
};

type ListContextType = Data;

export const LeftTabMiniContext = React.createContext<ListContextType>(
  {} as ListContextType,
);

export const LeftTabMiniContextProvider = (props: {
  children: React.ReactNode;
}) => {
  const [field1, setField1] = useState<string>();

  const LeftTabMiniContextValue = () => ({
    field1,
    setField1,
  });

  return (
    <LeftTabMiniContext.Provider value={LeftTabMiniContextValue()}>
      {props.children}
    </LeftTabMiniContext.Provider>
  );
};
