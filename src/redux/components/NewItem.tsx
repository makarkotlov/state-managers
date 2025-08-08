import React, {FC, useRef} from 'react';
import {Button, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {incrementField1} from '../stores/leftTabSlice';

export const NewItem: FC = () => {
  const dispatch = useDispatch();
  const {field1} = useSelector(state => state.leftTab);

  const rerender = useRef(0);
  rerender.current++;

  return (
    <View>
      <Button
        onPress={() => dispatch(incrementField1())}
        // onPress={() => setField1()}
        title={'Create the items'}
      />
      <View style={{flexDirection: 'row'}}>
        <Text>Field 1</Text>
        <Text>{field1}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text>Rerender count</Text>
        <Text>{rerender.current}</Text>
      </View>
    </View>
  );
};
