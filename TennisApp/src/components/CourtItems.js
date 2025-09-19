import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Image } from 'react-native';

const CourtItems = ({ court, onSelect }) => (
  <TouchableOpacity onPress={onSelect}>
    <Image source={{ uri: court.image }}  />
    <View>
      <Text></Text>
      <Text>{court.location}</Text>
      <Text>Rating: {court.rating} ★</Text>
    </View>
  </TouchableOpacity>
);

// Add styles here...
export default CourtItems;
