import React, {FC, useRef} from 'react';
import {Button, Text, View} from 'react-native';
import {useLeftStore} from '../stores/store';

export const NewItem3: FC = () => {
  const {field3, setField3} = useLeftStore();

  const rerender = useRef(0);
  rerender.current++;

  return (
    <View>
      <Button onPress={setField3} title={'Create the items'} />
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
