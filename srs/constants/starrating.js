import React from 'react';
import { View, Text } from 'react-native';

const StarRating = ({ noOfStars }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starColor = i <= noOfStars ? '#FFD700' : '#D3D3D3'; 
      stars.push(<Text key={i} style={{ color: starColor }}>★</Text>);
    }
    return stars;
  };

  return <View style={{ flexDirection: 'row' }}>{renderStars()}</View>;
};

export default StarRating;
