import React, {FC, useRef} from 'react';
import {Button, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {incrementField3} from '../stores/leftTabSlice';

export const NewItem3: FC = () => {
  const dispatch = useDispatch();
  const {field3} = useSelector(state => state.leftTab);

  const rerender = useRef(0);
  rerender.current++;

  return (
    <View>
      <Button
        onPress={() => dispatch(incrementField3())}
        // onPress={() => setField2()}
        title={'Create the items'}
      />
      <View style={{flexDirection: 'row'}}>
        <Text>Field 3</Text>
        <Text>{field3}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text>Rerender count</Text>
        <Text>{rerender.current}</Text>
      </View>
    </View>
  );
};
