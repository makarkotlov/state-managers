import {useAtom} from 'jotai';
import React, {FC, useRef} from 'react';
import {Button, Text, View} from 'react-native';
import {leftStateAtom} from '../stores/leftStore';

export const NewItem: FC = () => {
  const [{field1}, setData] = useAtom(leftStateAtom);

  const rerender = useRef(0);
  rerender.current++;

  return (
    <View>
      <Button
        onPress={() => setData({field1: field1 ? field1 + 1 : '1'})}
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
