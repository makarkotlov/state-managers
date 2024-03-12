import React, {FC, useContext, useRef} from 'react';
import {Button, Text, View} from 'react-native';
import {LeftTabNewContext} from '../stores/LeftTabContext';

export const NewItem: FC = () => {
  const {field1, setField1} = useContext(LeftTabNewContext);

  const rerender = useRef(0);
  rerender.current++;

  return (
    <View>
      <Button
        onPress={() => setField1(prev => (prev ? prev + 1 : '1'))}
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
