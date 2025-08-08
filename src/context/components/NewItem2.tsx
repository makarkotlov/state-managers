import React, {FC, useContext, useRef} from 'react';
import {Button, Text, View} from 'react-native';
import {LeftTabNewContext, ListContextType} from '../stores/LeftTabContext';

import {useContextSelector} from 'use-context-selector';

const useSelectors = <Key extends keyof ListContextType>(
  propertyKeyList: Key[],
) => {
  const obj: Partial<ListContextType> = {};

  for (const propertyKey of propertyKeyList) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const value = useContextSelector(
      LeftTabNewContext,
      value => value[propertyKey],
    );

    obj[propertyKey] = value;
  }

  return obj;
};

const useField2Selector = () => {
  const field2 = useContextSelector(LeftTabNewContext, value => value.field2);
  const setField2 = useContextSelector(
    LeftTabNewContext,
    value => value.setField2,
  );

  return {field2, setField2};
};

export const NewItem2: FC = () => {
  const {field2, setField2} = useSelectors(['field2', 'setField2']);

  const rerender = useRef(0);
  rerender.current++;

  return (
    <View>
      <Button
        onPress={() => setField2(prev => (prev ? prev + 2 : '2'))}
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
