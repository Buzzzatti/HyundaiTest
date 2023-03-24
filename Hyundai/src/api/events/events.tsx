import {defaultApi} from '..';
import {IEventsResponse} from '../../types/api/events';
import {requestPaths} from '../RequestsPaths';

export async function getEvents(params: IEventsResponse): Promise<any> {
  try {
    console.log('params', params);

    const {data} = await defaultApi.get(
      // `${requestPaths.events}?per_page=${params.per_page}&page=${params.page}`,
      `${requestPaths.events}`,
    );
    console.log('data', data);

    return data;
  } catch (err: any) {
    console.log('err', err);

    throw err;
  }
}
