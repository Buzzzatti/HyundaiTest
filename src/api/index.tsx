import {BASE_DEV_URL, GIT_TOKEN} from '@env';
import axios from 'axios';

export const defaultApi = axios.create({
  baseURL: 'https://api.github.com',
  // baseURL: BASE_DEV_URL,
  headers: {
    'X-GitHub-Api-Version': '2022-11-28',
    // Authorization: GIT_TOKEN,
  },
});
