import React, {FC, useContext, useRef} from 'react';
import {Button, Text, View} from 'react-native';
// import {useLeftTabModel} from '../hooks/useLeftTabModel';
import {LeftTabMiniContext} from '../context/LeftTabMiniContext';
import {
  LeftTabMiniStoreInstance,
  useStoreMobx,
  withStore,
} from '../mobx/leftTabMiniStore';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import {useLeftTabMiniStore} from '../mobx/useLeftTabMiniStore';
import {LeftTabNewContext} from '../context/LeftTabNewContext2';
import {useStore} from '../zustand/store';

export const NewItem: FC =
  //  withStore(
  //   observer(
  () => {
    // const {field1, setField1} = useLeftTabModel();
    const {field1, setField1} = useContext(LeftTabMiniContext);
    // const {
    //   state: {field1},
    //   setField1,
    // } = LeftTabMiniStoreInstance;

    // const {
    //   state: {field1},
    //   setField1,
    // } = useLeftTabMiniStore();

    // const {field1, setField1} = useContext(LeftTabNewContext);
    // const field1 = useStore(state => state.field1);
    // const setField1 = useStore(state => state.setField1);

    // const {
    //   state: {field1},
    //   setField1,
    // } = useStoreMobx();

    const rerender = useRef(0);
    rerender.current++;

    return (
      <View>
        <Button
          onPress={() => setField1(prev => (prev ? prev + 1 : '1'))}
          // onPress={() => setField1()}
          title={'Create the items'}
        />
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
  };
//   ),
// );
