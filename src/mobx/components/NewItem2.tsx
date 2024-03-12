import React, {FC, useRef} from 'react';
import {Button, Text, View} from 'react-native';
import {LeftTabStoreInstance} from '../stores/leftTabStore';
import {observer} from 'mobx-react';

export const NewItem2: FC = observer(() => {
  const {
    state: {field2},
    setField2,
  } = LeftTabStoreInstance;

  const rerender = useRef(0);
  rerender.current++;

  return (
    <View>
      <Button onPress={setField2} title={'Create the items'} />
      <View style={{flexDirection: 'row'}}>
        <Text>Field 2</Text>
        <Text>{field2}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text>Rerender count</Text>
        <Text>{rerender.current}</Text>
      </View>
    </View>
  );
});
