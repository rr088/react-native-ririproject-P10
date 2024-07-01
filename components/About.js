import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const About = ({ route, navigation }) => {
  const { friend } = route.params;

  return (
    <View style={styles.container}>
      <Image source={friend.image} style={styles.image} />
      <Text style={styles.name}>{friend.name}</Text>
      <Text>Phone: {friend.phone}</Text>
      <Text>Address: {friend.address}</Text>
      <Text>Status: {friend.status}</Text>
      <Button
        title="Kembali"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    marginBottom: 10,
  },
});

export default About;
