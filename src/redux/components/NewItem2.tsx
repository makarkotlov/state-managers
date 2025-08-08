import React, {FC, useRef} from 'react';
import {Button, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {incrementField2} from '../stores/leftTabSlice';

export const NewItem2: FC = () => {
  const dispatch = useDispatch();
  const {field2} = useSelector(state => state.leftTab);

  const rerender = useRef(0);
  rerender.current++;

  return (
    <View>
      <Button
        onPress={() => dispatch(incrementField2())}
        // onPress={() => setField2()}
        title={'Create the items'}
      />
      <View style={{flexDirection: 'row'}}>
        <Text>Field 2</Text>
        <Text>{field2}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text>Rerender count</Text>
        <Text>{rerender.current}</Text>
      </View>
    </View>
  );
};
