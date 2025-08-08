import React, {FC, useRef} from 'react';
import {Button, Text, View} from 'react-native';
import {observer} from 'mobx-react';
import {LeftTabStoreInstance} from '../stores/leftTabStore';
import {RightTabStoreInstance} from '../stores/rightTabStore';

export const NewItem6: FC = observer(() => {
  const {setField1, setField2, setField3, setField4} = LeftTabStoreInstance;

  const {
    state: {staticField},
  } = RightTabStoreInstance;

  const rerender = useRef(0);
  rerender.current++;

  return (
    <View>
      <Button
        onPress={() => {
          setTimeout(setField1, 500);
          setTimeout(setField2, 1000);
          setTimeout(setField3, 1500);
          setTimeout(setField4, 2000);
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
});
