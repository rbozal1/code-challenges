import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import allCourts from '../data/mockData';
import ReviewForm from '../components/Form';

const CourtDetailScreen = ({ route }) => {
  const { courtId } = route.params;
  const [court, setCourt] = useState(null);

  useEffect(() => {
    // In a real app, you'd fetch by ID. Here, we find it in our mock data.
    const selectedCourt = allCourts.find(c => c.id === courtId);
    setCourt(selectedCourt);
  }, [courtId]);

  const handleAddReview = (review) => {
    // Create a new reviews array and update the court state
    const updatedReviews = [...court.reviews, { id: Date.now(), ...review }];
    setCourt({ ...court, reviews: updatedReviews });
    // Note: This update is local to the component state and won't persist globally.
  };

  if (!court) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView>
      <Image source={{ uri: court.image }}/>
      <View >
        <Text></Text>
        <Text>{court.location}</Text>
        <Text>Reviews</Text>
        {court.reviews.map(review => (
          <View key={review.id}>
            <Text>{review.user} ({review.rating} ★)</Text>
            <Text>{review.comment}</Text>
          </View>
        ))}
        <ReviewForm onSubmit={handleAddReview} />
      </View>
    </ScrollView>
  );
};

// Add styles here...
export default CourtDetailScreen;
