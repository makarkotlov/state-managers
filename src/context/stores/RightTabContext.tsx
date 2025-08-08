import React, {useMemo, useRef} from 'react';

import {createContext} from 'use-context-selector';

type Data = {
  staticField?: number;
};

type ListContextType = Data;

export const RightTabNewContext = createContext<ListContextType>();

export const RightTabNewContextProvider = (props: {
  children: React.ReactNode;
}) => {
  const staticFieldRef = useRef(0);

  const value = useMemo(
    () => ({
      staticField: staticFieldRef.current,
    }),
    [],
  );

  return (
    <RightTabNewContext.Provider value={value}>
      {props.children}
    </RightTabNewContext.Provider>
  );
};
