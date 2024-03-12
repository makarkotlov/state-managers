import React, {FC, useRef} from 'react';
import {Button, Text, View} from 'react-native';
import {LeftTabStoreInstance} from '../stores/leftTabStore';
import {observer} from 'mobx-react';

export const NewItem3: FC = observer(() => {
  const {
    state: {field3},
    setField3,
  } = LeftTabStoreInstance;

  const rerender = useRef(0);
  rerender.current++;

  return (
    <View>
      <Button onPress={setField3} title={'Create the items'} />
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
});
