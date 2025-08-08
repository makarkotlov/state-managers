import {atom} from 'jotai';

export const staticAtom = atom<{staticField: number}>({
  staticField: 0,
});
