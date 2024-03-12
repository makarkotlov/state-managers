import React, {FC, useRef} from 'react';
import {Button, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  incrementField1,
  incrementField2,
  incrementField3,
  incrementField4,
} from '../stores/leftTabSlice';

export const NewItem6: FC = () => {
  const dispatch = useDispatch();
  const {staticField} = useSelector(state => state.rightTab);

  const rerender = useRef(0);
  rerender.current++;

  return (
    <View>
      <Button
        onPress={() => {
          setTimeout(() => {
            dispatch(incrementField1());
          }, 500);
          setTimeout(() => {
            dispatch(incrementField2());
          }, 1000);
          setTimeout(() => {
            dispatch(incrementField3());
          }, 1500);
          setTimeout(() => {
            dispatch(incrementField4());
          }, 2000);
        }}
        title={'Create the items'}
      />
      <View style={{flexDirection: 'row'}}>
        <Text>Static field</Text>
        <Text>{staticField}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text>Rerender count</Text>
        <Text>{rerender.current}</Text>
      </View>
    </View>
  );
};
