import React, {FC, useContext, useRef} from 'react';
import {Button, Text, View} from 'react-native';
// import {useLeftTabModel} from '../hooks/useLeftTabModel';
import {LeftTabMiniContext2} from '../context/LeftTabMiniContext2';
import {
  LeftTabMiniStoreInstance,
  useStoreMobx,
  withStore,
} from '../mobx/leftTabMiniStore';
import {observer} from 'mobx-react';
import {useLeftTabMiniStore} from '../mobx/useLeftTabMiniStore';
import {LeftTabNewContext} from '../context/LeftTabNewContext2';
import {useStore} from '../zustand/store';

export const NewItem2: FC =
  //  withStore(
  //   observer(
  () => {
    // const {field2, setField2} = useLeftTabModel();
    const {field2, setField2} = useContext(LeftTabMiniContext2);
    // const {
    //   state: {field2},
    //   setField2,
    // } = LeftTabMiniStoreInstance;
    // const {
    //   state: {field2},
    //   setField2,
    // } = useLeftTabMiniStore();

    // const {field2, setField2} = useContext(LeftTabNewContext);

    // const field2 = useStore(state => state.field2);
    // const setField2 = useStore(state => state.setField2);

    // const {
    //   state: {field2},
    //   setField2,
    // } = useStoreMobx();

    const rerender = useRef(0);
    rerender.current++;

    return (
      <View>
        <Button
          onPress={() => setField2(prev => (prev ? prev + 2 : '2'))}
          // onPress={() => setField2()}
          title={'Create the items'}
        />
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
  };
//   ),
// );
