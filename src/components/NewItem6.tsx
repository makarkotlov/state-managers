import React, {FC, useContext, useRef} from 'react';
import {Button, Text, View} from 'react-native';
import {LeftTabMaxContext} from '../context/LeftTabMaxContext';
import {observer} from 'mobx-react';
import {useStoreMobx, withStore} from '../mobx/leftTabMiniStore';
// import {useLeftTabModel} from '../hooks/useLeftTabModel';

export const NewItem6: FC =
  // withStore(
  //   observer(
  () => {
    // const {
    //   state: {field4},
    //   setField4,
    // } = useStoreMobx();

    const {staticField, setField1, setField2, setField3, setField4} =
      useContext(LeftTabMaxContext);

    const rerender = useRef(0);
    rerender.current++;

    return (
      <View>
        <Button
          onPress={() => {
            setTimeout(() => {
              setField1(prev => (prev ? prev + 4 : '4'));
            }, 500);
            setTimeout(() => {
              setField2(prev => (prev ? prev + 4 : '4'));
            }, 1000);
            setTimeout(() => {
              setField3(prev => (prev ? prev + 4 : '4'));
            }, 1500);
            setTimeout(() => {
              setField4(prev => (prev ? prev + 4 : '4'));
            }, 2000);
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
  };
//   ),
// );
