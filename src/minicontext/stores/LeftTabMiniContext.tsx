import React, {Dispatch, SetStateAction, useMemo, useState} from 'react';

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

  const value = useMemo(
    () => ({
      field1,
      setField1,
    }),
    [field1],
  );

  return (
    <LeftTabMiniContext.Provider value={value}>
      {props.children}
    </LeftTabMiniContext.Provider>
  );
};
