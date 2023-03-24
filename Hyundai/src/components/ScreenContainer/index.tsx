import React, {FunctionComponent, ReactNode} from 'react';
import {SafeAreaView, View} from 'react-native';

interface IScreenContainerProps {
  children: ReactNode;
  isPadding?: number;
  color?: string;
}

export const ScreenContainer: FunctionComponent<IScreenContainerProps> = ({
  children,
  isPadding = 24,
  color = '',
}) => {
  return (
    <SafeAreaView style={{flexGrow: 1, backgroundColor: `${color}`}}>
      <View
        style={{
          paddingHorizontal: isPadding,
          flex: 1,
          height: '100%',
        }}>
        {children}
      </View>
    </SafeAreaView>
  );
};
