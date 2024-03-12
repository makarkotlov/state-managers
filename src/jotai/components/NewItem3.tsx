import {useAtom} from 'jotai';
import React, {FC, useRef} from 'react';
import {Button, Text, View} from 'react-native';
import {leftStateAtom} from '../stores/leftStore';

export const NewItem3: FC = () => {
  const [{field3}, setData] = useAtom(leftStateAtom);

  const rerender = useRef(0);
  rerender.current++;

  return (
    <View>
      <Button
        onPress={() => setData({field3: field3 ? field3 + 3 : '3'})}
        // onPress={() => setField3()}
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
