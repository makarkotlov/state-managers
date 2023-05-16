import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import {LeftTabMiniContext} from './LeftTabMiniContext';
import {LeftTabMiniContext2} from './LeftTabMiniContext2';
import {LeftTabMiniContext3} from './LeftTabMiniContext3';
import {LeftTabMiniContext4} from './LeftTabMiniContext4';

type Data = {
  staticField?: number;
  setField1: Dispatch<SetStateAction<undefined | string>>;
  setField2: Dispatch<SetStateAction<undefined | string>>;
  setField3: Dispatch<SetStateAction<undefined | string>>;
  setField4: Dispatch<SetStateAction<undefined | string>>;
};

type ListContextType = Data;

export const LeftTabMaxContext = React.createContext<ListContextType>(
  {} as ListContextType,
);

export const LeftTabMaxContextProvider = (props: {
  children: React.ReactNode;
}) => {
  const {setField1} = useContext(LeftTabMiniContext);
  const {setField2} = useContext(LeftTabMiniContext2);
  const {setField3} = useContext(LeftTabMiniContext3);
  const {setField4} = useContext(LeftTabMiniContext4);

  const staticFieldRef = useRef(0);

  // const LeftTabMaxContextValue = () => {
  //   return {
  //     staticField: staticFieldRef.current,
  //     // staticField: field1,
  //     setField1,
  //     setField2,
  //     setField3,
  //     setField4,
  //   };
  // };

  const LeftTabMaxContextValue = useMemo(
    () => ({
      staticField: staticFieldRef.current,
      // staticField: field1,
      setField1,
      setField2,
      setField3,
      setField4,
    }),
    [],
  );

  return (
    <LeftTabMaxContext.Provider value={LeftTabMaxContextValue}>
      {props.children}
    </LeftTabMaxContext.Provider>
  );
};
