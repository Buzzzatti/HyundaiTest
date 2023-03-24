import React, {FunctionComponent, useEffect, useState} from 'react';
import {
  Pressable,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';

// import {useDispatch, useSelector} from 'react-redux';
// import {useIsFocused, useNavigation} from '@react-navigation/native';
// import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StyleService, useStyleSheet} from '@ui-kitten/components';
import {useDispatch, useSelector} from 'react-redux';
import {
  eventsStatementsIsLoading,
  fetchEvets,
  historyStatementsEvents,
} from '../store/slices/eventsStatements';

// import {
//   accountsInfoSelector,
// } from '~store/slices/accountInfoSlice ';
// import {
//   fetchCheckNotesState,
//   notesStatesSelector,
// } from '~store/slices/notifications';

interface IMainScreenProps {}

type RootStackParamList = {
  DebitCards: undefined;
  Notifications: object | undefined;
};

export const MainScreen: FunctionComponent<IMainScreenProps> = () => {
  const styles = useStyleSheet(themedStyles);
  // const [renderCounter, setRenderCounter] = useState(0);
  // const accounts = useSelector(accountsInfoSelector);
  // const isFocused = useIsFocused();

  // const navigation =
  //   useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const dispatch = useDispatch();

  const request = () => {
    dispatch(fetchEvets({page: 1, per_page: 10}));
  };

  const isLoading = useSelector(eventsStatementsIsLoading);
  const events = useSelector(historyStatementsEvents);

  return (
    <SafeAreaView>
      <View style={{height: '100%'}}>
        <ScrollView
          refreshControl={
            <RefreshControl
              onRefresh={() => console.log('lol')}
              refreshing={false}
            />
          }>
          <Text>Lol122{`${isLoading}`}</Text>
          <Pressable onPress={() => request()}>
            <View style={styles.name} />
            {events.map(el => {
              return <Text>{el?.actor}</Text>;
            })}
          </Pressable>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const themedStyles = StyleService.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingRight: 24,
  },
  name: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
  },
  screenWrapper: {
    backgroundColor: 'primary-main-gray-0',
    flex: 1,
  },
  storiesWrapper: {
    marginHorizontal: -24,
  },
  screenContainer: {
    paddingLeft: 24,
    paddingRight: 12,
  },
});
