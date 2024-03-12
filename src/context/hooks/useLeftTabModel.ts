import {useContext} from 'react';
import {LeftTabNewContext} from '../stores/LeftTabContext';

export const useLeftTabModel = () => {
  const context = useContext(LeftTabNewContext);
  return context;
};
