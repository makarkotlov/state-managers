import React, {FC, useContext, useEffect, useRef} from 'react';
import {Button, Text, View} from 'react-native';
import {LeftTabMiniContext4} from '../context/LeftTabMiniContext4';
import {
  LeftTabMiniStoreInstance,
  useStoreMobx,
  withStore,
} from '../mobx/leftTabMiniStore';
import {observer} from 'mobx-react';
import {useLeftTabMiniStore} from '../mobx/useLeftTabMiniStore';
import {LeftTabNewContext} from '../context/LeftTabNewContext2';
import {useStore} from '../zustand/store';
// import {useLeftTabModel} from '../hooks/useLeftTabModel';

export const NewItem5: FC =
  // withStore(
  //   observer(
  () => {
    // const {field4, setField4} = useLeftTabModel();

    const {field4, setField4} = useContext(LeftTabMiniContext4);

    // const {
    //   state: {field1, field2, field3, field4},
    //   setField4,
    // } = LeftTabMiniStoreInstance;

    // const {
    //   state: {field1, field2, field3, field4},
    //   setField4,
    // } = useLeftTabMiniStore();

    // const {field4, setField4} = useContext(LeftTabNewContext);

    // const field4 = useStore(state => state.field4);
    // const setField4 = useStore(state => state.setField4);

    // const {
    //   state: {field4},
    //   setField4,
    // } = useStoreMobx();

    const rerender = useRef(0);
    rerender.current++;

    return (
      <View>
        <Button
          onPress={() => setField4(prev => (prev ? prev + 4 : '4'))}
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
//   ),
// );
