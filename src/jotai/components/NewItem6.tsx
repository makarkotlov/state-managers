import React, {FC, useRef} from 'react';
import {Button, Text, View} from 'react-native';
import {rightStateAtom} from '../stores/rightStore';
import {useAtom} from 'jotai';
import {leftStateAtom} from '../stores/leftStore';

export const NewItem6: FC = () => {
  const [{staticField}] = useAtom(rightStateAtom);
  const [, setData] = useAtom(leftStateAtom);

  const rerender = useRef(0);
  rerender.current++;

  return (
    <View>
      <Button
        onPress={() => {
          setTimeout(() => {
            setData({field1: 'lol1'});
          }, 500);
          setTimeout(() => {
            setData({field2: 'lol2'});
          }, 1000);
          setTimeout(() => {
            setData({field3: 'lol3'});
          }, 1500);
          setTimeout(() => {
            setData({field4: 'lol4'});
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
