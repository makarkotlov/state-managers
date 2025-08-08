import {autorun, makeAutoObservable} from 'mobx';

type State = {
  staticField?: number;
};

class LeftTabStore {
  state: State = {
    staticField: 0,
  };

  constructor() {
    makeAutoObservable(this);
    autorun(() => {
      console.log('Energy level:', this.state.staticField);
    });
  }
}

export const RightTabStoreInstance = new LeftTabStore();
