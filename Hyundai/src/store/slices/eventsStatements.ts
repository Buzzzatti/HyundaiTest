import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {IRootState} from '../rootStore';

import {getEvents} from '../../api/events/events';
import {IEventsResponse} from '../../types/api/events';

export interface IEvent {
  id: string;
  type: string;
  actor: {
    id: number;
    login: string;
    display_login: string;
    gravatar_id: string;
    url: string;
    avatar_url: string;
  };
  repo: {
    id: number;
    name: string;
    url: string;
  };
  payload: {
    action: string;
  };
  public: boolean;
  created_at: string;
}

export interface IEvents {
  isEventsLoading: boolean;
  events: IEvent[];
}
const initialState: IEvents = {
  isEventsLoading: false,
  events: [],
};

export const fetchEvets = createAsyncThunk(
  'fetchEvets',
  async (params: IEventsResponse) => {
    try {
      const response = await getEvents(params);
      return response;
    } catch (err) {
      return err;
    }
  },
);

const eventsStatementsSlice = createSlice({
  name: 'eventsStatements',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // STATE
      .addCase(fetchEvets.pending, state => {
        state.isEventsLoading = true;
      })
      .addCase(fetchEvets.fulfilled, state => {
        state.isEventsLoading = false;
      })
      .addCase(fetchEvets.rejected, state => {
        state.isEventsLoading = false;
      });
  },
});

//selectors
export const eventsStatementsIsLoading = (state: IRootState) =>
  state.eventsStatements.isEventsLoading;

export const historyStatementsEvents = (state: IRootState) =>
  state.eventsStatements.events;

//actions
// export const {setClearCurrentOperation} = eventsStatementsSlice.actions;

export default eventsStatementsSlice.reducer;
