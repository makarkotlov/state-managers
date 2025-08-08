import React, {FC, useRef} from 'react';
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

const useField4Selector = () => {
  const field4 = useContextSelector(LeftTabNewContext, value => value.field4);
  const setField4 = useContextSelector(
    LeftTabNewContext,
    value => value.setField4,
  );

  return {field4, setField4};
};

export const NewItem5: FC = () => {
  const {field4, setField4} = useSelectors(['field4', 'setField4']);

  const rerender = useRef(0);
  rerender.current++;

  return (
    <View>
      <Button
        onPress={() => setField4(prev => (prev ? prev + 4 : '4'))}
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
