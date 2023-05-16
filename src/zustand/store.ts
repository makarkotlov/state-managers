import {useEffect, useState} from 'react';
import {create} from 'zustand';

export const useStore = create(set => {
  return {
    field1: 0,
    field2: 0,
    field3: 0,
    field4: 0,
    setField1: () => set(state => ({field1: state.field1 + 1})),
    setField2: () => set(state => ({field2: state.field2 + 1})),
    setField3: () => set(state => ({field3: state.field3 + 1})),
    setField4: () => set(state => ({field4: state.field4 + 1})),
  };
});
