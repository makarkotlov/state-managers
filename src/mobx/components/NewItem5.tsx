import React, {FC, useRef} from 'react';
import {Button, Text, View} from 'react-native';
import {LeftTabStoreInstance} from '../stores/leftTabStore';
import {observer} from 'mobx-react';

export const NewItem5: FC = observer(() => {
  const {
    state: {field4},
    setField4,
  } = LeftTabStoreInstance;

  const rerender = useRef(0);
  rerender.current++;

  return (
    <View>
      <Button onPress={setField4} title={'Create the items'} />
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
});
