import React, {FC, useRef} from 'react';
import {Button, Text, View} from 'react-native';
import {staticAtom} from '../stores/rightStore';
import {useAtom, useSetAtom} from 'jotai';
import {
  field1Atom,
  field2Atom,
  field3Atom,
  field4Atom,
} from '../stores/leftStore';

export const NewItem6: FC = () => {
  const [{staticField}] = useAtom(staticAtom);

  const incrementField1 = useSetAtom(field1Atom);
  const incrementField2 = useSetAtom(field2Atom);
  const incrementField3 = useSetAtom(field3Atom);
  const incrementField4 = useSetAtom(field4Atom);

  const rerender = useRef(0);
  rerender.current++;

  return (
    <View>
      <Button
        onPress={() => {
          setTimeout(() => {
            incrementField1(prev => ({
              field1: prev.field1 ? prev.field1 + 1 : '1',
            }));
          }, 500);
          setTimeout(() => {
            incrementField2(prev => ({
              field2: prev.field2 ? prev.field2 + 2 : '2',
            }));
          }, 1000);
          setTimeout(() => {
            incrementField3(prev => ({
              field3: prev.field3 ? prev.field3 + 3 : '3',
            }));
          }, 1500);
          setTimeout(() => {
            incrementField4(prev => ({
              field4: prev.field4 ? prev.field4 + 4 : '4',
            }));
          }, 2000);
        }}
        title={'Create the items'}
      />
      <View style={{flexDirection: 'row'}}>
        <Text>Static field</Text>
        <Text>{staticField}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text>Rerender count</Text>
        <Text>{rerender.current}</Text>
      </View>
    </View>
  );
};
