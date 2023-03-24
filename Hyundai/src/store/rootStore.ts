import {
  AnyAction,
  combineReducers,
  configureStore,
  Reducer,
} from '@reduxjs/toolkit';

import eventsStatementsSlice from './slices/eventsStatements';

import storageActionsMiddleware from './storageActionsMiddleware';

const combinedReducer = combineReducers({
  eventsStatements: eventsStatementsSlice,
});

const rootReducer: Reducer = (state: IRootState, action: AnyAction) => {
  return combinedReducer(state, action);
};

export const rootStore = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware(/*{serializableCheck: false}*/).concat([
      storageActionsMiddleware,
    ]),
});

// Infer the `IRootState` and `AppDispatch` types from the store itself
export type IRootState = ReturnType<typeof combinedReducer>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof rootStore.dispatch;
