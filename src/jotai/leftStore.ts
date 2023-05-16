import {atom} from 'jotai';

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

export const leftStateAtom = atom<Data>({
  data: undefined,
  loading: true,
  refetch: () => {},
});
