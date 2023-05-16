import React, {Dispatch, SetStateAction, useState} from 'react';

type Data = {
  field2?: string;
  setField2: Dispatch<SetStateAction<undefined | string>>;
};

type ListContextType = Data;

export const LeftTabMiniContext2 = React.createContext<ListContextType>(
  {} as ListContextType,
);

export const LeftTabMiniContext2Provider = (props: {
  children: React.ReactNode;
}) => {
  const [field2, setField2] = useState<string>();

  const LeftTabMiniContext2Value = () => ({
    field2,
    setField2,
  });

  return (
    <LeftTabMiniContext2.Provider value={LeftTabMiniContext2Value()}>
      {props.children}
    </LeftTabMiniContext2.Provider>
  );
};
