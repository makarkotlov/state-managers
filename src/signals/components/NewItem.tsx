import React, {FC, useEffect, useRef} from 'react';
import {Button, Text, View} from 'react-native';
import {useLeftStore} from '../stores/leftStore';

export const NewItem: FC = () => {
  const {field1Obj, setField1} = useLeftStore();

  const rerender = useRef(0);
  rerender.current++;

  useEffect(() => {
    console.log('updeted setField1 ref ');
  }, [setField1]);

  return (
    <View>
      <Button onPress={setField1} title={'Create the items'} />
      <View style={{flexDirection: 'row'}}>
        <Text>Field 1: </Text>
        <Text>{field1Obj.field1}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text>Rerender count: </Text>
        <Text>{rerender.current}</Text>
      </View>
    </View>
  );
};
