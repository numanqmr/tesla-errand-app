import React from 'react';
import { Text } from 'react-native';
import { ScreenContainer } from '../../../components';

const MapScreen: React.FC = () => {
  return (
    <ScreenContainer>
      <Text style={{ fontSize: 24 }}>This is the Map Screen</Text>
    </ScreenContainer>
  );
};

export { MapScreen };
