import React, {FC, useRef} from 'react';
import {Button, Text, View} from 'react-native';
import {LeftTabStoreInstance} from '../stores/leftTabStore';
import {observer} from 'mobx-react';

export const NewItem: FC = observer(() => {
  const {
    state: {field1},
    setField1,
  } = LeftTabStoreInstance;

  const rerender = useRef(0);
  rerender.current++;

  return (
    <View>
      <Button onPress={setField1} title={'Create the items'} />
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
});
