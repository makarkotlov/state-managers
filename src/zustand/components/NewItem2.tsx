import React, {FC, useRef} from 'react';
import {Button, Text, View} from 'react-native';
import {useLeftStore} from '../stores/store';

export const NewItem2: FC = () => {
  const {field2, setField2} = useLeftStore();

  const rerender = useRef(0);
  rerender.current++;

  return (
    <View>
      <Button onPress={setField2} title={'Create the items'} />
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
