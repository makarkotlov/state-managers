import {autorun, makeAutoObservable} from 'mobx';
import {observer} from 'mobx-react';
import React, {createContext, useEffect, useState} from 'react';
import {Alert} from 'react-native';

type State = {
  field1?: number;
  field2?: number;
  field3?: number;
  field4?: number;
};

class LeftTabMiniStore {
  state: State = {};

  constructor() {
    makeAutoObservable(this);
    autorun(() => {
      console.log('Energy level:', this.state.field1);
    });
  }

  setField1 = () => {
    this.state.field1 = this.state.field1 ? this.state.field1 + 1 : 1;
    console.log('this.state.field1 ' + this.state.field1);
  };
  setField2 = () => {
    this.state.field2 = this.state.field2 ? this.state.field2 + 1 : 1;
  };
  setField3 = () => {
    this.state.field3 = this.state.field3 ? this.state.field3 + 1 : 1;
  };
  setField4 = () => {
    this.state.field4 = this.state.field4 ? this.state.field4 + 1 : 1;
  };
}

export const LeftTabMiniStoreInstance = new LeftTabMiniStore();

/* Store helpers */
const StoreContext = React.createContext();

export const StoreProvider = observer(({children, store}) => {
  // const [timer, setTimer] = useState(0);

  // useEffect(() => {
  //   store.setField1();
  //   setTimeout(() => {
  //     setTimer(2000);
  //     Alert.alert('Maloli');
  //   }, 2000);
  // }, []);
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
});

/* Hook to use store in any functional component */
export const useStoreMobx = () => React.useContext(StoreContext);

/* HOC to inject store to any functional or class component */
export const withStore = Component => props => {
  return <Component {...props} store={useStoreMobx()} />;
};
