import React, {FC, useContext, useRef} from 'react';
import {Button, Text, View} from 'react-native';
// import {useLeftTabModel} from '../hooks/useLeftTabModel';
import {LeftTabMiniContext3} from '../context/LeftTabMiniContext3';
import {
  LeftTabMiniStoreInstance,
  useStoreMobx,
  withStore,
} from '../mobx/leftTabMiniStore';
import {observer} from 'mobx-react';
import {useLeftTabMiniStore} from '../mobx/useLeftTabMiniStore';
import {LeftTabNewContext} from '../context/LeftTabNewContext2';
import {useStore} from '../zustand/store';

export const NewItem3: FC =
  //  withStore(
  //   observer(
  () => {
    // const {field3, setField3} = useLeftTabModel();
    const {field3, setField3} = useContext(LeftTabMiniContext3);
    // const {
    //   state: {field3},
    //   setField3,
    // } = LeftTabMiniStoreInstance;

    // const {
    //   state: {field3},
    //   setField3,
    // } = useLeftTabMiniStore();

    // const {field3, setField3} = useContext(LeftTabNewContext);

    // const field3 = useStore(state => state.field3);
    // const setField3 = useStore(state => state.setField3);

    // const {
    //   state: {field3},
    //   setField3,
    // } = useStoreMobx();

    const rerender = useRef(0);
    rerender.current++;

    return (
      <View>
        <Button
          onPress={() => setField3(prev => (prev ? prev + 3 : '3'))}
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
//   ),
// );
