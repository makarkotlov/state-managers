import {observer} from 'mobx-react';
import React, {useEffect, useRef} from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Item} from '../components/Item';
import {useLeftTabModel} from '../hooks/useLeftTabModel';

export const LeftTab = observer(() => {
  const {data, loading, reset, deleteItem} = useLeftTabModel();

  const startTime = useRef();
  const rerenderCount = useRef(0);
  const counter = useRef(0);
  const dataLength = useRef(data?.length);

  rerenderCount.current++;

  const onPress = () => {
    startTime.current = Date.now();
    reset();
  };

  const onDelete = async (title: string) => {
    startTime.current = Date.now();
    await deleteItem(title);
  };

  useEffect(() => {
    if (data?.length && counter.current === 0) {
      Alert.alert(
        'List render time',
        `${Date.now() - startTime.current}\n rerender count: ${
          rerenderCount.current
        }`,
      );
      startTime.current = 0;
      rerenderCount.current = 0;
      counter.current++;
    }
  }, [data?.length]);

  useEffect(() => {
    if (data?.length < dataLength.current) {
      Alert.alert(
        'Delete render time',
        `${Date.now() - startTime.current}\n rerender count: ${
          rerenderCount.current
        }`,
      );
      rerenderCount.current = 0;
    }
    dataLength.current = data?.length;
  }, [data?.length]);

  return (
    <ScrollView contentContainerStyle={loading && styles.container}>
      {loading && <ActivityIndicator size={'large'} />}
      <Button onPress={onPress} title={'Create the items'} />
      {data?.map(i => (
        <Item
          key={i.id}
          image={i.image}
          title={i.planet}
          deleteItem={onDelete}
        />
      ))}
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
