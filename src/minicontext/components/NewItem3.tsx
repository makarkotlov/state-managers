import React, {FC, useContext, useRef} from 'react';
import {Button, Text, View} from 'react-native';
import {LeftTabMiniContext3} from '../stores/LeftTabMiniContext3';

export const NewItem3: FC = () => {
  const {field3, setField3} = useContext(LeftTabMiniContext3);

  const rerender = useRef(0);
  rerender.current++;

  return (
    <View>
      <Button
        onPress={() => setField3(prev => (prev ? prev + 3 : '3'))}
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
