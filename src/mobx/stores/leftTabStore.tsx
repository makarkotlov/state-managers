import {autorun, makeAutoObservable} from 'mobx';

type State = {
  field1?: number;
  field2?: number;
  field3?: number;
  field4?: number;
};

class LeftTabStore {
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
    this.state.field2 = this.state.field2 ? this.state.field2 + 2 : 2;
  };
  setField3 = () => {
    this.state.field3 = this.state.field3 ? this.state.field3 + 3 : 3;
  };
  setField4 = () => {
    this.state.field4 = this.state.field4 ? this.state.field4 + 4 : 4;
  };
}

export const LeftTabStoreInstance = new LeftTabStore();
