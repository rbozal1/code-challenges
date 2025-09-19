import React, { useState } from 'react';
import { View, TextInput, Button,  Text } from 'react-native';

const ReviewForm = ({ onSubmit }) => {
  const [user, setUser] = useState('');
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    if (user && rating && comment) {
      onSubmit({ user, rating: parseInt(rating, 10), comment });
      // Clear form
      setUser('');
      setRating('');
      setComment('');
    }
  };

  return (
    <View>
      <Text>Leave a Review</Text>
      <TextInput placeholder="Your Name" value={user} onChangeText={setUser} />
      <TextInput placeholder="Rating (1-5)" value={rating} onChangeText={setRating} keyboardType="numeric" />
      <TextInput placeholder="Comment" value={comment} onChangeText={setComment}  multiline />
      <Button title="Submit Review" onPress={handleSubmit} />
    </View>
  );
};

// Add styles here...
export default ReviewForm;
