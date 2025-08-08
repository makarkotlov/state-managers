import {useAtom, useAtomValue, useSetAtom} from 'jotai';
import React, {FC, useRef} from 'react';
import {Button, Text, View} from 'react-native';
import {field1Atom, setField1Atom} from '../stores/leftStore';

export const NewItem: FC = () => {
  // const [{field1}, setField1] = useAtom(field1Atom);
  const {field1} = useAtomValue(field1Atom);
  const setField = useSetAtom(setField1Atom);

  const rerender = useRef(0);
  rerender.current++;

  return (
    <View>
      <Button
        onPress={() => {
          setField(prev => ({
            ...prev,
            field1: prev.field1 ? prev.field1 + 1 : '1',
          }));
        }}
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
