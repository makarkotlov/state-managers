import React, {FC} from 'react';
import {View, Image, Text, StyleSheet, Button} from 'react-native';

type Props = {
  image: string;
  title: string;
  deleteItem: (title: string) => void;
};

export const Item: FC<Props> = ({image, title, deleteItem}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />
      <Text>{title}</Text>
      <Button title={'Delete'} onPress={() => deleteItem(title)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    borderColor: 'white',
    borderWidth: 2,
  },
  image: {
    width: 100,
    height: 100,
  },
});
