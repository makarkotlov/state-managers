import React, {Dispatch, SetStateAction, useMemo, useState} from 'react';

type Data = {
  field3?: string;
  setField3: Dispatch<SetStateAction<undefined | string>>;
};

type ListContextType = Data;

export const LeftTabMiniContext3 = React.createContext<ListContextType>(
  {} as ListContextType,
);

export const LeftTabMiniContext3Provider = (props: {
  children: React.ReactNode;
}) => {
  const [field3, setField3] = useState<string>();

  const value = useMemo(
    () => ({
      field3,
      setField3,
    }),
    [field3],
  );

  return (
    <LeftTabMiniContext3.Provider value={value}>
      {props.children}
    </LeftTabMiniContext3.Provider>
  );
};
