import React from 'react';
import { View, Text, Button, FlatList, Image, StyleSheet } from 'react-native';

const friends = [
  {
    id: '1',
    name: 'Restu',
    image: require('../assets/restu.jpeg'),
    phone: '0834-8765-9876',
    address: 'Jl. Jampang Tertinggal No. 1',
    status: 'online',
  },
  {
    id: '2',
    name: 'Yuki',
    image: require('../assets/Yuki.jpeg'),
    phone: '0987-7654-3210',
    address: 'Jl. Karang Tengah No. 2',
    status: 'offline',
  },
  {
    id:'3',
    name: 'Hanif Mum',
    image: require('../assets/hanif.jpeg'),
    phone: '0756-8768-4321',
    address: 'Jl. Sijenong No. 3',
    status: 'offline',
  },
  {
    id:'4',
    name: 'Harry P',
    image: require('../assets/harry.jpeg'),
    phone: '0568-7654-6547',
    address: 'Jl. Karang Tengah No. 4',
    status: 'online',
  },
  {
    id:'5',
    name: 'Ages',
    image: require('../assets/ages.jpeg'),
    phone: '0453-8765-9876',
    address: 'Jl. Jampang Tertinggal No.5',
    status: 'offline',
  },
  {
    id:'6',
    name: 'Carol',
    image: require('../assets/carol.jpeg'),
    phone: '0765-8756-3245',
    address: 'Jl. Plara No.6',
    status: 'online',
  },
  {
    id:'7',
    name: 'Annisa',
    image: require('../assets/annisa.jpeg'),
    phone: '0356-7864-9785',
    address: 'Jl. Goalpara Teapark No.7',
    status: 'online',
  },
  {
    id:'8',
    name: 'Reiza',
    image: require('../assets/reiza.jpeg'),
    phone: '0546-8765-4356',
    address: '0765-9876-8753',
    status: 'offline',
  },
];

const Kontak = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kontak</Text>
      <FlatList
        data={friends}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.friendItem}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.info}>
              <Text>{item.name}</Text>
              <Button
                title="View Details"
                onPress={() => navigation.navigate('About', { friend: item })}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  friendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
});

export default Kontak;
