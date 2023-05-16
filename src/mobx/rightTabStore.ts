import {makeAutoObservable} from 'mobx';
import {repeated} from '../context/LeftTabContext';

type Space = {
  planet: string;
  image: string;
  id: string;
};

type Data = {
  data?: Space[];
  loading: boolean;
  refetch: () => void;
};

class RightTabStore {
  state: Data = {
    data: undefined,
    loading: true,
    refetch: () => {},
  };

  constructor() {
    makeAutoObservable(this);
  }

  reset = async () => {
    this.state = {
      data: undefined,
      loading: true,
      refetch: () => {},
    };
    const response = await new Promise<Data['data']>(resolve => {
      resolve(repeated);
    });

    this.state = {
      data: response,
      loading: false,
      refetch: () => {},
    };
  };

  deleteItem = async (planet: string) => {
    const filtered = this.state.data?.filter(i => planet !== i.planet);
    const response = await new Promise<Data['data']>(resolve => {
      resolve(filtered);
    });
    this.state = {
      data: response,
      loading: false,
      refetch: () => {},
    };
  };
}

export const RightTabStoreInstance = new RightTabStore();
