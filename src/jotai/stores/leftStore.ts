import {atom} from 'jotai';

export const field1Atom = atom<{field1?: string; fieldLol?: string}>({
  field1: undefined,
  fieldLol: undefined,
});

export const field2Atom = atom<{field2?: string}>({
  field2: undefined,
});

export const field3Atom = atom<{field3?: string}>({
  field3: undefined,
});

export const field4Atom = atom<{field4?: string}>({
  field4: undefined,
});

export const setField1Atom = atom(field1Atom, (_, set) => {
  set(field1Atom, prev => ({
    field1: prev.field1 ? prev.field1 + 1 : '1',
  }));
});

export const setField2Atom = atom(field2Atom, (_, set) => {
  set(field2Atom, prev => ({
    field2: prev.field2 ? prev.field2 + 2 : '2',
  }));
});

export const setField3Atom = atom(field3Atom, (_, set) => {
  set(field3Atom, prev => ({
    field3: prev.field3 ? prev.field3 + 3 : '3',
  }));
});

export const setField4Atom = atom(field4Atom, (_, set) => {
  set(field4Atom, prev => ({
    field4: prev.field4 ? prev.field4 + 4 : '4',
  }));
});
