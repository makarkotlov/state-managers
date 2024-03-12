import { useAtom } from 'jotai';
import React, {FC, useRef} from 'react';
import {Button, Text, View} from 'react-native';
import { leftStateAtom } from '../stores/leftStore';

export const NewItem4: FC = () => {
  const [{field4}, setData] = useAtom(leftStateAtom);

  const rerender = useRef(0);
  rerender.current++;

  return (
    <View>
      <Button
        onPress={() => setData({field4: field4 ? field4 + 4 : '4'})}
        // onPress={() => setField4()}
        title={'Create the items'}
      />
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
