import {defaultApi} from '..';
import {IEvent} from '../../store/slices/eventsStatements';
import {IEventsResponse} from '../../types/api/events';
import {requestPaths} from '../RequestsPaths';

export async function getEvents(params: IEventsResponse): Promise<IEvent[]> {
  try {
    const {data} = await defaultApi.get(
      `${requestPaths.events}?per_page=${params.per_page}&page=${params.page}`,
    );
    return data;
  } catch (err: any) {
    throw err;
  }
}
