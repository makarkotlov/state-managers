import React, {FC, useRef} from 'react';
import {Button, Text, View} from 'react-native';
import {useLeftStore} from '../stores/store';

export const NewItem5: FC = () => {
  const {field4, setField4} = useLeftStore();

  const rerender = useRef(0);
  rerender.current++;

  return (
    <View>
      <Button onPress={setField4} title={'Create the items'} />
      <View style={{flexDirection: 'row'}}>
        <Text>Field 4</Text>
        <Text>{field4}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text>Rerender count</Text>
        <Text>{rerender.current}</Text>
      </View>
    </View>
  );
};
