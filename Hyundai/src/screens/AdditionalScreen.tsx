import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';

import {ScreenContainer} from '../components/ScreenContainer';

// import {ScreenContainer} from '~components/shared/ScreenContainer';

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
        <Text>lol</Text>
      </View>
    </ScreenContainer>
  );
};

export default AdditionalScreen;
