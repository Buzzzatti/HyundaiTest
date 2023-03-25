import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';

import {ScreenContainer} from '../components/ScreenContainer';

interface IPaymentScreen {
  route: RouteProp<{
    params: {
      isGoBack?: boolean;
      cardId?: string;
    };
  }>;
}

const AdditionalScreen: React.FC<IPaymentScreen> = () => {
  return (
    <ScreenContainer isPadding={0}>
      <StatusBar barStyle={'dark-content'} backgroundColor="#fff" />
      <View>
        <Text>Второй Экран Не понятно что требовалось </Text>
      </View>
    </ScreenContainer>
  );
};

export default AdditionalScreen;
