import React, {FC, useRef} from 'react';
import {Button, Text, View} from 'react-native';
import {useLeftStore} from '../stores/leftStore';

export const NewItem2: FC = () => {
  const {fieldLol} = useLeftStore().field1Obj;

  const rerender = useRef(0);
  rerender.current++;

  return (
    <View>
      <Button title={'Create the items'} />
      <View style={{flexDirection: 'row'}}>
        <Text>Field LOL</Text>
        <Text>{fieldLol}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text>Rerender count</Text>
        <Text>{rerender.current}</Text>
      </View>
    </View>
  );
};
