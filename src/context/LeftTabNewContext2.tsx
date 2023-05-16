import {action, observable} from 'mobx';
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

export const LeftTabNewContext = React.createContext<ListContextType>(
  observable({}),
);

export const LeftTabNewContextProvider = (props: {
  children: React.ReactNode;
}) => {
  // const [field1, setField1] = useState<string>();
  // const [field2, setField2] = useState<string>();
  // const [field3, setField3] = useState<string>();
  // const [field4, setField4] = useState<string>();

  const field1 = observable({field1: ''});
  const field2 = observable({field2: ''});
  const field3 = observable({field3: ''});
  const field4 = observable({field4: ''});

  const setField1 = action(() => {
    field1.field1 = field1.field1 ? field1.field1 + 4 : '4';
  });

  const setField2 = action(() => {
    field2.field2 = field2.field2 ? field2.field2 + 4 : '4';
  });

  const setField3 = action(() => {
    field3.field3 = field3.field3 ? field3.field3 + 4 : '4';
  });

  const setField4 = action(() => {
    field4.field4 = field4.field4 ? field4.field4 + 4 : '4';
  });

  const LeftTabNewContextValue = {
    field1: field1.field1,
    setField1,
    field2: field2.field2,
    setField2,
    field3: field3.field3,
    setField3,
    field4: field4.field4,
    setField4,
  };

  return (
    <LeftTabNewContext.Provider value={LeftTabNewContextValue}>
      {props.children}
    </LeftTabNewContext.Provider>
  );
};
