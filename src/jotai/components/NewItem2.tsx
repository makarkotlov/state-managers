import {useAtom, useAtomValue} from 'jotai';
import React, {FC, useRef} from 'react';
import {Button, Text, View} from 'react-native';
import {field1Atom, field2Atom} from '../stores/leftStore';

export const NewItem2: FC = () => {
  const {fieldLol} = useAtomValue(field1Atom);

  // const [{field2}, setField2] = useAtom(field2Atom);

  const rerender = useRef(0);
  rerender.current++;

  return (
    <View>
      <Button
        onPress={() => {
          // setField2(prev => ({field2: prev.field2 ? prev.field2 + 2 : '2'}));
        }}
        // onPress={() => setField1()}
        title={'Create the items'}
      />
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
