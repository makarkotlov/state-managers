import React, {FC, useMemo, useRef, useState} from 'react';
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

const useField1Selector = () => {
  const field1 = useContextSelector(LeftTabNewContext, value => value.field1);
  const setField1 = useContextSelector(
    LeftTabNewContext,
    value => value.setField1,
  );

  return {field1, setField1};
};

export const NewItem: FC = () => {
  const [check, setCheck] = useState(false);
  const {field1, setField1} = useSelectors(['field1', 'setField1']);

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
      <Button onPress={() => setCheck(prev => !prev)} title={'Update screen'} />
    </View>
  );
};
//   ),
// );
