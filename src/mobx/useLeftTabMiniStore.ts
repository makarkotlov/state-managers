import {useEffect, useMemo, useState} from 'react';
import {LeftTabMiniStoreInstance} from './leftTabMiniStore';

export const useLeftTabMiniStore = () => {
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setTimer(2000);
    }, 2000);
  }, []);
  return {...LeftTabMiniStoreInstance};
};
