import React, {Dispatch, SetStateAction, useMemo, useState} from 'react';

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

  const value = useMemo(
    () => ({
      field4,
      setField4,
    }),
    [field4],
  );

  return (
    <LeftTabMiniContext4.Provider value={value}>
      {props.children}
    </LeftTabMiniContext4.Provider>
  );
};
