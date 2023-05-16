import React, {Dispatch, SetStateAction, useState} from 'react';

type Data = {
  field1?: string;
  setField1: Dispatch<SetStateAction<undefined | string>>;
  field2?: string;
  setField2: Dispatch<SetStateAction<undefined | string>>;
  field3?: string;
  setField3: Dispatch<SetStateAction<undefined | string>>;
  field4?: string;
  setField4: Dispatch<SetStateAction<undefined | string>>;
};

type ListContextType = Data;

export const RightTabNewContext = React.createContext<ListContextType>(
  {} as ListContextType,
);

export const RightTabNewContextProvider = (props: {
  children: React.ReactNode;
}) => {
  const [field1, setField1] = useState<string>();
  const [field2, setField2] = useState<string>();
  const [field3, setField3] = useState<string>();
  const [field4, setField4] = useState<string>();

  const RightTabNewContextValue = () => ({
    field1,
    setField1,
    field2,
    setField2,
    field3,
    setField3,
    field4,
    setField4,
  });

  return (
    <RightTabNewContext.Provider value={RightTabNewContextValue()}>
      {props.children}
    </RightTabNewContext.Provider>
  );
};
