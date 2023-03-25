import React, {FunctionComponent, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Linking,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {StyleService, useStyleSheet} from '@ui-kitten/components';
import {useDispatch, useSelector} from 'react-redux';
import {
  eventsStatementsIsLoading,
  fetchEvets,
  historyStatementsEvents,
} from '../store/slices/eventsStatements';
import {format} from 'date-fns';
import {ru} from 'date-fns/locale';
import {useIsFocused} from '@react-navigation/native';

interface IMainScreenProps {}

export const MainScreen: FunctionComponent<IMainScreenProps> = () => {
  const isLoading = useSelector(eventsStatementsIsLoading);
  const events = useSelector(historyStatementsEvents);
  const dispatch = useDispatch();

  const styles = useStyleSheet(themedStyles);

  const [counter, setCounter] = useState(30);
  const [page, setPage] = useState(1);
  const isFocused = useIsFocused();

  const request = async () => {
    dispatch(fetchEvets({page: page, per_page: 25}));
  };

  useEffect(() => {
    if (isFocused && page > 0) {
      if (counter > 0) {
        setTimeout(() => setCounter(counter - 1), 1000);
      } else {
        setPage(page + 1);
        request().then(() => {
          setCounter(30);
        });
      }
    }
  }, [counter, page]);

  useEffect(() => {
    if (isFocused) {
      setPage(page + 1);
      request().then(() => {
        setCounter(30);
      });
    }
  }, [isFocused]);

  const onRefresh = () => {
    setPage(page + 1);
    dispatch(fetchEvets({page: page, per_page: 25}))
      .unwrap()
      .then(() => {
        setCounter(30);
      });
  };
  console.log();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl onRefresh={() => onRefresh()} refreshing={false} />
          }>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <Text style={{fontSize: 20, marginBottom: 10}}>
              До обновления данных осталось :{' '}
            </Text>

            {isLoading ? (
              <ActivityIndicator size="large" color="#0082BA" />
            ) : (
              <Text style={{fontSize: 30}}>{counter} c.</Text>
            )}
          </View>
          {!isLoading && events.length > 0 ? (
            events?.map(el => {
              return (
                <View style={styles.user}>
                  <View style={styles.top}>
                    <Image
                      style={styles.img}
                      source={{
                        uri: el.actor.avatar_url,
                      }}
                    />
                    <View style={styles.nameContent}>
                      <View style={styles.nameBlock}>
                        <Text style={{color: '#000', fontSize: 20}}>
                          Логин:
                        </Text>
                        <TouchableOpacity
                          style={{marginLeft: 10}}
                          onPress={() => Linking.openURL(el.actor.url)}>
                          <Text style={{color: '#0082BA', fontSize: 16}}>
                            {el.actor.login}
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.dateBlock}>
                        <Text style={{color: '#000', fontSize: 20}}>
                          Создан :
                        </Text>
                        <Text
                          style={{marginLeft: 10, color: '#000', fontSize: 16}}>
                          {format(new Date(el.created_at), 'd MMMM, yyyy', {
                            locale: ru,
                          })}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.repoBlock}>
                    <Text style={{color: '#000', fontSize: 20}}>
                      Личный репозиторий :
                    </Text>
                    <TouchableOpacity
                      onPress={() => Linking.openURL(el.repo.url)}>
                      <Text style={{color: '#0082BA', fontSize: 20}}>
                        {el.repo.url}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.commitsBlock}>
                    <Text style={{color: '#000', fontSize: 20}}>
                      Общее число коммитов :
                      {el.payload.commits?.length > 0
                        ? el.payload.commits?.length
                        : 0}
                    </Text>
                  </View>
                </View>
              );
            })
          ) : (
            <Text>Данных нет Возможно период доступак гиту закончился</Text>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const themedStyles = StyleService.create({
  container: {
    backgroundColor: '#fff',
  },
  content: {height: '100%', paddingHorizontal: 20},
  user: {
    display: 'flex',
    backgroundColor: '#F2F4F9',
    flexDirection: 'column',
    marginBottom: 20,
    borderRadius: 20,
    padding: 10,
  },
  top: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {width: 100, height: 100, borderRadius: 50},
  nameContent: {
    display: 'flex',
    height: '100%',
    paddingVertical: 20,
    gap: 20,
    marginLeft: 10,
  },
  nameBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#8993A4',
  },
  dateBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#8993A4',
  },
  repoBlock: {
    display: 'flex',
    flexDirection: 'column',
    borderBottomWidth: 0.5,
    borderBottomColor: '#8993A4',
    marginBottom: 10,
  },
  commitsBlock: {
    display: 'flex',
    flexDirection: 'column',
    borderBottomWidth: 0.5,
    borderBottomColor: '#8993A4',
  },
  name: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
  },
});
