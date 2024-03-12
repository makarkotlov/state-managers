import React, {useMemo, useRef} from 'react';

type Data = {
  staticField?: number;
};

type ListContextType = Data;

export const RightTabNewContext = React.createContext<ListContextType>();

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
