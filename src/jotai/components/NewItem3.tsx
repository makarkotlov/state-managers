import {useAtom} from 'jotai';
import React, {FC, useRef} from 'react';
import {Button, Text, View} from 'react-native';
import {field3Atom} from '../stores/leftStore';

export const NewItem3: FC = () => {
  const [{field3}, setField3] = useAtom(field3Atom);

  const rerender = useRef(0);
  rerender.current++;

  return (
    <View>
      <Button
        onPress={() => {
          setField3(prev => ({field3: prev.field3 ? prev.field3 + 3 : '3'}));
        }}
        // onPress={() => setField1()}
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
